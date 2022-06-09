import React, { useEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const FixedMedia = ({ data }) => {

  const directionChange = data.stickydirection.startsWith("Opposite")

  useEffect(() => {

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const Plyr = require('plyr');
      const players = Array.from(document.querySelectorAll('.allianz-player')).map((p) => new Plyr(p));
   }

  }, []);

  return (
    data.videocover.mime.startsWith("video")
    ? (
      <article className="module-fixed-media cell medium-9">
        <div className="html-content revealer">
          {directionChange ? (
            <div className="grid-x grid-margin-x">
              <div className="cell medium-6">
                <div className="sticky-content">
                  <div className="sticky-inner">
                    <div className="player-wrap"
                      dangerouslySetInnerHTML={{ __html: `
                        <video
                          onloadstart="this.volume=0.0"
                          class="allianz-player"
                          playsinline
                          autoplay
                          loop>
                          <source src="${data.videocover.file.url}" type="video/mp4" />
                        </video>` }}
                    />
                    {data.videocover.caption && <p className="caption">{data.videocover.caption}</p>}
                  </div>
                </div>
              </div>
              <div className="cell medium-offset-1 medium-5">
                <div className="scroll-content">
                  {data.headline && <h2><b>{data.headline}</b></h2>}
                  {data.text && <div dangerouslySetInnerHTML={{__html: data.text}} />}
                </div>
              </div>
            </div>
            ) : (
            <div className="grid-x grid-margin-x">
              <div className="cell medium-5 medium-order-1 small-order-2">
                <div className="scroll-content">
                  {data.headline && <h2><b>{data.headline}</b></h2>}
                  {data.text && <div dangerouslySetInnerHTML={{__html: data.text}} />}
                </div>
              </div>
              <div className="medium-offset-1 cell medium-6 medium-order- small-order-1">
                <div className="sticky-content">
                  <div className="sticky-inner">
                    <div className="player-wrap"
                      dangerouslySetInnerHTML={{ __html: `
                        <video
                          onloadstart="this.volume=0.0"
                          class="allianz-player"
                          playsinline
                          autoplay
                          loop>
                          <source src="${data.videocover.file.url}" type="video/mp4" />
                        </video>` }}
                    />
                    {data.videocover.caption && <p className="caption">{data.videocover.caption}</p>}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </article>
    )
    : (
      <article className="module-fixed-media cell medium-9">
        <div className="html-content revealer">
          {directionChange ? (
            <div className="grid-x grid-margin-x">
              <div className="cell medium-6">
                <div className="sticky-content">
                  <div className="sticky-inner">
                    <GatsbyImage
                      className="fixed-media"
                      image={getImage(data.media?.file)}
                      alt={data.media?.alternativeText}
                    />
                    {data.media.caption && <p className="caption">{data.media.caption}</p>}
                  </div>
                </div>
              </div>
              <div className="cell medium-offset-1 medium-5">
                <div className="scroll-content">
                  {data.headline && <h2><b>{data.headline}</b></h2>}
                  {data.text && <div dangerouslySetInnerHTML={{__html: data.text}} />}
                </div>
              </div>
            </div>
            ) : (
            <div className="grid-x grid-margin-x">
              <div className="cell medium-5 medium-order-1 small-order-2">
                <div className="scroll-content">
                  {data.headline && <h2><b>{data.headline}</b></h2>}
                  {data.text && <div dangerouslySetInnerHTML={{__html: data.text}} />}
                </div>
              </div>
              <div className="medium-offset-1 cell medium-6 medium-order-2 small-order-1">
                <div className="sticky-content">
                  <div className="sticky-inner">
                    <GatsbyImage
                      className="fixed-media"
                      image={getImage(data.media?.file)}
                      alt={data.media?.alternativeText}
                    />
                    {data.media.caption && <p className="caption">{data.media.caption}</p>}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </article>
    )
  )
}

export default FixedMedia
