import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Table, Thead, Tr, Th, Tbody, Td } from '@strapi/design-system/Table';
import { Flex } from '@strapi/design-system/Flex';
import { Typography } from '@strapi/design-system/Typography';
import { Switch } from '@strapi/design-system/Switch';
import { TextInput } from '@strapi/design-system/TextInput';
import getTrad from '../../utils/getTrad';

const SyncSettings = ({ settings, setSettings, formErrors }) => {
  const { buildWebhookURL, previewWebhookURL, contentSyncURL } = settings;
  const { formatMessage } = useIntl();

  const onChange = (value, field) => {
    setSettings({
      ...settings,
      [field]: {
        enabled: settings?.[field]?.enabled,
        value,
      },
    });
  };
  const onToggle = field => {
    setSettings({
      ...settings,
      [field]: {
        value: settings?.[field]?.value,
        enabled: !settings?.[field]?.enabled,
      },
    });
  };

  return (
    <Table colCount={2} rowCount={3}>
      <Thead>
        <Tr>
          <Th width="40%">
            <Typography variant="sigma" textColor="neutral600">
              {formatMessage({
                id: getTrad('Settings.table.header-name'),
                defaultMessage: 'Name',
              })}
            </Typography>
          </Th>
          <Th width="20%">
            <Typography variant="sigma" textColor="neutral600">
              {formatMessage({
                id: getTrad('Settings.table.header-build'),
                defaultMessage: 'Should trigger build',
              })}
            </Typography>
          </Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>
            <div style={{ padding: '20px 0' }}>
              <TextInput
                id="label-input"
                label={formatMessage({
                  id: getTrad('Settings.preview-webhook.url-label'),
                  defaultMessage: 'Preview Webhook',
                })}
                size="S"
                error={
                  formErrors.previewWebhookURL ? formatMessage(formErrors.previewWebhookURL) : null
                }
                name="previewWebhookURL"
                onChange={({ target: { value } }) => onChange(value, 'previewWebhookURL')}
                value={previewWebhookURL?.value}
              />
            </div>
          </Td>
          <Td>
            <Flex>
              <Switch
                onLabel={formatMessage({
                  id: 'Settings.content-type.enabled',
                  defaultMessage: 'Enabled',
                })}
                offLabel={formatMessage({
                  id: 'Settings.content-type.disabled',
                  defaultMessage: 'Disabled',
                })}
                label={`${formatMessage({
                  id: getTrad('Settings.table.th-status'),
                  defaultMessage: 'Status',
                })}`}
                selected={settings?.previewWebhookURL?.enabled}
                onChange={() => onToggle('previewWebhookURL')}
                visibleLabels
              />
            </Flex>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <div style={{ padding: '20px 0' }}>
              <TextInput
                id="label-input"
                label={formatMessage({
                  id: getTrad('Settings.build-webhook.url-label'),
                  defaultMessage: 'Build Webhook ',
                })}
                size="S"
                error={
                  formErrors.buildWebhookURL ? formatMessage(formErrors.buildWebhookURL) : null
                }
                name="buildWebhookURL"
                onChange={({ target: { value } }) => onChange(value, 'buildWebhookURL')}
                value={buildWebhookURL?.value}
              />
            </div>
          </Td>
          <Td>
            <Flex>
              <Switch
                onLabel={formatMessage({
                  id: 'Settings.content-type.enabled',
                  defaultMessage: 'Enabled',
                })}
                offLabel={formatMessage({
                  id: 'Settings.content-type.disabled',
                  defaultMessage: 'Disabled',
                })}
                label={`${formatMessage({
                  id: getTrad('Settings.table.th-status'),
                  defaultMessage: 'Status',
                })}`}
                selected={settings?.buildWebhookURL?.enabled}
                onChange={() => onToggle('buildWebhookURL')}
                visibleLabels
              />
            </Flex>
          </Td>
        </Tr>
        <Tr>
          <Td>
            <div style={{ padding: '20px 0' }}>
              <TextInput
                id="label-input"
                label={formatMessage({
                  id: getTrad('Settings.sync-content.url-label'),
                  defaultMessage: 'Content Sync',
                })}
                size="S"
                error={formErrors.contentSyncURL ? formatMessage(formErrors.contentSyncURL) : null}
                name="contentSyncURL"
                onChange={({ target: { value } }) => onChange(value, 'contentSyncURL')}
                value={contentSyncURL?.value}
              />
            </div>
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

SyncSettings.propTypes = {
  settings: PropTypes.shape({
    buildWebhookURL: PropTypes.shape({
      value: PropTypes.string,
      enabled: PropTypes.bool,
    }),
    previewWebhookURL: PropTypes.shape({
      value: PropTypes.string,
      enabled: PropTypes.bool,
    }),
    contentSyncURL: PropTypes.shape({
      value: PropTypes.string,
    }),
  }),
  formErrors: PropTypes.shape({
    buildWebhookURL: PropTypes.string,
    previewWebhookURL: PropTypes.string,
    contentSyncURL: PropTypes.string,
  }).isRequired,
  setSettings: PropTypes.func.isRequired,
};

SyncSettings.defaultProps = {
  settings: {
    buildWebhookURL: {
      value: '',
      enabled: true,
    },
    previewWebhookURL: {
      value: '',
      enabled: true,
    },
    contentSyncURL: {
      value: '',
    },
  },
};

export default SyncSettings;
