import React from "react"
import { graphql } from "gatsby"
import RichText from "./RichText"
import Quote from "./Quote"
import FixedText from "./FixedText"
import Stage from "./Stage"
import LinkList from "./LinkList"

const componentsMap = {
  StrapiComponentSharedRichText: RichText,
  StrapiComponentSharedFixedText: FixedText,
  StrapiComponentSharedLinkList: LinkList,
  StrapiComponentSharedStage: Stage,
  StrapiComponentSharedQuote: Quote,
}

const Module = ({ module }) => {
  const Component = componentsMap[module.__typename]

  if (!Component) {
    return null
  }

  return <Component data={module} />
}

const Modules = ({ modules }) => {
  return (
    <section className="modules">
      <div className="grid-container full">
        <div className="grid-x align-center">
          {modules.map((module, index) => (
            <Module key={`${index}${module.__typename}`} module={module} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Modules
