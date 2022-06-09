import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import 'plyr/dist/plyr.css'

const ListCard = ({ article }) => {

  const isVideo = article.cover.mime.startsWith("video")

  useEffect(() => {

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const Plyr = require('plyr');
      const players = Array.from(document.querySelectorAll('.allianz-player')).map((p) => new Plyr(p));
   }

  }, []);

  return (
    <Link to={`/${article.slug}`} className="list-card cell revealer">
      <div className="grid-x align-middle">
        <div className="cell medium-2 small-4">
          <div className="articleImage">
            {isVideo ? (
              <div className="player-wrap"
                dangerouslySetInnerHTML={{ __html: `<video onloadstart="this.volume=0.0" class="allianz-player" playsinline autoplay loop><source src="${article.videocover.file.url}" type="video/mp4" /></video>` }}
              />
            ) : (
              <GatsbyImage
                image={getImage(article.cover?.file)}
                alt={article.cover?.alternativeText}
              />
              )}
          </div>
        </div>
        <div className="cell medium-9 small-8">
          <div className="articleDesc">
            <Link to={`/${article.slug}`}>
              <div className="articleTitle">
                <h2 className="h1">{article.title}</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Link>
    )
  }

  export const query = graphql`
    fragment ListCard on StrapiArticle {
      id
      slug
      title
      description
      publishedAt
      options
      tags {
        name
        slug
        description
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
      cover {
        caption
        name
        mime
        alternativeText
        file {
          url
          childImageSharp {
            gatsbyImageData(aspectRatio: 1.5)
          }
        }
      }
    }
  `
export default ListCard
