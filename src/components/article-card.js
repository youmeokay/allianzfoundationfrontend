import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ArticleCard = ({ article }) => {
  return (
    <Link
      to={`/article/${article.slug}`}
      className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
    >

      <div className="px-4 py-4">
        <h3 className="font-bold text-neutral-700">{article.title}</h3>
        <p className="line-clamp-2 mt-2 text-neutral-500">
          {article.description}
        </p>
      </div>
    </Link>
  )
}

export const query = graphql`
  fragment ArticleCard on StrapiArticle {
    id
    strapiId
    slug
    title
    description
  }
`

export default ArticleCard
