import React from "react"

const Quote = ({ data }) => {

  return (
    <article className="module-quote cell medium-9 text-center">
      <blockquote className="quote">
        <div className="revealer">&bdquo;{data.quoteTitle}&ldquo;</div>
        {data.quoteBody && <cite className="revealer">{data.quoteBody}</cite>}
      </blockquote>
    </article>
  )
}

export default Quote
