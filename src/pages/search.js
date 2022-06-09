import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout/Layout"
import Seo from "../components/helpers/Seo"

import { InstantSearch, SearchBox, Highlight, connectHits } from 'react-instantsearch-dom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';

const searchClient = instantMeiliSearch(
  "https://jodiefaster.com",
  "NjYyZmNkZmVmMDlmN2JhMTc2Y2EyMDk2",
  {
    paginationTotalHits: 200, // default: 200.
    placeholderSearch: false, // default: true.
  }
);

const SearchPage = () => {

  return (
    <Layout>
      <Seo seo={{ metaTitle: "Serach Allianz Foundation" }} />
      <section className="module-text module-search">
        <article className="grid-container full">
          <div className="grid-x align-center">
            <div className="cell search-container">
              <InstantSearch
                indexName="allianzfoundationweb"
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
