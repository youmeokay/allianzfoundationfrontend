import React from "react"
import CalendarCard from "./CalendarCard"
import { useStaticQuery, graphql } from "gatsby"

const CalendarFeed = ({ articles }) => {
    return (
      <>
        {articles.map((article) => (
          <CalendarCard article={article || []} key={`${article.slug}`} />
        ))}
      </>
    )
  }

export default CalendarFeed
