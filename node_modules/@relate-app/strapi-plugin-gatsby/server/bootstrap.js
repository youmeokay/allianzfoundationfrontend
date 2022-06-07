'use strict';
const fetch = require('cross-fetch');
const throttle = require('throttle-debounce').throttle;

const triggerBuild = throttle(1000, async strapi => {
  const { config } = strapi.plugin('gatsby');
  const headers = config('headers');
  const pluginStore = strapi.store({ type: 'plugin', name: 'gatsby' });
  const buildWebhookURL = (await pluginStore.get({ key: 'build-webhook-url' })) || {};
  const url = buildWebhookURL?.value;
  if (url && buildWebhookURL?.enabled) {
    fetch(url, {
      method: 'POST',
      ...headers && { headers },
    });
  }
});

const triggerPreview = throttle(1000, async strapi => {
  const { config } = strapi.plugin('gatsby');
  const headers = config('headers');
  const pluginStore = strapi.store({ type: 'plugin', name: 'gatsby' });
  const previewWebhookURL = (await pluginStore.get({ key: 'preview-webhook-url' })) || {};
  const url = previewWebhookURL?.value;
  if (url && previewWebhookURL?.enabled) {
    fetch(url, {
      method: 'POST',
      ...headers && { headers },
    });
  }
});

module.exports = async ({ strapi }) => {
  // bootstrap phase
  const pluginStore = strapi.store({ type: 'plugin', name: 'gatsby' });
  await initContentType(pluginStore, strapi);

  strapi.db.lifecycles.subscribe(async event => {
    switch (event.action) {
      case 'afterCreate':
      case 'afterCreateMany':
      case 'afterUpdate':
      case 'afterUpdateMany':
      case 'afterDelete':
      case 'afterDeleteMany': {
        const uid = event.model.uid;
        const contentTypes = (await pluginStore.get({ key: 'content-types' })) || {};
        if (contentTypes?.[uid]?.build) {
          triggerBuild(strapi);
        }
        if (contentTypes?.[uid]?.preview) {
          triggerPreview(strapi);
        }
        break;
      }

      default:
        break;
    }
  });
};

const initContentType = async (pluginStore, strapi) => {
  const KEY = 'content-types';

  const storedEnabledContentTypes = (await pluginStore.get({ key: KEY })) || {};

  const contentTypes = Object.keys(strapi.contentTypes).reduce((acc, uid) => {
    acc[uid] = storedEnabledContentTypes[uid] || { build: false, preview: false };

    return acc;
  }, {});

  await pluginStore.set({ key: KEY, value: contentTypes });
};
