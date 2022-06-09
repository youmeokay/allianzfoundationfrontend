import React, { useRef, useEffect } from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import 'plyr/dist/plyr.css'

const ArticleCard = ({ article, src, isMuted }) => {

  const isVideo = article.cover.mime.startsWith("video")

  useEffect(() => {

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const Plyr = require('plyr');
      const players = Array.from(document.querySelectorAll('.allianz-player')).map((p) => new Plyr(p));
   }

  }, []);

  return (
    <div className="articleCard revealer">
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
        <div className="articleTags">
          {article.tags.map((tag, i) => (
            <Link to={`/${tag.slug}`}>
              <h3>
                  {tag.name}
              </h3>
            </Link>
          ))}
        </div>
        <Link to={`/${article.slug}`}>
          <div className="articleTitle">
            <h2>{article.title}</h2>
          </div>
          <div className="articleDescription">
            <p>
              {article.description}
            </p>
          </div>
        </Link>
      </div>
    </div>
    )
  }

export const query = graphql`
  fragment ArticleCard on StrapiArticle {
    id
    slug
    title
    description
    tags {
      name
      slug
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
          gatsbyImageData(aspectRatio: 1.7)
        }
      }
    }
  }
`
export default ArticleCard
