require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const languages = require('./src/intl/Languages');

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AllianzFoundation`,
        short_name: `AllianzFoundation`,
        description: `We all live in a present that is characterized by rapid change. A present that poses great challenges to next generations.`,
        lang: `en`,
        display: `standalone`,
        icon: `./src/assets/icon.png`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#fff`,
        localize: [
          {
            start_url: `/de/`,
            lang: `de`,
            description: `Wir alle leben in einer Gegenwart, die von schnellen Veränderungen geprägt ist. Eine Gegenwart, die die nächsten Generationen vor große Herausforderungen stellt.`,
          },
        ],
      },
    },
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://allianzfoundationbackend.herokuapp.com",
        token: "5de6c6aad33be64a8075093d16df49bce45db2013febca7914c15f3e7385263f9a695657e38842a79eb456993fc6f9bf79e2f7b466d3428560b4085cac88985be3e2edef108a54962a3831d1aebf9eb6e08b9cc8adb28d4309febc6094063127f8dbab8eb90e4de1a731332c4a8b02568820890f88657bd07945a6bbd9cae873",
        // apiURL: "http://localhost:1337",
        // token: "5de6c6aad33be64a8075093d16df49bce45db2013febca7914c15f3e7385263f9a695657e38842a79eb456993fc6f9bf79e2f7b466d3428560b4085cac88985be3e2edef108a54962a3831d1aebf9eb6e08b9cc8adb28d4309febc6094063127f8dbab8eb90e4de1a731332c4a8b02568820890f88657bd07945a6bbd9cae873",
        collectionTypes: ['article', 'tag'],
        singleTypes: ['about', 'global', 'index', 'application', 'contact', 'goinglocal', 'imprint', 'newsletter', 'jobs', 'presse', 'privacy'],
        locale: ['en','de'],
        preview: true,
        cache: true,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: false,
      }
    },
  ],
}
