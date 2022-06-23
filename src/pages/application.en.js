import ScrollReveal from "scrollreveal"
import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout/Layout"
import Footer from "../components/layout/Footer"
import Hamburger from "../components/navigation/Hamburger"
import Seo from "../components/helpers/Seo"
import AllModules from "../components/modules/AllModules"

const ApplicationPage = ({ data }) => {

  const [small, setSmall] = useState(false);

  useEffect(() => {

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
      hamLinks.addEventListener("click", removeall);

    })();

  }, []);

  const application = data.strapiApplication
  const modules = data.strapiApplication.modules

  const seo = {
    metaTitle: application.title,
    metaDescription: application.description,
  }

  return (
    <Layout>
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
              {application.localizations.map((application) => (
                <li>
                  <Link to="/de/application" target="_self" className="lang-link">DE</Link>
                </li>
              ))}
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
      <Seo seo={seo} />
      <AllModules modules={modules || []} />
      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  {
    strapiApplication(locale: {eq: "en"}) {
      title
      description
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

export default ApplicationPage
