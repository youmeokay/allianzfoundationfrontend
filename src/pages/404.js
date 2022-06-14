import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import Footer from "../components/layout/Footer"

const NotFoundPage = () => {
  return (
    <Layout>
      <section className="module-text revealer">
        <article className="grid-container full">
          <div className="grid-x height align-middle align-center">
            <div className="cell medium-8 text-center html-content">
              <h1><b>Nothing found here...it's a 404.</b></h1>
              <p>You need to go somewhere else.</p>
            </div>
          </div>
        </article>
      </section>
      <Footer />
    </Layout>
  )
}

export default NotFoundPage
