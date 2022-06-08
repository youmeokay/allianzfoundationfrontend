import * as yup from 'yup';

const schema = yup.object().shape({
  previewWebhookURL: yup
    .object()
    .shape({
      value: yup.string().url(),
      enabled: yup.boolean(),
    })
    .nullable(),
  buildWebhookURL: yup
    .object()
    .shape({
      value: yup.string().url(),
      enabled: yup.boolean(),
    })
    .nullable(),
  contentSyncURL: yup
    .object()
    .shape({
      value: yup.string().url(),
    })
    .nullable(),
});

export default schema;
