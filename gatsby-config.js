require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const languages = require('./src/intl/Languages');

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-meilisearch',
      options: {
        host: 'https://allianz-foundation.net', // your host URL goes here
        apiKey: 'NTk2NzIyZTIzOTExY2I1N2IxMzMzMzUx',   // your API key goes here
        batchSize: 1,
        indexes: [
        {
          indexUid: 'allianzfoundation',
          transformer: (data) =>
            data.enArticle.nodes.map((node, index) => ({
              title: index,
              description: index,
              slug: index,
              ...node,
            })),
          query: `
            query MyQuery {
              enArticle: allStrapiArticle(filter: {locale: {eq: "en"}}) {
                nodes {
                  id
                  title
                  description
                  slug
                }
              }
            }
          `,
        },
        {
          indexUid: 'allianzfoundation',
          transformer: (data) =>
            data.enFeed.nodes.map((node, index) => ({
              name: index,
              description: index,
              slug: index,
              ...node,
            })),
          query: `
            query MyQuery {
              enFeed: allStrapiTag(filter: {locale: {eq: "en"}}) {
                nodes {
                  id
                  name
                  description
                  slug
                }
              }
            }
          `,
        },
        {
          indexUid: 'allianzfoundation',
          transformer: (data) =>
            data.allStrapiAbout.nodes.map((node, index) => ({
              title: index,
              description: index,
              slug: index,
              ...node,
            })),
          query: `
            query MyQuery {
              allStrapiAbout(filter: {locale: {eq: "en"}}) {
                nodes {
                  id
                  title
                  description
                  slug
                }
              }
            }
          `,
        },
        {
          indexUid: 'allianzfoundationde',
          transformer: (data) =>
            data.deArticle.nodes.map((node, index) => ({
              title: index,
              description: index,
              slug: index,
              ...node,
            })),
          query: `
            query MyQuery {
              deArticle: allStrapiArticle(filter: {locale: {eq: "de"}}) {
                nodes {
                  id
                  title
                  description
                  slug
                }
              }
            }
          `,
        },
        {
          indexUid: 'allianzfoundationde',
          transformer: (data) =>
            data.deFeed.nodes.map((node, index) => ({
              name: index,
              description: index,
              slug: index,
              ...node,
            })),
          query: `
            query MyQuery {
              deFeed: allStrapiTag(filter: {locale: {eq: "de"}}) {
                nodes {
                  id
                  name
                  description
                  slug
                }
              }
            }
          `,
        },
        {
          indexUid: 'allianzfoundationde',
          transformer: (data) =>
            data.allStrapiAbout.nodes.map((node, index) => ({
              title: index,
              description: index,
              slug: index,
              ...node,
            })),
          query: `
            query MyQuery {
              allStrapiAbout(filter: {locale: {eq: "de"}}) {
                nodes {
                  id
                  title
                  description
                  slug
                }
              }
            }
          `,
        },
      ]
      },
    },
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
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          query MyQuery {
            site: strapiGlobal(locale: {eq: "en"}) {
              locale
              siteName
              siteDescription
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allStrapiArticle } }) => {
              return allStrapiArticle.nodes.map(node => {
                return Object.assign({}, {
                  description: node.description,
                  title: node.title,
                  date: node.createdAt,
                  url: encodeURI(`https://allianzfoundationfrontend.gatsbyjs.io/` + node.slug),
                })
              })
            },
            query: `
              {
                allStrapiArticle(
                  filter: {locale: {eq: "en"}}
                  sort: {
                    fields: [updatedAt],
                    order: DESC
                  }) {
                  nodes {
                    title
                    description
                    slug
                    createdAt
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "AllianzFoundation RSS",
          },
        ],
      },
    },
  ],
}
