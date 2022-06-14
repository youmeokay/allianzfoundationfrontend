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

  useEffect(() => {
     ScrollReveal().reveal('.highlight-nav li', {
        delay: 0,
        duration: 320,
        interval: 64,
        distance: "2rem",
        origin: 'left',
    });
    ScrollReveal().reveal('.topic-nav', {
       delay: 320,
       duration: 640,
       distance: "2rem",
       origin: 'bottom',
   });
   ScrollReveal().reveal('.topic-nav a', {
      delay: 320,
      interval: 64,
      duration: 640,
  });
   ScrollReveal().reveal('.revealer', {
     delay: 64,
     duration: 640,
     interval: 64,
     distance: "2rem",
     origin: 'bottom'
  });
  ScrollReveal().reveal('.revealer-from-right', {
    delay: 64,
    duration: 640,
    interval: 64,
    distance: "2rem",
    origin: 'right'
 });
  }, []);



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
