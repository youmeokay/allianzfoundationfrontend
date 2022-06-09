import React from "react"

const RichText = ({ data }) => {
  return (
    <article className="module-text cell medium-8">
      <div className="html-content revealer"
        dangerouslySetInnerHTML={{
          __html: data.richTextBody,
        }}
      />
    </article>
  )
}

export default RichText
