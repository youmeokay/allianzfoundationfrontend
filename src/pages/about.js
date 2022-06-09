import ScrollReveal from "scrollreveal"
import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AllModules from "../components/modules/AllModules"

const AboutPage = ({ data }) => {

  useEffect(() => {
    ScrollReveal().reveal('.revealer', {
      delay: 0,
      duration: 640,
      interval: 64,
      distance: "2rem",
       origin: 'bottom'
   });
   ScrollReveal().reveal('.revealer-from-left', {
       delay: 64,
       duration: 640,
       interval: 64,
       distance: "2rem",
      origin: 'left'
  });
  ScrollReveal().reveal('.revealer-from-right', {
    delay: 64,
    duration: 640,
    interval: 64,
    distance: "2rem",
    origin: 'right'
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
      <AllModules modules={modules || []} />
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
        ... on StrapiComponentSharedHorizontalGalerie {
          id
          horizontalentry {
            title
            text
            media {
              alternativeText
              caption
              name
              mime
              file {
                childImageSharp {
                  gatsbyImageData(aspectRatio: 1.7)
                }
              }
            }
          }
        }
        ... on StrapiComponentSharedReadMore {
          headline
          text
        }
        ... on StrapiComponentSharedFixedMedia {
          headline
          text
          stickydirection
          media {
            alternativeText
            caption
            name
            mime
            file {
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
        ... on StrapiComponentSharedFixedText {
          title
          text
          direction
        }
        ... on StrapiComponentSharedHighlight {
          title
          tagline
          link
          linktarget
          file {
            alternativeText
            caption
            name
            id
            mime
            file {
              url
            }
          }
        }
        ... on StrapiComponentSharedLinkList {
          Link {
            url
            title
            linktarget
          }
        }
        ... on StrapiComponentSharedAccordeon {
          tagline
          title
          text
        }
        ... on StrapiComponentSharedCarousel {
          carouselentry {
            id
            media {
              alternativeText
              caption
              name
              mime
              file {
                childImageSharp {
                  gatsbyImageData(aspectRatio: 1.25)
                }
              }
            }
          }
        }
        ... on StrapiComponentSharedGalerie {
          galerieentry {
            text
            title
            tagline
            media {
              file {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
        ... on StrapiComponentSharedBookmarks {
          articles {
            slug
            title
            tags {
              name
              slug
            }
            description
            videocover: cover {
              caption
              name
              mime
              alternativeText
              file {
                url
              }
            }
            cover {
              alternativeText
              caption
              name
              mime
              file {
                childImageSharp {
                  gatsbyImageData(aspectRatio: 1.7)
                }
              }
            }
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
        ... on StrapiComponentSharedMedia {
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
