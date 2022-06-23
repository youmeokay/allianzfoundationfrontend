import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import 'plyr/dist/plyr.css'

const CalendarCard = ({ article }) => {

  const isVideo = article.cover.mime.startsWith("video")

  useEffect(() => {

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const Plyr = require('plyr');
      const players = Array.from(document.querySelectorAll('.allianz-player')).map((p) => new Plyr(p));
   }

  }, []);

  return (
    <Link to={`/${article.slug}`} className="list-card calendar-card">
      <div className="grid-x align-middle">
        <div className="cell medium-5">
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
        <div className="cell medium-6">
          <div className="articleDesc">
            <div className="articleMeta">
              <ul className="menu simple">
                <li>
                  <svg className="icon-calendar" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z"/></svg>
                  <b>{article.eventdate}</b>
                </li>
              </ul>
            </div>
            <div className="articleTitle">
              <h2 className="h1">{article.title}</h2>
            </div>
          </div>
        </div>
      </div>
    </Link>
    )
  }

export const query = graphql`
  fragment CalendarCard on StrapiArticle {
    id
    slug
    title
    description
    publishedAt
    options
    eventdate
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
      id
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
export default CalendarCard
