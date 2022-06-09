const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const articlePost = path.resolve("./src/templates/Articles.js")
  const articleTag = path.resolve("./src/templates/Tags.js")
  const result = await graphql(
    `
      {
        allStrapiArticle {
          nodes {
            id
            updatedAt
            publishedAt
            title
            slug
          }
        }
        allStrapiTag {
          nodes {
            id
            updatedAt
            publishedAt
            name
            slug
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

  const articles = result.data.allStrapiArticle.nodes
  if (articles.length > 0) {
    articles.forEach((article) => {
      createPage({
        path: `/${article.slug}`,
        component: articlePost,
        context: {
          slug: article.slug,
        },
      })
    })
  }


  const tags = result.data.allStrapiTag.nodes
  if (tags.length > 0) {
    tags.forEach((tag) => {
      createPage({
        path: `/${tag.slug}`,
        component: articleTag,
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
