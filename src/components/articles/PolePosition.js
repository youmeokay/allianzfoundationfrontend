import React, { useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import 'plyr/dist/plyr.css'

const PolePosition = () => {

  const { strapiIndex } = useStaticQuery(graphql`
    query {
      strapiIndex {
          PoleItem {
            article {
              slug
              title
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
                caption
                name
                mime
                alternativeText
                file {
                  url
                  childImageSharp {
                    gatsbyImageData(aspectRatio: 1.7)
                  }
                }
              }
            }
        }
      }
    }
  `)

  const article = strapiIndex.PoleItem.article
  const isVideo = article.cover.mime.startsWith("video")

  useEffect(() => {

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const Plyr = require('plyr');
      const players = Array.from(document.querySelectorAll('.allianz-player')).map((p) => new Plyr(p));
   }

  }, []);

  return (
      <div className="articleCard revealer-from-right" key={`${article.slug}`}>
        <div className="articleImage">
          <Link to={`/${article.slug}`}>
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
          </Link>
        </div>
        <div className="articleDesc">
          <Link to={`/${article.slug}`}>
            <div className="articleTitle">
              <h2 style={{marginTop: 1 + 'rem'}}>{article.title}</h2>
            </div>
            <p>{article.description}</p>
          </Link>
        </div>
      </div>
    )
  }

export default PolePosition
