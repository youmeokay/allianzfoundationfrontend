import React, { useEffect, useState } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import 'plyr/dist/plyr.css'

const Stage = ({ data }) => {

  const isVideo = data.media.mime.startsWith("video")
  const isFullscreen = data.layout.startsWith("FullScreen")

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const Plyr = require('plyr');
      const players = Array.from(document.querySelectorAll('.allianz-player')).map((p) => new Plyr(p));
   }
  }, []);

  return (
    <>
      {isFullscreen ? (
        <article className="module-stage fullScreen revealer">
          {isVideo ? (
            <>
              <div className="stage-media">
                <video className="allianz-player" playsInline autoPlay loop mute="true" muted>
                  <source src={data.videocover.file.url} type={data.videocover.mime} />
                </video>
              </div>
              <div className="grid-x align-center stage-caption"><div className="cell"><p className="caption">{data.videocover.caption}</p></div></div>
            </>
          ) : (
            <>
              <GatsbyImage
                className="stage-media"
                image={getImage(data.media?.file)}
                alt={data.media?.alternativeText}
              />
              <div className="grid-x align-center stage-caption"><div className="cell"><p className="caption">{data.media.caption}</p></div></div>
            </>
          )}
        </article>
        ) : (
        <article className="module-stage revealer">
          {isVideo ? (
            <>
              <div className="stage-media">
                <video className="allianz-player" playsInline autoPlay loop mute="true" muted>
                  <source src={data.videocover.file.url} type={data.videocover.mime} />
                </video>
              </div>
              <div className="grid-x align-center stage-caption"><div className="cell"><p className="caption">{data.videocover.caption}</p></div></div>
            </>
          ) : (
            <>
              <GatsbyImage
                className="stage-media"
                image={getImage(data.media?.file)}
                alt={data.media?.alternativeText}
              />
              <div className="grid-x align-center stage-caption"><div className="cell"><p className="caption">{data.media.caption}</p></div></div>
            </>
          )}
        </article>
      )}
    </>
  )
}

export default Stage
