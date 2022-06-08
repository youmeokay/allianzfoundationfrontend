import React from "react"

const Quote = ({ data }) => {

  return (
    <article className="module-quote  cell medium-9 text-center">
      <blockquote className="quote revealer">
        &bdquo;{data.title}&ldquo;
        <cite className="">
          {data.body}
        </cite>
      </blockquote>
    </article>
  )
}

export default Quote
