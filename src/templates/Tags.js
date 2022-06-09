import ScrollReveal from "scrollreveal"
import React, { useEffect, useState } from "react"
import Helmet from 'react-helmet'
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AllModules from "../components/modules/AllModules"
import Feeds from "../components/articles/Feeds"
import FeedsList from "../components/articles/FeedsList"
import CalendarFeed from "../components/articles/CalendarFeed"
import CalendarFeedList from "../components/articles/CalendarFeedList"

const TagPage = ({ data }) => {

  useEffect(() => {
    ScrollReveal().reveal('.revealer', {
      delay: 64,
      duration: 640,
      interval: 128,
      distance: "2rem",
      origin: 'bottom'
     });
    ScrollReveal().reveal('.delay-revealer', {
      delay: 320,
      duration: 640,
      distance: "2rem",
      origin: 'bottom'
   });
   ScrollReveal().reveal('.revealer-from-left', {
      delay: 64,
      duration: 640,
      distance: "2rem",
      origin: 'left'
  });
  }, []);

  const tag = data.tag
  const articles = data.strapiArticle
  const seo = {metaTitle: tag.name, metaDescription: tag.description}

  const isPeople = tag.slug.startsWith("people")
  const isSociety = tag.slug.startsWith("society")
  const isPlanet = tag.slug.startsWith("planet")

  const isHub = tag.slug.startsWith("hubs")
  const isFellow = tag.slug.startsWith("fellow")
  const isStudy = tag.slug.startsWith("study")
  const isFunding = tag.slug.startsWith("funding")
  const isCall = tag.slug.startsWith("call")
  const isNews = tag.slug.startsWith("news")
  const isCalendar = tag.slug.startsWith("calendar")
  const isRisktaker = tag.slug.startsWith("risktaker")
  const isEurope = tag.slug.startsWith("europe")
  const isCulture = tag.slug.startsWith("culture")

  if (isPeople) {
    return (
      <Layout as="article">
      <Helmet bodyAttributes={{class: `${tag.name}`}}/>
        <Seo seo={seo} />
        <div className="all-modules">
          <AllModules modules={tag.modules || []} />
          <section className="tag-feed">
            <article className="grid-container full">
              <div className="grid-x grid-margin-x">
                <div className="cell">
                  <Feeds articles={data.peopletiles.nodes} />
                </div>
              </div>
            </article>
          </section>
          <section className="list-feed">
            <article className="grid-container full">
              <FeedsList articles={data.peoplelist.nodes} />
            </article>
          </section>
        </div>
      </Layout>
    )
  }
  if (isSociety) {
    return (
      <Layout as="article">
      <Helmet bodyAttributes={{class: `${tag.name}`}}/>
        <Seo seo={seo} />
        <div className="all-modules">
          <AllModules modules={tag.modules || []} />
          <section className="tag-feed">
            <article className="grid-container full">
              <div className="grid-x grid-margin-x">
                <div className="cell">
                  <Feeds articles={data.societytiles.nodes} />
                </div>
              </div>
            </article>
          </section>
          <section className="list-feed">
            <article className="grid-container full">
              <FeedsList articles={data.societylist.nodes} />
            </article>
          </section>
        </div>
      </Layout>
    )
  }
  if (isPlanet) {
    return (
      <Layout as="article">
      <Helmet bodyAttributes={{class: `${tag.name}`}}/>
        <Seo seo={seo} />
        <div className="all-modules">
          <AllModules modules={tag.modules || []} />
          <section className="tag-feed">
            <article className="grid-container full">
              <div className="grid-x grid-margin-x">
                <div className="cell">
                  <Feeds articles={data.planettiles.nodes} />
                </div>
              </div>
            </article>
          </section>
          <section className="list-feed">
            <article className="grid-container full">
              <FeedsList articles={data.planetlist.nodes} />
            </article>
          </section>
        </div>
      </Layout>
    )
  }
  if (isHub) {
    return (
      <Layout as="article">
      <Helmet bodyAttributes={{class: `${tag.name}`}}/>
        <Seo seo={seo} />
        <div className="all-modules">
          <AllModules modules={tag.modules || []} />
          <section className="tag-feed">
            <article className="grid-container full">
              <div className="grid-x grid-margin-x">
                <div className="cell">
                  <Feeds articles={data.hubs.nodes} />
                </div>
              </div>
            </article>
          </section>
          <section className="list-feed">
            <article className="grid-container full">
              <FeedsList articles={data.hubslist.nodes} />
            </article>
          </section>
        </div>
      </Layout>
    )
  }
  if (isStudy) {
    return (
      <Layout as="article">
      <Helmet bodyAttributes={{class: `${tag.name}`}}/>
        <Seo seo={seo} />
        <div className="all-modules">
          <AllModules modules={tag.modules || []} />
          <section className="tag-feed">
            <article className="grid-container full">
              <div className="grid-x grid-margin-x">
                <div className="cell">
                  <Feeds articles={data.study.nodes} />
                </div>
              </div>
            </article>
          </section>
          <section className="list-feed">
            <article className="grid-container full">
              <FeedsList articles={data.studylist.nodes} />
            </article>
          </section>
        </div>

      </Layout>
    )
  }
  if (isFellow) {
    return (
      <Layout as="article">
      <Helmet bodyAttributes={{class: `${tag.name}`}}/>
        <Seo seo={seo} />
        <div className="all-modules">
          <AllModules modules={tag.modules || []} />
          <section className="tag-feed">
            <article className="grid-container full">
              <div className="grid-x grid-margin-x">
                <div className="cell">
                  <Feeds articles={data.fellows.nodes} />
                </div>
              </div>
            </article>
          </section>
          <section className="list-feed">
            <article className="grid-container full">
              <FeedsList articles={data.fellowlist.nodes} />
            </article>
          </section>
        </div>

      </Layout>
    )
  }
  if (isFunding) {
    return (
      <Layout as="article">
      <Helmet bodyAttributes={{class: `${tag.name}`}}/>
        <Seo seo={seo} />
        <div className="all-modules">
          <AllModules modules={tag.modules || []} />
          <section className="tag-feed">
            <article className="grid-container full">
              <div className="grid-x grid-margin-x">
                <div className="cell">
                  <Feeds articles={data.funding.nodes} />
                </div>
              </div>
            </article>
          </section>
          <section className="list-feed">
            <article className="grid-container full">
              <FeedsList articles={data.fundinglist.nodes} />
            </article>
          </section>
        </div>
      </Layout>
    )
  }
  if (isCall) {
    return (
      <Layout as="article">
      <Helmet bodyAttributes={{class: `${tag.name}`}}/>
        <Seo seo={seo} />
        <div className="all-modules">
          <AllModules modules={tag.modules || []} />
          <section className="tag-feed">
            <article className="grid-container full">
              <div className="grid-x grid-margin-x">
                <div className="cell">
                  <Feeds articles={data.calls.nodes} />
                </div>
              </div>
            </article>
          </section>
          <section className="list-feed">
            <article className="grid-container full">
              <FeedsList articles={data.calllist.nodes} />
            </article>
          </section>
        </div>
      </Layout>
    )
  }
  if (isNews) {
      return (
        <Layout as="article">
        <Helmet bodyAttributes={{class: `${tag.name}`}}/>
          <Seo seo={seo} />
          <div className="all-modules">
            <AllModules modules={tag.modules || []} />
            <section className="tag-feed">
              <article className="grid-container full">
                <div className="grid-x grid-margin-x">
                  <div className="cell">
                    <Feeds articles={data.news.nodes} />
                  </div>
                </div>
              </article>
            </section>
            <section className="list-feed">
              <article className="grid-container full">
                <FeedsList articles={data.newslist.nodes} />
              </article>
            </section>
          </div>
        </Layout>
      )
    }
  if (isCalendar) {
      return (
        <Layout as="article">
        <Helmet bodyAttributes={{class: `${tag.name}`}}/>
          <Seo seo={seo} />
          <section className="all-modules in-calendar">
            <AllModules modules={tag.modules || []} />
          </section>
          <section className="calendar-feed revealer">
            <div className="grid-container full">
              <div className="grid-x">
                <CalendarFeed articles={data.calendar.nodes} />
              </div>
            </div>
          </section>
          <article className="module-horizontal-calendar-list">
            <CalendarFeedList articles={data.calendarlist.nodes} />
          </article>
        </Layout>
      )
    }
  if (isRisktaker) {
      return (
        <Layout as="article">
        <Helmet bodyAttributes={{class: `${tag.name}`}}/>
          <Seo seo={seo} />
          <div className="all-modules">
            <AllModules modules={tag.modules || []} />
            <section className="tag-feed">
              <article className="grid-container full">
                <div className="grid-x grid-margin-x">
                  <div className="cell">
                    <Feeds articles={data.risktaker.nodes} />
                  </div>
                </div>
              </article>
            </section>
            <section className="list-feed">
              <article className="grid-container full">
                <FeedsList articles={data.risktakerlist.nodes} />
              </article>
            </section>
          </div>
        </Layout>
      )
    }
  if (isEurope) {
      return (
        <Layout as="article">
        <Helmet bodyAttributes={{class: `${tag.name}`}}/>
          <Seo seo={seo} />
          <div className="all-modules">
            <AllModules modules={tag.modules || []} />
            <section className="tag-feed">
              <article className="grid-container full">
                <div className="grid-x grid-margin-x">
                  <div className="cell">
                    <Feeds articles={data.europe.nodes} />
                  </div>
                </div>
              </article>
            </section>
            <section className="list-feed">
              <article className="grid-container full">
                <FeedsList articles={data.europelist.nodes} />
              </article>
            </section>
          </div>
        </Layout>
      )
    }
  if (isCulture) {
      return (
        <Layout as="article">
        <Helmet bodyAttributes={{class: `${tag.name}`}}/>
          <Seo seo={seo} />
          <div className="all-modules">
            <AllModules modules={tag.modules || []} />
            <section className="tag-feed">
              <article className="grid-container full">
                <div className="grid-x grid-margin-x">
                  <div className="cell">
                    <Feeds articles={data.culture.nodes} />
                  </div>
                </div>
              </article>
            </section>
            <section className="list-feed">
              <article className="grid-container full">
                <FeedsList articles={data.culturelist.nodes} />
              </article>
            </section>
          </div>
        </Layout>
      )
    }
}

export const pageQuery = graphql`
  query ($slug: String) {
   tag: strapiTag(slug: { eq: $slug }) {
     name
     description
     slug
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
   allStrapiArticle(
     filter: {tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...ArticleCard
    }
   }
   peopletiles: allStrapiArticle(
     filter: {options: {eq: "Funding"} tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...ArticleCard
    }
   }
   peoplelist: allStrapiArticle(
     filter: {options: {ne: "Funding"} tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...ListCard
    }
   }
   societytiles: allStrapiArticle(
     filter: {options: {eq: "Funding"} tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...ArticleCard
    }
   }
   societylist: allStrapiArticle(
     filter: {options: {ne: "Funding"} tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...ListCard
    }
   }
   planettiles: allStrapiArticle(
     filter: {options: {eq: "Funding"} tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...ArticleCard
    }
   }
   planetlist: allStrapiArticle(
     filter: {options: {ne: "Funding"} tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...ListCard
    }
   }

   hubs: allStrapiArticle(
     filter: {options: {eq: "Hub"} tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...ArticleCard
    }
   }
   hubslist: allStrapiArticle(
     filter: {options: {ne: "Hub"} tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...ListCard
    }
   }

   fellows: allStrapiArticle(
     filter: {options: {eq: "Fellow"} tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...ArticleCard
    }
   }
   fellowlist: allStrapiArticle(
     filter: {options: {ne: "Fellow"} tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...ListCard
    }
   }


   study: allStrapiArticle(
     filter: {options: {eq: "Study"} tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...ArticleCard
    }
   }
   studylist: allStrapiArticle(
     filter: {options: {ne: "Study"} tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...ListCard
    }
   }


   funding: allStrapiArticle(
     filter: {options: {eq: "Funding"} tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...ArticleCard
    }
   }
   fundinglist: allStrapiArticle(
     filter: {options: {ne: "Funding"} tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...ListCard
    }
   }

   calls: allStrapiArticle(
     filter: {options: {eq: "Call"} tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...ArticleCard
    }
   }
   calllist: allStrapiArticle(
     filter: {options: {ne: "Call"} tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...ListCard
    }
   }


   news: allStrapiArticle(
     filter: {options: {eq: "News"} tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...ArticleCard
    }
   }
   newslist: allStrapiArticle(
     filter: {options: {ne: "News"} tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...ListCard
    }
   }


   calendar: allStrapiArticle(
     filter: {options: {eq: "Event"} tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...CalendarCard
    }
   }
   calendarlist: allStrapiArticle(
     filter: {options: {ne: "Event"} tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...CalendarCardList
    }
   }


   risktaker: allStrapiArticle(
     filter: {options: {eq: "Risktaker"} tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...ArticleCard
    }
   }
   risktakerlist: allStrapiArticle(
     filter: {options: {ne: "Risktaker"} tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...ListCard
    }
   }


   europe: allStrapiArticle(
     filter: {options: {eq: "europe"} tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...ArticleCard
    }
   }
   europelist: allStrapiArticle(
     filter: {options: {ne: "Europe"} tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...ListCard
    }
   }


   culture: allStrapiArticle(
     filter: {options: {eq: "culture"} tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...ArticleCard
    }
   }
   culturelist: allStrapiArticle(
     filter: {options: {ne: "Culture"} tags: {elemMatch: {slug: {eq: $slug}}}}
     sort: {
       fields: [updatedAt],
       order: DESC
     }
   ) {
    nodes {
      ...ListCard
    }
   }


  }
`

export default TagPage
