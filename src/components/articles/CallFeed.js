import React from "react"
import ArticleCard from "./ArticleCard"
import { useStaticQuery, graphql } from "gatsby"

const CallFeed = ({ articles }) => {
    return (
      <div className="article-grid">
        {articles.map((article) => (
          <ArticleCard article={article || []} key={`${article.slug}`} />
        ))}
      </div>
    )
  }

export default CallFeed
