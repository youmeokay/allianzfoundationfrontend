import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout/Layout"
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import Hamburger from "../components/navigation/Hamburger"
import Seo from "../components/helpers/Seo"
import Highlights from "../components/navigation/Highlights"
import Topics from "../components/navigation/Topics"
import ArticleCard from "../components/articles/ArticleCard"
import PolePosition from "../components/articles/PolePosition"
import MainFeed from "../components/articles/MainFeed"

const IndexPage = () => {

  const { strapiGlobal } = useStaticQuery(graphql`
    query {
      strapiGlobal(locale: {eq: "en"}) {
        locale
        siteName
        siteDescription
      }
    }
  `)

  const seo = {
    metaTitle: "Home",
    metaDescription: strapiGlobal.siteDescription,
  }

  return (
    <Layout>
      <Header />
      <Hamburger />
      <Seo seo={seo} />
      <section className="intro">
        <article className="grid-container full">
          <div className="grid-x">
            <div className="cell medium-6">
              <Highlights />
            </div>
            <div className="cell medium-6">
              <div className="pole-position">
                <PolePosition />
              </div>
            </div>
          </div>
        </article>
      </section>
      <section className="topics">
        <article className="grid-container full">
          <div className="grid-x">
            <div className="cell">
              <Topics />
            </div>
          </div>
        </article>
      </section>
      <section className="main-feed">
        <article className="grid-container full">
          <div className="grid-x grid-margin-x">
            <div className="cell">
              <div className="article-grid">
                <MainFeed />
              </div>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </Layout>
  )
}

export default IndexPage
