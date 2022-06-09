import React from "react"
import { graphql } from "gatsby"
import RichText from "./RichText"
import Quote from "./Quote"
import FixedText from "./FixedText"
import Stage from "./Stage"
import LinkList from "./LinkList"
import ReadMore from "./ReadMore"
import Media from "./Media"
import FixedMedia from "./FixedMedia"
import Highlight from "./Highlight"
import Accordeon from "./Accordeon"
import Bookmarks from "./Bookmarks"
import Carousel from "./Carousel"
import Galerie from "./Galerie"
import HorizontalGalerie from "./HorizontalGalerie"

const componentsMap = {
  StrapiComponentSharedRichText: RichText,
  StrapiComponentSharedReadMore: ReadMore,
  StrapiComponentSharedFixedText: FixedText,
  StrapiComponentSharedFixedMedia: FixedMedia,
  StrapiComponentSharedBookmarks: Bookmarks,
  StrapiComponentSharedHighlight: Highlight,
  StrapiComponentSharedAccordeon: Accordeon,
  StrapiComponentSharedLinkList: LinkList,
  StrapiComponentSharedCarousel: Carousel,
  StrapiComponentSharedGalerie: Galerie,
  StrapiComponentSharedHorizontalGalerie: HorizontalGalerie,
  StrapiComponentSharedMedia: Media,
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
