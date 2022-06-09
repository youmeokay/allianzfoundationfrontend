import React, { useRef, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import 'plyr/dist/plyr.css'

const MainFeed = ({src, isMuted}) => {

  const { strapiIndex, ml, mr, sl, sm, sr, bl, srb, slb, brs } = useStaticQuery(graphql`
    query {
      ml: strapiIndex {
        mediumleft {
          article {
            slug
            title
            description
            tags {
              name
              slug
            }
            cover {
              caption
              name
              url
              mime
              alternativeText
              file {
                url
                childImageSharp {
                  gatsbyImageData(aspectRatio: 1.7775)
                }
              }
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
          }
        }
      }
      mr: strapiIndex {
        mediumright {

          id
          article {
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
              url
              mime
              alternativeText
              file {
                url
                childImageSharp {
                  gatsbyImageData(aspectRatio: 1.7775)
                }
              }
            }
          }
        }
      }
      sl: strapiIndex {
        smallleft {

          id
          article {
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
              url
              mime
              alternativeText
              file {
                url
                childImageSharp {
                  gatsbyImageData(aspectRatio: 1.7775)
                }
              }
            }
          }
        }
      }
      sm: strapiIndex {
        smallmiddle {

          id
          article {
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
              url
              mime
              alternativeText

              file {
                url
                childImageSharp {
                  gatsbyImageData(aspectRatio: 1.7775)
                }
              }
            }
          }
        }
      }
      sr: strapiIndex {
        smallright {

          id
          article {
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
              url
              mime
              alternativeText
              file {
                url
                childImageSharp {
                  gatsbyImageData(aspectRatio: 1.7775)
                }
              }
            }
          }
        }
      }
      bl: strapiIndex {
        bigleft {

          id
          article {
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
              url
              mime
              alternativeText
              file {
                url
                childImageSharp {
                  gatsbyImageData(aspectRatio: 1.7775)
                }
              }
            }
          }
        }
      }
      srb: strapiIndex {
        smallrightbig {

          id
          article {
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
              url
              mime
              alternativeText
              file {
                url
                childImageSharp {
                  gatsbyImageData(aspectRatio: 1.7775)
                }
              }
            }
          }
        }
      }
      slb: strapiIndex {
        smallleftbig {

          id
          article {
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
              url
              mime
              alternativeText
              file {
                url
                childImageSharp {
                  gatsbyImageData(aspectRatio: 1.7775)
                }
              }
            }
          }
        }
      }
      brs: strapiIndex {
        bigrightsmall {

          id
          article {
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
              url
              mime
              alternativeText
              file {
                url
                childImageSharp {
                  gatsbyImageData(aspectRatio: 1.7775)
                }
              }
            }
          }
        }
      }
    }
  `)

  const mlarticle = ml.mediumleft.article
  const mrarticle = mr.mediumright.article
  const slarticle = sl.smallleft.article
  const smarticle = sm.smallmiddle.article
  const srarticle = sr.smallright.article
  const blarticle = bl.bigleft.article
  const srbarticle = srb.smallrightbig.article
  const slbarticle = slb.smallleftbig.article
  const brsarticle = brs.bigrightsmall.article

  const mlcomp = ml.mediumleft
  const mrcomp = mr.mediumright
  const slcomp = sl.smallleft
  const smcomp = sm.smallmiddle
  const srcomp = sr.smallright
  const blcomp = bl.bigleft
  const srbcomp = srb.smallrightbig
  const slbcomp = slb.smallleftbig
  const brscomp = brs.bigrightsmall

  const isVideo = mlarticle.cover.mime.startsWith("video")
  const isVideomr = mrarticle.cover.mime.startsWith("video")
  const isVideosl = slarticle.cover.mime.startsWith("video")
  const isVideosm = smarticle.cover.mime.startsWith("video")
  const isVideosr = srarticle.cover.mime.startsWith("video")
  const isVideobl = blarticle.cover.mime.startsWith("video")
  const isVideosrb = srbarticle.cover.mime.startsWith("video")
  const isVideoslb = slbarticle.cover.mime.startsWith("video")
  const isVideobrs = brsarticle.cover.mime.startsWith("video")

  useEffect(() => {

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const Plyr = require('plyr');
      const players = Array.from(document.querySelectorAll('.allianz-player')).map((p) => new Plyr(p));
   }

  }, []);

  return (
      <>
      <div className="articleCard revealer" key={`${mlcomp.strapi_id}`}>
        <div className="articleImage">
          <Link to={`/${mlarticle.slug}`}>
            {isVideo ? (
              <div className="player-wrap"
                dangerouslySetInnerHTML={{ __html: `
                  <video
                    onloadstart="this.volume=0.0"
                    class="allianz-player"
                    playsinline
                    autoplay
                    loop>
                    <source src="${mlarticle.videocover.file.url}" type="video/mp4" />
                  </video>` }}
              />
            ) : (
              <GatsbyImage
                image={getImage(mlarticle.cover?.file)}
                alt={mlarticle.cover?.alternativeText}
              />
              )}
          </Link>
        </div>
        <div className="articleDesc">
          <div className="articleTags">
          {mlarticle.tags.map((tag, i) => (
            <Link to={`/${tag.slug}`}>
              <h3>
                  {tag.name}
              </h3>
            </Link>
          ))}
          </div>
          <Link to={`/${mlarticle.slug}`}>
            <div className="articleTitle">
              <h2>{mlarticle.title}</h2>
            </div>
            <div className="articleDescription">
              <p>
                {mlarticle.description}
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="articleCard revealer" key={`${mrcomp.strapi_id}`}>
        <div className="articleImage">
          <Link to={`/${mrarticle.slug}`}>
            {isVideomr ? (
              <div className="player-wrap"
                dangerouslySetInnerHTML={{ __html: `
                  <video
                    onloadstart="this.volume=0.0"
                    class="allianz-player"
                    playsinline
                    autoplay
                    loop>
                    <source src="${mrarticle.videocover.file.url}" type="video/mp4" />
                  </video>` }}
              />
            ) : (
              <GatsbyImage
                image={getImage(mrarticle.cover?.file)}
                alt={mrarticle.cover?.alternativeText}
              />
              )}
          </Link>
        </div>
        <div className="articleDesc">
          <div className="articleTags">
          {mrarticle.tags.map((tag, i) => (
            <Link to={`/${tag.slug}`}>
              <h3>
                  {tag.name}
              </h3>
            </Link>
          ))}
          </div>
          <Link to={`/${mrarticle.slug}`}>
            <div className="articleTitle">
              <h2>{mrarticle.title}</h2>
            </div>
            <div className="articleDescription">
              <p>
                {mrarticle.description}
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="articleCard revealer" key={`${slcomp.strapi_id}`}>
        <div className="articleImage">
          <Link to={`/${slarticle.slug}`}>
            {isVideosl ? (
              <div className="player-wrap"
                dangerouslySetInnerHTML={{ __html: `
                  <video
                    onloadstart="this.volume=0.0"
                    class="allianz-player"
                    playsinline
                    autoplay
                    loop>
                    <source src="${slarticle.videocover.file.url}" type="video/mp4" />
                  </video>` }}
              />
            ) : (
              <GatsbyImage
                image={getImage(slarticle.cover?.file)}
                alt={slarticle.cover?.alternativeText}
              />
              )}
          </Link>
        </div>
        <div className="articleDesc">
          <div className="articleTags">
          {slarticle.tags.map((tag, i) => (
            <Link to={`/${tag.slug}`}>
              <h3>
                  {tag.name}
              </h3>
            </Link>
          ))}
          </div>
          <Link to={`/${slarticle.slug}`}>
            <div className="articleTitle">
              <h2>{slarticle.title}</h2>
            </div>
            <div className="articleDescription">
              <p>
                {slarticle.description}
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="articleCard revealer" key={`${smcomp.strapi_id}`}>
        <div className="articleImage">
          <Link to={`/${smarticle.slug}`}>
            {isVideosm ? (
              <div className="player-wrap"
                dangerouslySetInnerHTML={{ __html: `
                  <video
                    onloadstart="this.volume=0.0"
                    class="allianz-player"
                    playsinline
                    autoplay
                    loop>
                    <source src="${smarticle.videocover.file.url}" type="video/mp4" />
                  </video>` }}
              />
            ) : (
              <GatsbyImage
                image={getImage(smarticle.cover?.file)}
                alt={smarticle.cover?.alternativeText}
              />
              )}
          </Link>
        </div>
        <div className="articleDesc">
          <div className="articleTags">
          {smarticle.tags.map((tag, i) => (
            <Link to={`/${tag.slug}`}>
              <h3>
                  {tag.name}
              </h3>
            </Link>
          ))}
          </div>
          <Link to={`/${smarticle.slug}`}>
            <div className="articleTitle">
              <h2>{smarticle.title}</h2>
            </div>
            <div className="articleDescription">
              <p>
                {smarticle.description}
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="articleCard revealer" key={`${srcomp.strapi_id}`}>
        <div className="articleImage">
          <Link to={`/${srarticle.slug}`}>
            {isVideosr ? (
              <div className="player-wrap"
                dangerouslySetInnerHTML={{ __html: `
                  <video
                    onloadstart="this.volume=0.0"
                    class="allianz-player"
                    playsinline
                    autoplay
                    loop>
                    <source src="${srarticle.videocover.file.url}" type="video/mp4" />
                  </video>` }}
              />
            ) : (
              <GatsbyImage
                image={getImage(srarticle.cover?.file)}
                alt={srarticle.cover?.alternativeText}
              />
              )}
          </Link>
        </div>
        <div className="articleDesc">
          <div className="articleTags">
          {srarticle.tags.map((tag, i) => (
            <Link to={`/${tag.slug}`}>
              <h3>
                  {tag.name}
              </h3>
            </Link>
          ))}
          </div>
          <Link to={`/${srarticle.slug}`}>
            <div className="articleTitle">
              <h2>{srarticle.title}</h2>
            </div>
            <div className="articleDescription">
              <p>
                {srarticle.description}
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="articleCard revealer" key={`${blcomp.strapi_id}`}>
        <div className="articleImage">
          <Link to={`/${blarticle.slug}`}>
            {isVideobl ? (
              <div className="player-wrap"
                dangerouslySetInnerHTML={{ __html: `
                  <video
                    onloadstart="this.volume=0.0"
                    class="allianz-player"
                    playsinline
                    autoplay
                    loop>
                    <source src="${blarticle.videocover.file.url}" type="video/mp4" />
                  </video>` }}
              />
            ) : (
              <GatsbyImage
                image={getImage(blarticle.cover?.file)}
                alt={blarticle.cover?.alternativeText}
              />
              )}
          </Link>
        </div>
        <div className="articleDesc">
          <div className="articleTags">
          {blarticle.tags.map((tag, i) => (
            <Link to={`/${tag.slug}`}>
              <h3>
                  {tag.name}
              </h3>
            </Link>
          ))}
          </div>
          <Link to={`/${blarticle.slug}`}>
            <div className="articleTitle">
              <h2>{blarticle.title}</h2>
            </div>
            <div className="articleDescription">
              <p>
                {blarticle.description}
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="articleCard revealer" key={`${srbcomp.strapi_id}`}>
        <div className="articleImage">
          <Link to={`/${srbarticle.slug}`}>
            {isVideosr ? (
              <div className="player-wrap"
                dangerouslySetInnerHTML={{ __html: `
                  <video
                    onloadstart="this.volume=0.0"
                    class="allianz-player"
                    playsinline
                    autoplay
                    loop>
                    <source src="${srbarticle.videocover.file.url}" type="video/mp4" />
                  </video>` }}
              />
            ) : (
              <GatsbyImage
                image={getImage(srbarticle.cover?.file)}
                alt={srbarticle.cover?.alternativeText}
              />
              )}
          </Link>
        </div>
        <div className="articleDesc">
          <div className="articleTags">
          {srbarticle.tags.map((tag, i) => (
            <Link to={`/${tag.slug}`}>
              <h3>
                  {tag.name}
              </h3>
            </Link>
          ))}
          </div>
          <Link to={`/${srbarticle.slug}`}>
            <div className="articleTitle">
              <h2>{srbarticle.title}</h2>
            </div>
            <div className="articleDescription">
              <p>
                {srbarticle.description}
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="articleCard revealer" key={`${slbcomp.strapi_id}`}>
        <div className="articleImage">
          <Link to={`/${slbarticle.slug}`}>
            {isVideoslb ? (
              <div className="player-wrap"
                dangerouslySetInnerHTML={{ __html: `
                  <video
                    onloadstart="this.volume=0.0"
                    class="allianz-player"
                    playsinline
                    autoplay
                    loop>
                    <source src="${slbarticle.videocover.file.url}" type="video/mp4" />
                  </video>` }}
              />
            ) : (
              <GatsbyImage
                image={getImage(slbarticle.cover?.file)}
                alt={slbarticle.cover?.alternativeText}
              />
              )}
          </Link>
        </div>
        <div className="articleDesc">
          <div className="articleTags">
          {slbarticle.tags.map((tag, i) => (
            <Link to={`/${tag.slug}`}>
              <h3>
                  {tag.name}
              </h3>
            </Link>
          ))}
          </div>
          <Link to={`/${slbarticle.slug}`}>
            <div className="articleTitle">
              <h2>{slbarticle.title}</h2>
            </div>
            <div className="articleDescription">
              <p>
                {slbarticle.description}
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="articleCard revealer" key={`${brscomp.strapi_id}`}>
        <div className="articleImage">
          <Link to={`/${brsarticle.slug}`}>
            {isVideobrs ? (
              <div className="player-wrap"
                dangerouslySetInnerHTML={{ __html: `
                  <video
                    onloadstart="this.volume=0.0"
                    class="allianz-player"
                    playsinline
                    autoplay
                    loop>
                    <source src="${brsrticle.videocover.file.url}" type="video/mp4" />
                  </video>` }}
              />
            ) : (
              <GatsbyImage
                image={getImage(brsarticle.cover?.file)}
                alt={brsarticle.cover?.alternativeText}
              />
              )}
          </Link>
        </div>
        <div className="articleDesc">
          <div className="articleTags">
          {brsarticle.tags.map((tag, i) => (
            <Link to={`/${tag.slug}`}>
              <h3>
                  {tag.name}
              </h3>
            </Link>
          ))}
          </div>
          <Link to={`/${brsarticle.slug}`}>
            <div className="articleTitle">
              <h2>{brsarticle.title}</h2>
            </div>
            <div className="articleDescription">
              <p>
                {brsarticle.description}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
    )
  }

export default MainFeed
