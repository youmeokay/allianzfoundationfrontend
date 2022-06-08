'use strict';

const { validateContentTypesInput, validateSettings } = require('../validation');

module.exports = ({ strapi }) => {
  return {
    async getSettings(ctx) {
      const { config } = strapi.plugin('gatsby');
      const sourcePlugin = config('sourcePlugin');
      const pluginStore = strapi.store({ type: 'plugin', name: 'gatsby' });
      const contentTypes = await pluginStore.get({ key: 'content-types' });
      const buildWebhookURL = await pluginStore.get({ key: 'build-webhook-url' });
      const previewWebhookURL = await pluginStore.get({ key: 'preview-webhook-url' });
      const contentSyncURL = await pluginStore.get({ key: 'content-sync-url' });

      ctx.body = {
        data: {
          contentTypes,
          buildWebhookURL,
          previewWebhookURL,
          contentSyncURL,
          sourcePlugin,
        },
      };
    },

    async updateContentTypes(ctx) {
      const { body } = ctx.request;
      const pluginStore = strapi.store({ type: 'plugin', name: 'gatsby' });

      await validateContentTypesInput(strapi)(body);

      await pluginStore.set({ key: 'content-types', value: body });

      ctx.body = { data: body };
    },

    async updateSettings(ctx) {
      const { body } = ctx.request;
      const pluginStore = strapi.store({ type: 'plugin', name: 'gatsby' });

      await validateSettings(body);

      await pluginStore.set({
        key: 'build-webhook-url',
        value: {
          value: (body?.buildWebhookURL?.value || '').replace(/\/$/, ''),
          enabled: body?.buildWebhookURL?.enabled || false,
        },
      });

      await pluginStore.set({
        key: 'preview-webhook-url',
        value: {
          value: (body?.previewWebhookURL?.value || '').replace(/\/$/, ''),
          enabled: body?.buildWebhookURL?.enabled || false,
        },
      });

      await pluginStore.set({
        key: 'content-sync-url',
        value: {
          value: (body?.contentSyncURL?.value || '').replace(/\/$/, ''),
        },
      });

      ctx.body = { data: body };
    },
  };
};
