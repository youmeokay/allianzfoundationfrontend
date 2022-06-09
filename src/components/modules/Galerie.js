import React, { useEffect, useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Galerie = ({ data }) => {

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const Plyr = require('plyr');
      const players = Array.from(document.querySelectorAll('.allianz-player')).map((p) => new Plyr(p));
   }
  }, []);

  return (
    <article className="module-galerie cell medium-9">
      <div className="grid-x grid-margin-x">
        {data.galerieentry.map((entry, i) => (

            <div className="entry cell medium-4 revealer">
              <div className="entry-image">
                <GatsbyImage
                  image={getImage(entry.media?.file)}
                  alt={entry.media?.alternativeText}
                />
              </div>
              <div className="html-content">
                {entry.tagline && <p className="small">{entry.tagline}</p>}
                {entry.title && <h2>{entry.title}</h2>}
                {entry.text && <div dangerouslySetInnerHTML={{__html: entry.text}} />}
              </div>
            </div>
          ))}
      </div>
    </article>
  )
}

export default Galerie
