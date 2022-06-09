import ScrollReveal from "scrollreveal"
import React, { useEffect, useState } from "react"
import Helmet from 'react-helmet'
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import AllModules from "../components/modules/AllModules"
import CalendarFeed from "../components/articles/CalendarFeed"
import CalendarFeedList from "../components/articles/CalendarFeedList"
import CallFeed from "../components/articles/CallFeed"
import CallFeedList from "../components/articles/CallFeedList"
import AnchorLink from "react-anchor-link-smooth-scroll"

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const ArticlePage = ({ data }) => {

  const article = data.strapiArticle
  const calendar = data.calendar
  const calendarlist = data.calendarlist
  const callfeed = data.callfeed
  const callfeedlist = data.callfeedlist

  const isVideo = article.cover.mime.startsWith("video")
  const isFullscreen = article.layout.startsWith("FullScreen")
  const isEvent = article.options.startsWith("Event")
  const isCall = article.options.startsWith("Call")
  const isNews = article.options.startsWith("News")

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.cover,
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const Plyr = require('plyr');
      const players = Array.from(document.querySelectorAll('.allianz-player')).map((p) => new Plyr(p));
   }
   ScrollReveal().reveal('.revealer', {
      delay: 64,
      duration: 640,
      interval: 64,
      distance: "2rem",
      origin: 'bottom'
    });

    gsap.registerPlugin(ScrollTrigger);

    const myHorizontal = ".panel-calendar"

    const sections = gsap.utils.toArray(myHorizontal);
      let maxWidth = 0;

      const getMaxWidth = () => {
        maxWidth = 0;
        sections.forEach((section) => {
          maxWidth += section.offsetWidth;
        });
      };
      getMaxWidth();
      ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

      gsap.to(sections, {
        x: () => `-${maxWidth - window.innerWidth}`,
        ease: "none",
        scrollTrigger: {
          trigger: "#trigger",
          pin: true,
          scrub: true,
          start: "top",
          end: () => `+=${maxWidth}`
        }
      });

      sections.forEach((sct, i) => {
        ScrollTrigger.create({
          trigger: sct,
          start: () => 'top' + (sct.offsetLeft - window.innerWidth/2) * (maxWidth / (maxWidth - window.innerWidth)),
          end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth))
        });
      });

      ScrollTrigger.refresh();

  }, []);

  return (
    <Layout as="article">
    <Helmet bodyAttributes={{class: "posts"}}/>
      <Seo seo={seo} />
      {isFullscreen ? (
        <section className="post modules revealer">
          <article className="module-article-intro">
            <div className="grid-container full">
              <div className="grid-x align-center text-center">
                <div className="cell">
                  <AnchorLink href="#postHeader" className="hidden-anchor" offset="250">
                    <div className="post-media fullScreen">
                      {isVideo ? (
                        <>
                          <div className="player-wrap"
                            dangerouslySetInnerHTML={{ __html: `<video onloadstart="this.mute=mute" class="allianz-player" playsinline autoplay loop><source src="${article.videocover.file.url}" type="video/mp4" /></video>` }}
                          />
                          {article.videocover.caption && <div className="grid-x align-center stage-caption"><div className="cell text-left"><p className="caption">{article.videocover.caption}</p></div></div>}
                        </>
                      ) : (
                        <>
                          <GatsbyImage
                            className="intro-picture"
                            image={getImage(article?.cover?.file)}
                            alt={article?.cover?.alternativeText}
                          />
                          {article.cover.caption && <div className="grid-x align-center stage-caption"><div className="cell text-left"><p className="caption">{article.cover.caption}</p></div></div>}
                        </>
                        )}
                    </div>
                  </AnchorLink>
                </div>
                <div className="cell medium-8">
                  <div className="post-header revealer" id="postHeader">
                    <div className="articleTags">
                      {article.tags.map((tag, i) => (
                        <Link to={`/${tag.slug}`} className="deactivated" key={`tag__${tag.id}`}>
                          <h3>
                              {tag.name}
                          </h3>
                        </Link>
                      ))}
                    </div>
                    <div className="articleDesc">
                      <h1><b>{article.title}</b></h1>

                      <p>{article.description}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </article>
        </section>
        ) : (
        <section className="post modules revealer">
          <article className="module-article-intro noFullScreen">
            <div className="grid-container full">
              <div className="grid-x align-center">
                <div className="cell medium-8 revealer text-center">
                  <div className="post-header">
                    <div className="articleTags">
                      {article.tags.map((tag, i) => (
                        <Link to={`/${tag.slug}`} className="deactivated" key={`tag__${tag.id}`}>
                          <h3>
                              {tag.name}
                          </h3>
                        </Link>
                      ))}
                    </div>
                    <div className="articleDesc">
                      <h1><b>{article.title}</b></h1>
                      {article.eventdate &&
                        <div className="articleMeta"><ul className="menu simple align-center"><li><svg className="icon-calendar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg><b>{article.eventdate}</b></li></ul></div>
                      }
                      <p>{article.description}</p>
                    </div>
                  </div>
                </div>
                <div className="cell medium-9 revealer">
                  <div className="post-media">
                    {isVideo ? (
                      <>
                      <div className="player-wrap"
                        dangerouslySetInnerHTML={{ __html: `<video onloadstart="this.volume=0.0" class="allianz-player" playsinline autoplay loop><source src="${article.videocover.file.url}" type="video/mp4" /></video>` }}
                      />
                        {article.videocover.caption && <p className="caption">{article.videocover.caption}</p>}
                      </>
                    ) : (
                      <>
                        <GatsbyImage
                          className="intro-picture"
                          image={getImage(article?.cover?.file)}
                          alt={article?.cover?.alternativeText}
                        />
                        {article.cover.caption && <p className="caption">{article.cover.caption}</p>}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>
      )}
      <AllModules modules={article.modules || []} />
      {isEvent ? (
        <>
          <section className="article-end">
            <article className="calendar-pagination">
              <div className="grid-x align-center">
                <div className="cell medium-9">
                  <div className="multi-button text-center">
                    <a>
                      @RSVP-FORM test
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </section>
          {data.calendar.nodes  &&
            <article className="grid-container full calendarfeedgrid">
              <CalendarFeed articles={data.calendar.nodes} />
            </article>
          }
          {data.calendarlist.nodes.length == 1 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar one" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 2 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar two" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 3 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar three" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 4 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar four" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 5 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar five" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 6 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar six" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 7 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar seven" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 8 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar eight" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 9 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar nine" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 10 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar ten" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 11 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar eleven" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 12 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar twelfe" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 13 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar thirdteen" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 14 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar fourteen" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 15 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar fivteen" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 16 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar sixteen" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 17 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar seventeen" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 18 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar eighteen" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 19 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar ninteen" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 20 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar twenty" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 21 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar twentyone" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 22 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar twentytwo" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 23 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar twentythree" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 24 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar twentyfour" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 25 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar twentyfive" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 26 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar twentysix" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 27 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar twentyseven" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 28 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar twentyeight" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 29 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar twentynine" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
          {data.calendarlist.nodes.length == 30 &&
            <div className="module-horizontal-calendar-list">
              <div class="horizontal-container-calendar thirtee" id="trigger">
                <CalendarFeedList articles={data.calendarlist.nodes} />
              </div>
            </div>
          }
        </>
        ) : (
        <></>
      )}
      {isCall ? (
        <div className="extra-feeds">
          <section className="tag-feed">
            <article className="grid-container full">
              <div className="grid-x grid-margin-x">
                <div className="cell">
                  <CallFeed articles={data.callfeed.nodes} />
                </div>
              </div>
            </article>
          </section>
          <section className="list-feed">
            <article className="grid-container full">
              <CallFeedList articles={data.callfeedlist.nodes} />
              <CallFeedList articles={data.fundinglist.nodes} />
              <CallFeedList articles={data.fellowslist.nodes} />
            </article>
          </section>
        </div>
        ) : (
        <></>
      )}
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($slug: String) {
    calendar: allStrapiArticle(
      filter: {
        tags: {
          elemMatch: {
            slug: {eq: "calendar"}
          }
        }
        options: {
          eq: "Event"
        }
        slug: {
          ne: $slug
        }
      }
    ) {
     nodes {
       ...CalendarCard
     }
    }
    calendarlist: allStrapiArticle(
      filter: {
        tags: {
          elemMatch: {
            slug: {eq: "calendar"}
          }
        }
        options: {
          ne: "Event"
        }
        slug: {
          ne: $slug
        }
      }
    ) {
     nodes {
       ...CalendarCardList
     }
    }
    fundinglist: allStrapiArticle(
      filter: {
        tags: {
          elemMatch: {
            slug: {eq: "funding"}
          }
        }
        options: {
          ne: "Call"
        }
        slug: {
          ne: $slug
        }
      }
    ) {
     nodes {
       ...ListCard
     }
    }
    fellowslist: allStrapiArticle(
      filter: {
        tags: {
          elemMatch: {
            slug: {eq: "fellows"}
          }
        }
        options: {
          ne: "Call"
        }
        slug: {
          ne: $slug
        }
      }
    ) {
     nodes {
       ...ListCard
     }
    }
    callfeed: allStrapiArticle(
      filter: {
        tags: {
          elemMatch: {
            slug: {eq: "calls"}
          }
        }
        options: {
          eq: "Call"
        }
        slug: {
          ne: $slug
        }
      }
    ) {
     nodes {
       ...ArticleCard
     }
    }
    callfeedlist: allStrapiArticle(
      filter: {
        tags: {
          elemMatch: {
            slug: {eq: "calls"}
          }
        }
        options: {
          ne: "Call"
        }
        slug: {
          ne: $slug
        }
      }
    ) {
     nodes {
       ...ArticleCard
     }
    }
    strapiArticle(slug: { eq: $slug }) {
      id
      slug
      title
      description
      options
      layout
      eventdate
      updatedAt
      createdAt
      publishedAt
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
          layout
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
          title
          body
        }
      }
      videocover: cover {
        caption
        name
        mime
        alternativeText
        file {
          url
        }
      }
      tags {
        name
        description
        slug
      }
      cover {
        caption
        name
        mime
        alternativeText
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
    }
  }
`

export default ArticlePage
