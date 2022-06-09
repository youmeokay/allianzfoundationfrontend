import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import 'plyr/dist/plyr.css'

const CalendarCardList = ({ article }) => {

  const isVideo = article.cover.mime.startsWith("video")

  useEffect(() => {

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const Plyr = require('plyr');
      const players = Array.from(document.querySelectorAll('.allianz-player')).map((p) => new Plyr(p));
   }

  }, []);

  return (
      <Link to={`/${article.slug}`} className="calendar-card-list">
        <div className="grid-x">
          <div className="cell medium-6">
            <div className="calendar-content">
              <div class="event-date"><h3>{article.eventdate}</h3></div>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
            </div>
          </div>
          <div className="cell medium-6">
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
        </div>
      </Link>
    )
  }

export const query = graphql`
  fragment CalendarCardList on StrapiArticle {
    id
    slug
    title
    description
    eventdate
    tags {
      name
      slug
      description
    }
    videocover: cover {
      caption
      name
      url
      mime
      alternativeText
      file {
        url
      }
    }
    cover {
      caption
      name
      id
      url
      mime
      alternativeText
      file {
        url
        childImageSharp {
          gatsbyImageData(aspectRatio: 1.1)
        }
      }
    }
  }
`
export default CalendarCardList
