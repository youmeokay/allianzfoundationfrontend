import ScrollReveal from "scrollreveal"
import React, { useEffect, useState } from "react"
import Helmet from 'react-helmet'
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout/Layout"
import FooterDe from "../components/layout/FooterDe"
import HamburgerDe from "../components/navigation/HamburgerDe"
import Seo from "../components/helpers/Seo"
import AllModules from "../components/modules/AllModules"
import Feeds from "../components/articles/Feeds"
import FeedsList from "../components/articles/FeedsList"
import CalendarFeed from "../components/articles/CalendarFeed"
import CalendarFeedList from "../components/articles/CalendarFeedList"

const TagPage = ({ data }) => {

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

    })();

  }, []);

  const tag = data.tag
  const articles = data.strapiArticle
  const seo = {metaTitle: tag.name, metaDescription: tag.description}

  const isPeople = tag.slug.startsWith("people")
  const isPeopleDe = tag.slug.startsWith("menschen")

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
        <HamburgerDe />
        <Seo seo={seo} />
        <header className={`main header ${
              small ? "small" : ""
            }`}>
            <Link to="/de/" className="logo-link">
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
                {tag.localizations.map((tag) => (
                  <li>
                    <Link to={`/${tag.slug}`} className="lang-link">EN</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link to="/de/search" className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
            </Link>
            <nav className="highlight-the-hamburger">
              <div className="hamburger">
                <div></div>
              </div>
            </nav>
        </header>
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
        <FooterDe />
      </Layout>
    )
  }
  if (isSociety) {
    return (
      <Layout as="article">
      <Helmet bodyAttributes={{class: `${tag.name}`}}/>
        <Seo seo={seo} />
        <HamburgerDe />
        <header className={`main header ${
              small ? "small" : ""
            }`}>
            <Link to="/de/" className="logo-link">
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
                {tag.localizations.map((tag) => (
                  <li>
                    <Link to={`/${tag.slug}`} className="lang-link">EN</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link to="/de/search" className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
            </Link>
            <nav className="highlight-the-hamburger">
              <div className="hamburger">
                <div></div>
              </div>
            </nav>
        </header>
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
        <FooterDe />
      </Layout>
    )
  }
  if (isPlanet) {
    return (
      <Layout as="article">
      <Helmet bodyAttributes={{class: `${tag.name}`}}/>
        <Seo seo={seo} />
        <HamburgerDe />
        <header className={`main header ${
              small ? "small" : ""
            }`}>
            <Link to="/de/" className="logo-link">
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
                {tag.localizations.map((tag) => (
                  <li>
                    <Link to={`/${tag.slug}`} className="lang-link">EN</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link to="/de/search" className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
            </Link>
            <nav className="highlight-the-hamburger">
              <div className="hamburger">
                <div></div>
              </div>
            </nav>
        </header>
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
        <FooterDe />
      </Layout>
    )
  }
  if (isHub) {
    return (
      <Layout as="article">
      <Helmet bodyAttributes={{class: `${tag.name}`}}/>
        <Seo seo={seo} />
        <HamburgerDe />
        <header className={`main header ${
              small ? "small" : ""
            }`}>
            <Link to="/de/" className="logo-link">
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
                {tag.localizations.map((tag) => (
                  <li>
                    <Link to={`/${tag.slug}`} className="lang-link">EN</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link to="/de/search" className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
            </Link>
            <nav className="highlight-the-hamburger">
              <div className="hamburger">
                <div></div>
              </div>
            </nav>
        </header>
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
        <FooterDe />
      </Layout>
    )
  }
  if (isStudy) {
    return (
      <Layout as="article">
      <Helmet bodyAttributes={{class: `${tag.name}`}}/>
        <Seo seo={seo} />
        <HamburgerDe />
        <header className={`main header ${
              small ? "small" : ""
            }`}>
            <Link to="/de/" className="logo-link">
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
                {tag.localizations.map((tag) => (
                  <li>
                    <Link to={`/${tag.slug}`} className="lang-link">EN</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link to="/de/search" className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
            </Link>
            <nav className="highlight-the-hamburger">
              <div className="hamburger">
                <div></div>
              </div>
            </nav>
        </header>
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
        <FooterDe />
      </Layout>
    )
  }
  if (isFellow) {
    return (
      <Layout as="article">
      <Helmet bodyAttributes={{class: `${tag.name}`}}/>
        <Seo seo={seo} />
        <HamburgerDe />
        <header className={`main header ${
              small ? "small" : ""
            }`}>
            <Link to="/de/" className="logo-link">
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
                {tag.localizations.map((tag) => (
                  <li>
                    <Link to={`/${tag.slug}`} className="lang-link">EN</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link to="/de/search" className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
            </Link>
            <nav className="highlight-the-hamburger">
              <div className="hamburger">
                <div></div>
              </div>
            </nav>
        </header>
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
        <FooterDe />
      </Layout>
    )
  }
  if (isFunding) {
    return (
      <Layout as="article">
      <Helmet bodyAttributes={{class: `${tag.name}`}}/>
        <Seo seo={seo} />
        <HamburgerDe />
        <header className={`main header ${
              small ? "small" : ""
            }`}>
            <Link to="/de/" className="logo-link">
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
                {tag.localizations.map((tag) => (
                  <li>
                    <Link to={`/${tag.slug}`} className="lang-link">EN</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link to="/de/search" className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
            </Link>
            <nav className="highlight-the-hamburger">
              <div className="hamburger">
                <div></div>
              </div>
            </nav>
        </header>
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
        <FooterDe />
      </Layout>
    )
  }
  if (isCall) {
    return (
      <Layout as="article">
      <Helmet bodyAttributes={{class: `${tag.name}`}}/>
        <Seo seo={seo} />
        <HamburgerDe />
        <header className={`main header ${
              small ? "small" : ""
            }`}>
            <Link to="/de/" className="logo-link">
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
                {tag.localizations.map((tag) => (
                  <li>
                    <Link to={`/${tag.slug}`} className="lang-link">EN</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link to="/de/search" className="search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
            </Link>
            <nav className="highlight-the-hamburger">
              <div className="hamburger">
                <div></div>
              </div>
            </nav>
        </header>
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
        <FooterDe />
      </Layout>
    )
  }
  if (isNews) {
    return (
        <Layout as="article">
        <Helmet bodyAttributes={{class: `${tag.name}`}}/>
          <Seo seo={seo} />
          <HamburgerDe />
          <header className={`main header ${
                small ? "small" : ""
              }`}>
              <Link to="/de/" className="logo-link">
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
                  {tag.localizations.map((tag) => (
                    <li>
                      <Link to={`/${tag.slug}`} className="lang-link">EN</Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <Link to="/de/search" className="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
              </Link>
              <nav className="highlight-the-hamburger">
                <div className="hamburger">
                  <div></div>
                </div>
              </nav>
          </header>
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
          <FooterDe />
        </Layout>
      )
  }
  if (isCalendar) {
    return (
        <Layout as="article">
        <Helmet bodyAttributes={{class: `${tag.name}`}}/>
          <Seo seo={seo} />
          <HamburgerDe />
          <header className={`main header ${
                small ? "small" : ""
              }`}>
              <Link to="/de/" className="logo-link">
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
                  {tag.localizations.map((tag) => (
                    <li>
                      <Link to={`/${tag.slug}`} className="lang-link">EN</Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <Link to="/de/search" className="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
              </Link>
              <nav className="highlight-the-hamburger">
                <div className="hamburger">
                  <div></div>
                </div>
              </nav>
          </header>
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
          <FooterDe />
        </Layout>
    )
  }
  if (isRisktaker) {
    return (
        <Layout as="article">
        <Helmet bodyAttributes={{class: `${tag.name}`}}/>
          <Seo seo={seo} />
          <HamburgerDe />
          <header className={`main header ${
                small ? "small" : ""
              }`}>
              <Link to="/de/" className="logo-link">
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
                  {tag.localizations.map((tag) => (
                    <li>
                      <Link to={`/${tag.slug}`} className="lang-link">EN</Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <Link to="/de/search" className="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
              </Link>
              <nav className="highlight-the-hamburger">
                <div className="hamburger">
                  <div></div>
                </div>
              </nav>
          </header>
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
          <FooterDe />
        </Layout>
      )
  }
  if (isEurope) {
    return (
        <Layout as="article">
        <Helmet bodyAttributes={{class: `${tag.name}`}}/>
          <Seo seo={seo} />
          <HamburgerDe />
          <header className={`main header ${
                small ? "small" : ""
              }`}>
              <Link to="/de/" className="logo-link">
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
                  {tag.localizations.map((tag) => (
                    <li>
                      <Link to={`/${tag.slug}`} className="lang-link">EN</Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <Link to="/de/search" className="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
              </Link>
              <nav className="highlight-the-hamburger">
                <div className="hamburger">
                  <div></div>
                </div>
              </nav>
          </header>
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
          <FooterDe />
        </Layout>
      )
  }
  if (isCulture) {
    return (
        <Layout as="article">
        <Helmet bodyAttributes={{class: `${tag.name}`}}/>
          <Seo seo={seo} />
          <HamburgerDe />
          <header className={`main header ${
                small ? "small" : ""
              }`}>
              <Link to="/de/" className="logo-link">
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
                  {tag.localizations.map((tag) => (
                    <li>
                      <Link to={`/${tag.slug}`} className="lang-link">EN</Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <Link to="/de/search" className="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/></svg>
              </Link>
              <nav className="highlight-the-hamburger">
                <div className="hamburger">
                  <div></div>
                </div>
              </nav>
          </header>
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
          <FooterDe />
        </Layout>
      )
  }
}

export const pageQuery = graphql`
  query ($slug: String) {
   tag: strapiTag(slug: { eq: $slug } locale: {eq: "de"}) {
     name
     description
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
   }
   allStrapiArticle(
     filter: {
       tags: {elemMatch: {slug: {eq: $slug}}}
       locale: {eq: "en"}
     }
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
     filter: {options: {eq: "Funding"} tags: {elemMatch: {slug: {eq: $slug}}}
     locale: {eq: "de"}}
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
     filter: {options: {ne: "Funding"} tags: {elemMatch: {slug: {eq: $slug}}}
     locale: {eq: "de"}}
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
     filter: {options: {eq: "Funding"} tags: {elemMatch: {slug: {eq: $slug}}}
     locale: {eq: "de"}}
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
     filter: {options: {ne: "Funding"} tags: {elemMatch: {slug: {eq: $slug}}}
     locale: {eq: "de"}}
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
     filter: {options: {eq: "Funding"} tags: {elemMatch: {slug: {eq: $slug}}}
     locale: {eq: "de"}}
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
     filter: {options: {ne: "Funding"} tags: {elemMatch: {slug: {eq: $slug}}}
     locale: {eq: "de"}}
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
     filter: {options: {eq: "Hub"} tags: {elemMatch: {slug: {eq: $slug}}}
     locale: {eq: "de"}}
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
     filter: {options: {ne: "Hub"} tags: {elemMatch: {slug: {eq: $slug}}}
     locale: {eq: "de"}}
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
     filter: {options: {eq: "Fellow"} tags: {elemMatch: {slug: {eq: $slug}}}
     locale: {eq: "de"}}
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
     filter: {options: {ne: "Fellow"} tags: {elemMatch: {slug: {eq: $slug}}}
    locale: {eq: "de"}}
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
     filter: {options: {eq: "Study"} tags: {elemMatch: {slug: {eq: $slug}}}
    locale: {eq: "de"}}
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
     filter: {options: {ne: "Study"} tags: {elemMatch: {slug: {eq: $slug}}}
    locale: {eq: "de"}}
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
     filter: {options: {eq: "Funding"} tags: {elemMatch: {slug: {eq: $slug}}}
    locale: {eq: "de"}}
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
     filter: {options: {ne: "Funding"} tags: {elemMatch: {slug: {eq: $slug}}}
    locale: {eq: "de"}}
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
     filter: {options: {eq: "Call"} tags: {elemMatch: {slug: {eq: $slug}}}
    locale: {eq: "de"}}
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
     filter: {options: {ne: "Call"} tags: {elemMatch: {slug: {eq: $slug}}}
    locale: {eq: "de"}}
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
     filter: {options: {eq: "News"} tags: {elemMatch: {slug: {eq: $slug}}}
    locale: {eq: "de"}}
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
     filter: {options: {ne: "News"} tags: {elemMatch: {slug: {eq: $slug}}}
    locale: {eq: "de"}}
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
     filter: {options: {eq: "Event"} tags: {elemMatch: {slug: {eq: $slug}}}
    locale: {eq: "de"}}
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
     filter: {options: {ne: "Event"} tags: {elemMatch: {slug: {eq: $slug}}}
    locale: {eq: "de"}}
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
     filter: {options: {eq: "Risktaker"} tags: {elemMatch: {slug: {eq: $slug}}}
    locale: {eq: "de"}}
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
     filter: {options: {ne: "Risktaker"} tags: {elemMatch: {slug: {eq: $slug}}}
    locale: {eq: "de"}}
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
     filter: {options: {eq: "europe"} tags: {elemMatch: {slug: {eq: $slug}}}
    locale: {eq: "de"}}
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
     filter: {options: {ne: "Europe"} tags: {elemMatch: {slug: {eq: $slug}}}
    locale: {eq: "de"}}
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
     filter: {options: {eq: "culture"} tags: {elemMatch: {slug: {eq: $slug}}}
    locale: {eq: "de"}}
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
     filter: {options: {ne: "Culture"} tags: {elemMatch: {slug: {eq: $slug}}}
    locale: {eq: "de"}}
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
