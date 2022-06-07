import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import BlocksRenderer from "../components/blocks-renderer"
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
        <BlocksRenderer blocks={article.blocks || []} />
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
      blocks {
        ...Blocks
      }
    }
  }
`

export default ArticlePage
