import React from "react"
import ListCard from "./ListCard"

const CallFeedList = ({ articles }) => {
  return (
    <div className="list-grid grid-x">
      {articles.map((article) => (
        <ListCard article={article} key={`${article.slug}`} />
      ))}
    </div>
  )
}

export default CallFeedList
