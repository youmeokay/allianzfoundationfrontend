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
      interval: 128,
      distance: "2rem",
       origin: 'bottom'
   });
   ScrollReveal().reveal('.revealer-from-left', {
       delay: 64,
       duration: 640,
       distance: "2rem",
      origin: 'left'
  });
  ScrollReveal().reveal('.revealer-from-right', {
    delay: 64,
    duration: 640,
    distance: "2rem",
    origin: 'right'
  });
  ScrollReveal().reveal('.revealer-horizontal', {
    delay: 64,
    duration: 640,
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
          richTextBody: body
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
                  gatsbyImageData(
                    aspectRatio: 1.7
                    layout: FULL_WIDTH
                    placeholder: DOMINANT_COLOR
                  )
                }
              }
            }
          }
        }
        ... on StrapiComponentSharedReadMore {
          readMoreHeadline: headline
          readMoreText: text
        }
        ... on StrapiComponentSharedFixedMedia {
          fixedMediaHeadline: headline
          fixedMediaText: text
          stickydirection
          media {
            alternativeText
            caption
            name
            mime
            file {
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 1.7
                  layout: FULL_WIDTH
                  placeholder: DOMINANT_COLOR
                )
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
          fixedTextTitle: title
          fixedText: text
          direction
        }
        ... on StrapiComponentSharedHighlight {
          highlightTitle: title
          highlightTagline: tagline
          highlightLink: link
          highlightLinktarget: linktarget
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
            linkListUrl: url
            linkListTitle: title
            linkListTarget: linktarget
          }
        }
        ... on StrapiComponentSharedAccordeon {
          accordeonTagline: tagline
          accordeonTitle: title
          accordeonText: text
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
                  gatsbyImageData(
                    aspectRatio: 1.7
                    layout: FULL_WIDTH
                    placeholder: DOMINANT_COLOR
                  )
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
                  gatsbyImageData(
                    aspectRatio: 1.7
                    layout: FULL_WIDTH
                    placeholder: DOMINANT_COLOR
                  )
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
                  gatsbyImageData(
                    aspectRatio: 1.7
                    layout: FULL_WIDTH
                    placeholder: DOMINANT_COLOR
                  )
                }
              }
            }
          }
        }
        ... on StrapiComponentSharedStage {
          stageLayout: layout
          media {
            alternativeText
            caption
            name
            id
            mime
            file {
              url
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 1.7
                  placeholder: DOMINANT_COLOR
                )
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
                gatsbyImageData(
                  aspectRatio: 1.7
                  layout: FULL_WIDTH
                  placeholder: DOMINANT_COLOR
                )
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
          quoteTitle: title
          quoteBody: body
        }
      }
    }
  }
`

export default AboutPage
