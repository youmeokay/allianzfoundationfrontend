import React, { useEffect, useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import 'plyr/dist/plyr.css'

const Media = ({ data }) => {

  const isVideo = data.media.mime.startsWith("video")

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const Plyr = require('plyr');
      const players = Array.from(document.querySelectorAll('.allianz-player')).map((p) => new Plyr(p));
   }
  }, []);

  return (
    <article className="module-media cell medium-9">
      <div className="html-content revealer">
        {isVideo ? (
          <>
            <video className="allianz-player" playsInline controls>
              <source src={data.videocover.file.url} type={data.videocover.mime} />
            </video>
            {data.videocover.caption && <p className="caption">{data.videocover.caption}</p>}
          </>
        ) : (
          <>
            <GatsbyImage
              image={getImage(data.media.file)}
              alt={data.media.alternativeText}
            />
            {data.media.caption && <p className="caption">{data.media.caption}</p>}
          </>
        )}
      </div>
    </article>
  )
}

export default Media
