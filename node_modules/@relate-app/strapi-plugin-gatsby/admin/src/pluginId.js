const pluginPkg = require('../../package.json');

const pluginId = pluginPkg.name.replace(/^@relate-app\/strapi-plugin-/i, '');

module.exports = pluginId;
