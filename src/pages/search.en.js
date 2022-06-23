import React, { useEffect, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout/Layout"
import Footer from "../components/layout/Footer"
import Seo from "../components/helpers/Seo"
import Hamburger from "../components/navigation/Hamburger"

import { InstantSearch, SearchBox, Highlight, connectHits } from 'react-instantsearch-dom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';

const searchClient = instantMeiliSearch(
  "http://134.209.231.38",
  "NTk2NzIyZTIzOTExY2I1N2IxMzMzMzUx",
  {
    paginationTotalHits: 200, // default: 200.
    placeholderSearch: false, // default: true.
  }
);

const SearchPage = () => {

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
            <li>
              <Link to="/de/search" target="_self" className="lang-link">DE</Link>
            </li>
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
      <Seo seo={{ metaTitle: "Serach" }} />
      <div className="grid-container full search-intro">
        <div className="grid-x align-center">
          <article class="module-text cell medium-8">
            <div class="html-content search-revealer">
              <h1 className="text-center">
                <strong>You always find everything where you should have looked for it right at the beginning.</strong> Let's be funny here?
              </h1>
              <p className="text-center">To get started just type <b>"future"</b> or <b>"people"</b>.</p>
            </div>
          </article>
        </div>
      </div>
      <section className="module-text module-search">
        <article className="grid-container full">
          <div className="grid-x align-center">
            <div className="cell medium-8 search-container">
              <InstantSearch
                indexName="allianzfoundation"
                searchClient={searchClient}
              >
              <SearchBox autoFocus searchAsYouType
                translations={{
                  placeholder: 'Search for anything.',
                  resetTitle: 'Clear your search query.',
                }}
                />
                <CustomHits />
              </InstantSearch>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </Layout>
  )
}

const Hits = ({ hits }) => (

  <div className="search-hits">
    <div className="grid-x">
      {hits.map(hit => (
        <Link to={`/${hit.slug}`} className="cell search-hit" key={hit.objectID}>
          <div className="grid-x align-middle">
            <div className="cell">
              <h2>{hit.name}{hit.title}</h2>
              <p>{hit.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
);

const CustomHits = connectHits(Hits);

export default SearchPage
