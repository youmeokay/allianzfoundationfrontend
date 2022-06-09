import React from "react"

const ModuleHighlight = ({ data }) => {
  return (
    <article className="module-highlight cell medium-6 revealer" key={`highlight__${data.strapi_id}`}>
        {data.file &&  <a href={data.file.file.url} target={data.linktarget} className="highlight-link"><div className="highlight">{data.tagline &&  <p>{data.tagline}</p>}{data.title && <h2 className="h1 highlight-title">{data.title}</h2>}</div></a>}
        {data.link &&  <a href={data.link} target={data.linktarget} className="highlight-link"><div className="highlight">{data.tagline &&  <p>{data.tagline}</p>}{data.title && <h2 className="h1 highlight-title">{data.title}</h2>}</div></a>}
    </article>
  )
}

export default ModuleHighlight
