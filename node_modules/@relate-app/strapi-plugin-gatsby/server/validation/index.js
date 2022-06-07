'use strict';

// eslint-disable-next-line
const { yup, validateYupSchema } = require('@strapi/utils');

const createContentTypesSchema = contentTypes => {
  const fields = Object.values(contentTypes).reduce((acc, current) => {
    acc[current.uid] = yup.object().shape({
      build: yup.boolean(),
      preview: yup.boolean(),
    });

    return acc;
  }, {});

  return yup
    .object()
    .shape(fields)
    .test('missing-keys', 'Some content types are missing', function (value) {
      if (!value) {
        return true;
      }

      return Object.keys(fields).every(key => key in value);
    })
    .noUnknown()
    .required();
};

const settingsSchema = yup
  .object()
  .shape({
    previewWebhookURL: yup.object().shape({
      value: yup.string().url(),
      enabled: yup.boolean(),
    }),
    buildWebhookURL: yup.object().shape({
      value: yup.string().url(),
      enabled: yup.boolean(),
    }),
    contentSyncURL: yup.object().shape({
      value: yup.string().url(),
    }),
  })
  .required();

module.exports = {
  validateContentTypesInput: ({ contentTypes }) =>
    validateYupSchema(createContentTypesSchema(contentTypes)),
  validateSettings: validateYupSchema(settingsSchema),
};
