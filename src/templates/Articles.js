import ScrollReveal from "scrollreveal"
import React, { useEffect, useState } from "react"
import Helmet from 'react-helmet'
import { StaticQuery, graphql, withPrefix, Link, useStaticQuery } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout/Layout"
import Footer from "../components/layout/Footer"
import Hamburger from "../components/navigation/Hamburger"
import Seo from "../components/helpers/Seo"
import AllModules from "../components/modules/AllModules"
import CalendarFeed from "../components/articles/CalendarFeed"
import CalendarFeedList from "../components/articles/CalendarFeedList"
import CallFeed from "../components/articles/CallFeed"
import CallFeedList from "../components/articles/CallFeedList"
import AnchorLink from "react-anchor-link-smooth-scroll"

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const ArticlePage = ({ data }) => {

  const [small, setSmall] = useState(false);

  const article = data.strapiArticle
  const calendar = data.calendar
  const calendarlist = data.calendarlist
  const apply = data.apply
  const applylist = data.applylist

  const isVideo = article.cover.mime.startsWith("video")
  const isFullscreen = article.layout.startsWith("FullScreen")
  const isEvent = article.options.startsWith("Event")
  const isApply = article.options.startsWith("Apply")
  const isNews = article.options.startsWith("News")
  const hasIntl = data.strapiArticle.localizations

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

   if (typeof window !== "undefined") {
     window.addEventListener("scroll", () =>
       setSmall(window.pageYOffset > 64)
     );
     window.addEventListener("touch", () =>
       setSmall(window.pageYOffset > 64)
     );
   }

   (() => {

     const logo = document.getElementsByClassName("text-logo")[0];
     const hamburger = document.getElementsByClassName("hamburger")[0];
     const highlight = document.getElementsByClassName("highlight-the-hamburger")[0];
     const meunLink = document.getElementsByClassName("hamburger-link")[0];
     const meunLinkAlt = document.getElementsByClassName("hamburger-link-alt")[0];
     const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
     const hamburgerNav = document.getElementsByClassName("hamburger-nav")[0];
     const body = document.getElementsByTagName("body")[0];
     const cursor = document.getElementsByClassName("cursor")[0];
     const searchicon = document.getElementsByClassName("search-icon")[0];
     const hamLinks = document.getElementsByClassName("ham-links")[0];

     let open = false;

     const change = () => {
       if (!open) {
         hamburger.classList.toggle("open");
         hamburgerMenu.classList.toggle("open");
         hamburgerNav.classList.toggle("open");
         highlight.classList.toggle("open");
         body.classList.add("no-overflow");
       } else {
         hamburger.classList.toggle("open");
         hamburgerNav.classList.toggle("open");
         hamburgerMenu.classList.toggle("open");
         highlight.classList.toggle("open");
         body.classList.toggle("no-overflow");
       }
       open = !open;
     };

     highlight.addEventListener("click", change);

     const removeall = () => {
       if (!open) {
       } else {
         hamburger.classList.remove("open");
         hamburgerNav.classList.remove("open");
         hamburgerMenu.classList.remove("open");
         highlight.classList.remove("open");
         body.classList.remove("no-overflow");
       }
       open = !open;
     };
     document.addEventListener('keydown', function(event){
      if(event.key === "Escape"){
         hamburger.classList.remove("open");
         hamburgerNav.classList.remove("open");
         hamburgerMenu.classList.remove("open");
         highlight.classList.remove("open");
         body.classList.remove("no-overflow");
      }
     });
     logo.addEventListener("click", removeall);
     searchicon.addEventListener("click", removeall);

   })();

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
    <header className={`main header ${
          small ? "small" : ""
        }`}>
        <Link to="/" className="logo-link">
          <h1 className="text-logo">
            Allianz<br />
            <span>Foundation</span>
            <span className="addon hubs">Hubs</span>
            <span className="addon study">Study</span>
            <span className="addon fellows">Fellows</span>
          </h1>
        </Link>
        <nav className="language">
          <ul className="menu simple language-selector">
            {hasIntl ? (
              <>
              {article.localizations.map((article) => (
                <li>
                  <Link to={`/de/${article.slug}`} className="lang-link">DE</Link>
                </li>
              ))}
              </>
            ) : (
              <></>
            )}
          </ul>
        </nav>
        <Link to="/search" className="search-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
        </Link>
        <nav className="highlight-the-hamburger">
          <div className="hamburger">
            <div></div>
          </div>
        </nav>
    </header>
    <Hamburger />
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
      {isApply ? (
        <div className="extra-feeds">
          <section className="tag-feed">
            <article className="grid-container full">
              <div className="grid-x grid-margin-x">
                <div className="cell">
                  <CallFeed articles={data.apply.nodes} />
                </div>
              </div>
            </article>
          </section>
          <section className="list-feed">
            <article className="grid-container full">
              <CallFeedList articles={data.applylist.nodes} />
              <CallFeedList articles={data.fellowslist.nodes} />
            </article>
          </section>
        </div>
        ) : (
        <></>
      )}
      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($slug: String) {
    calendar: allStrapiArticle(
      filter: {
        locale: {eq: "en"}
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
        locale: {eq: "en"}
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
    fellowslist: allStrapiArticle(
      filter: {
        locale: {eq: "en"}
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
    applyfeed: allStrapiArticle(
      filter: {
        locale: {eq: "en"}
        tags: {
          elemMatch: {
            slug: {eq: "apply"}
          }
        }
        options: {
          eq: "Apply"
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
    applylist: allStrapiArticle(
      filter: {
        locale: {eq: "en"}
        tags: {
          elemMatch: {
            slug: {eq: "apply"}
          }
        }
        options: {
          ne: "Apply"
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
    strapiArticle(slug: { eq: $slug } locale: {eq: "en"}) {
      id
      slug
      title
      description
      options
      layout
      eventdate
      locale
      slug
      localizations {
        slug
      }
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
