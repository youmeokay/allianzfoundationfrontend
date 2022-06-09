import React, { useEffect } from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Bookmarks = ({ data }) => {

  useEffect(() => {

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const Plyr = require('plyr');
      const players = Array.from(document.querySelectorAll('.allianz-player')).map((p) => new Plyr(p));
   }

  }, []);

  return (
    <article className="module-text bookmarks">
      <div className="grid-container full">
        <div className="grid-x grid-padding-x">
          {data.articles.map((entry, i) => (

            entry.videocover.mime.startsWith("video")
            ? (

              <div className="cell medium-4">
                <div className="articleCard revealer">
                  <div className="articleImage">
                    <Link to={`/${entry.slug}`}>
                      <div className="player-wrap"
                        dangerouslySetInnerHTML={{ __html: `
                          <video
                            onloadstart="this.volume=0.0"
                            class="allianz-player"
                            playsinline
                            autoplay
                            loop>
                            <source src="${entry.videocover.file.url}" type="video/mp4" />
                          </video>` }}
                      />
                    </Link>
                  </div>
                  <div className="articleDesc">
                    <div className="articleTags">
                    {entry.tags.map((tag, i) => (
                      <Link to={`/${tag.slug}`}>
                        <h3>
                            {tag.name}
                        </h3>
                      </Link>
                    ))}
                    </div>
                    <Link to={`/${entry.slug}`}>
                      <div className="articleTitle">
                        <h2>{entry.title}</h2>
                      </div>
                      <div className="articleDescription">
                        <p>
                          {entry.description}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

            )
            : (

              <div className="cell medium-4" key={`${entry.id}`}>
                <div className="articleCard revealer">
                  <div className="articleImage">
                    <Link to={`/${entry.slug}`}>
                      <GatsbyImage
                        image={getImage(entry.cover?.file)}
                        alt={entry.cover?.alternativeText}
                      />
                    </Link>
                  </div>
                  <div className="articleDesc">
                    <div className="articleTags">
                    {entry.tags.map((tag, i) => (
                      <Link to={`/${tag.slug}`}>
                        <h3>
                            {tag.name}
                        </h3>
                      </Link>
                    ))}
                    </div>
                    <Link to={`/${entry.slug}`}>
                      <div className="articleTitle">
                        <h2>{entry.title}</h2>
                      </div>
                      <div className="articleDescription">
                        <p>
                          {entry.description}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

            )
          ))}
        </div>
      </div>
    </article>
  )
}

export default Bookmarks
