import ScrollReveal from "scrollreveal"
import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Modules from "../components/modules/modules"
import Headings from "../components/headings"

const AboutPage = ({ data }) => {

  useEffect(() => {
    ScrollReveal().reveal('.revealer', {
       delay: 0,
       duration: 320,
       interval: 64,
       distance: "100px",
       origin: 'bottom'
   });
   ScrollReveal().reveal('.revealer-from-left', {
      delay: 64,
      duration: 320,
      distance: "200px",
      origin: 'left'
  });
  }, []);

  const about = data.strapiAbout
  const modules = data.strapiAbout.modules

  const seo = {
    metaTitle: about.title,
    metaDescription: about.description,
  }

  return (
    <Layout>
      <Seo seo={seo} />
      <Modules modules={modules || []} />
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    strapiAbout {
      title
      description
      createdAt
      updatedAt
      modules {
        __typename
        ... on StrapiComponentSharedRichText {
          body
        }
        ... on StrapiComponentSharedFixedText {
          title
          text
          direction
        }
        ... on StrapiComponentSharedLinkList {
          Link {
            url
            title
            linktarget
          }
        }
        ... on StrapiComponentSharedStage {
          layout
          media {
            alternativeText
            caption
            name
            id
            mime
            file {
              url
              childImageSharp {
                gatsbyImageData(aspectRatio: 1.7)
              }
            }
          }
          videocover: media {
            caption
            name
            mime
            alternativeText
            file {
              url
            }
          }
        }
        ... on StrapiComponentSharedQuote {
          title
          body
        }
      }
    }
  }
`

export default AboutPage
