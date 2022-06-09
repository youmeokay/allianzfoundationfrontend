import ScrollReveal from "scrollreveal"
import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Highlights from "../components/navigation/Highlights"
import Topics from "../components/navigation/Topics"
import ArticleCard from "../components/articles/ArticleCard"
import PolePosition from "../components/articles/PolePosition"
import MainFeed from "../components/articles/MainFeed"

const IndexPage = () => {

  useEffect(() => {
     ScrollReveal().reveal('.highlight-nav li', {
        delay: 0,
        duration: 320,
        interval: 64,
        distance: "2rem",
        origin: 'left',
    });
    ScrollReveal().reveal('.topic-nav, .topic-nav a', {
       delay: 256,
       duration: 640,
       interval: 64,
       distance: "2rem",
       origin: 'bottom',
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

  const { allStrapiArticle, strapiGlobal } = useStaticQuery(graphql`
    query {
      allStrapiArticle {
        nodes {
            ...ArticleCard
          }
      }
      strapiGlobal {
        siteName
        siteDescription
      }
    }
  `)

  return (
    <Layout>
      <Seo seo={{ metaTitle: "Home" }} />
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
    </Layout>
  )
}

export default IndexPage
