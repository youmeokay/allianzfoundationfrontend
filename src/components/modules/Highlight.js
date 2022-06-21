import React from "react"

const Highlight = ({ data }) => {
  return (
    <article className="module-highlight cell medium-6 revealer" key={`highlight__${data.strapi_id}`}>
        {data.file &&  <a href={data.file.file.url} target={`_${data.highlightLinktarget}`} className="highlight-link"><div className="highlight">{data.highlightTagline &&  <p>{data.highlightTagline}</p>}{data.highlightTitle && <h2 className="h1 highlight-title">{data.highlightTitle}</h2>}</div></a>}
        {data.highlightLink &&  <a href={data.highlightLink} target={`_${data.highlightLinktarget}`} className="highlight-link"><div className="highlight">{data.highlightTagline &&  <p>{data.highlightTagline}</p>}{data.highlightTitle && <h2 className="h1 highlight-title">{data.highlightTitle}</h2>}</div></a>}
    </article>
  )
}

export default Highlight
