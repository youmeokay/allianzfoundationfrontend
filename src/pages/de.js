import ScrollReveal from "scrollreveal"
import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout/Layout"
import FooterDe from "../components/layout/FooterDe"
import HeaderDe from "../components/layout/HeaderDe"
import HamburgerDe from "../components/navigation/HamburgerDe"
import Seo from "../components/helpers/Seo"
import HighlightsDe from "../components/navigation/HighlightsDe"
import TopicsDe from "../components/navigation/TopicsDe"
import ArticleCard from "../components/articles/ArticleCard"
import PolePositionDe from "../components/articles/PolePositionDe"
import MainFeedDe from "../components/articles/MainFeedDe"

const IndexPage = () => {

  const { strapiGlobal } = useStaticQuery(graphql`
    query {
      strapiGlobal(locale: {eq: "de"}) {
        locale
        siteName
        siteDescription
      }
    }
  `)

  const seo = {
    metaTitle: "Start",
    metaDescription: strapiGlobal.siteDescription,
  }

  return (
    <Layout>
      <HeaderDe />
      <HamburgerDe />
      <Seo seo={seo} />
      <section className="intro">
        <article className="grid-container full">
          <div className="grid-x">
            <div className="cell medium-6">
              <HighlightsDe />
            </div>
            <div className="cell medium-6">
              <div className="pole-position">
                <PolePositionDe />
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className="topics">
        <article className="grid-container full">
          <div className="grid-x">
            <div className="cell">
              <TopicsDe />
            </div>
          </div>
        </article>
      </section>
      <section className="main-feed">
        <article className="grid-container full">
          <div className="grid-x grid-margin-x">
            <div className="cell">
              <div className="article-grid">
                <MainFeedDe />
              </div>
            </div>
          </div>
        </article>
      </section>
      <FooterDe />
    </Layout>
  )
}

export default IndexPage
