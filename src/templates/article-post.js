import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Modules from "../components/modules/modules"
import Seo from "../components/seo"

const ArticlePage = ({ data }) => {
  const article = data.strapiArticle

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
  }

  return (
    <Layout as="article">
      <Seo seo={seo} />
      <header className="container max-w-4xl py-8">
        <h1 className="text-6xl font-bold text-neutral-700">{article.title}</h1>
        <p className="mt-4 text-2xl text-neutral-500">{article.description}</p>
      </header>
      <main className="mt-8">
          <Modules modules={article.modules || []} />
      </main>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($slug: String) {
    strapiArticle(slug: { eq: $slug }) {
      id
      strapiId
      slug
      title
      description
      modules {
        __typename
        ... on StrapiComponentSharedRichText {
          body
        }
        ... on StrapiComponentSharedQuote {
          title
          body
        }
      }
    }
  }
`

export default ArticlePage
