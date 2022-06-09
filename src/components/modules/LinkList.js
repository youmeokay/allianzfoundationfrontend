import React from "react"
import { Link } from "gatsby"

const ModuleLinkList = ({ data }) => {
  return (
    <article className="module-link-list cell">
      <div className="link-list">
        {data.Link.map((link) => (
          <div className="link revealer" key={`link__${link.id}`}>
            {link.linkListUrl &&  <a href={link.linkListUrl} target={link.linkListTarget}><div className="grid-x align-center"><div className="cell medium-9"><h2 className="h1"><b>{link.linkListTitle}</b></h2></div></div></a>}
          </div>
        ))}
      </div>
    </article>
  )
}

export default ModuleLinkList
