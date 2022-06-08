# Strapi plugin gatsby

The straight-forward plugin to integrate Strapi with Gatsby Cloud

## Features

This plugin does:

- Manage configuration for Gatsby Cloud and push changes in a controlled fashion.
- Add a preview button in the Content Manager to preview content in Gatsby Cloud.

## Installation

### Using yarn

```sh
yarn add @relate-app/strapi-plugin-gatsby
```

### Using npm

```sh
npm install --save @relate-app/strapi-plugin-gatsby
```

## Configuration

In the Settings page enable the preview on all the Content Types that are used in your Gatsby application and set the Build Webhook, Preview Webhook and Content Sync URL that you can find in your Gatsby Cloud Site Settings.

You can also configure headers for the request to Gatsby in the config, like the following example to make Gatsby Cloud only rebuild for a specific source.

```js
module.exports = {
  ...
  gatsby: {
    enabled: true,
    headers: {
      'x-gatsby-cloud-data-source': '@relate-app/gatsby-source-strapi',
    },
  },
  ...
};
```

You can also change the default source plugin for the preview on Gatsby in the config, like the following example.

```js
module.exports = {
  ...
  gatsby: {
    enabled: true,
    sourcePlugin: '@relate-app/gatsby-source-strapi',
  },
  ...
};
```
