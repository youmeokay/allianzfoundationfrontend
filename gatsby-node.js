const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const articlePost = path.resolve("./src/templates/Articles.js")
  const articlePostDe = path.resolve("./src/templates/ArticlesDe.js")
  const articleTag = path.resolve("./src/templates/Tags.js")
  const articleTagDe = path.resolve("./src/templates/TagsDe.js")
  const result = await graphql(
    `
      {
        enArticles: allStrapiArticle(filter: {locale: {eq: "en"}}) {
          nodes {
            slug
          }
        }
        deArticles: allStrapiArticle(filter: {locale: {eq: "de"}}) {
          nodes {
            locale
            slug
          }
        }
        enTags: allStrapiTag(filter: {locale: {eq: "en"}}) {
          nodes {
            name
            slug
          }
        }
        deTags: allStrapiTag(filter: {locale: {eq: "de"}}) {
          nodes {
            name
            slug
            locale
          }
        }
      }
    `
  )
  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Strapi articles`,
      result.errors
    )
    return
  }

  // const articles = result.data.allStrapiArticle.nodes
  // if (articles.length > 0) {
  //   articles.forEach((article) => {
  //     createPage({
  //       path: `/${article.slug}`,
  //       component: articlePost,
  //       context: {
  //         slug: article.slug,
  //       },
  //     })
  //   })
  // }

  const enArticles = result.data.enArticles.nodes
  const deArticles = result.data.deArticles.nodes

  if (enArticles.length > 0) {
    enArticles.forEach((article) => {
      createPage({
        path: `/${article.slug}`,
        component: articlePost,
        context: {
          slug: article.slug,
          locale: article.locale,
        },
      })
    })
  }

  if (deArticles.length > 0) {
    deArticles.forEach((article) => {
      createPage({
        path: `/${article.locale.toLowerCase()}/${article.slug}`,
        component: articlePostDe,
        context: {
          slug: article.slug,
          locale: article.locale,
        },
      })
    })
  }


  const enTags = result.data.enTags.nodes
  const deTags = result.data.deTags.nodes

  if (enTags.length > 0) {
    enTags.forEach((tag) => {
      createPage({
        path: `/${tag.slug}`,
        component: articleTag,
        context: {
          slug: tag.slug,
        },
      })
    })
  }

  if (deTags.length > 0) {
    deTags.forEach((tag) => {
      createPage({
        path: `/${tag.locale.toLowerCase()}/${tag.slug}`,
        component: articleTagDe,
        context: {
          slug: tag.slug,
        },
      })
    })
  }

}


exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /scrollreveal/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
