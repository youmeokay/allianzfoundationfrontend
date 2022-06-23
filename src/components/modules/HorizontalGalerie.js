import React, { useRef, useEffect, useState, useLayoutEffect } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const HorizontalGalery = ({ data }) => {

  const useIsomorphicLayoutEffect = typeof window !== "undefined"
  ? useLayoutEffect
  : useEffect;

  useIsomorphicLayoutEffect(() => {

      gsap.registerPlugin(ScrollTrigger);

      const myHorizontal = `.panel__${data.id}`

      const sections = gsap.utils.toArray(myHorizontal);
        let maxWidth = 0;

        const getMaxWidth = () => {
          maxWidth = 0;
          sections.forEach((section) => {
            maxWidth += section.offsetWidth;
          });
        };

        getMaxWidth();
        ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

        gsap.to(sections, {
          x: () => `-${maxWidth - window.innerWidth}`,
          ease: "none",
          scrollTrigger: {
            trigger: `#trigger__${data.id}`,
            pin: true,
            scrub: true,
            start: "50% 50%",
            end: () => `+=${maxWidth}`
          }
        });

        ScrollTrigger.refresh(true);

  }, []);


  return (
    <>
      {data.horizontalentry.length == 2 &&
        <article className="module-horizontal-scrolltrigger">
          <div className="horizontal-container two"  id={`trigger__${data.id}`}>
            {data.horizontalentry.map((entry, i) => (
              <div className={`panel panel__${data.id}`}>
                <div className="html-content grid-x">
                  <div class="cell">
                    <GatsbyImage image={getImage(entry.media.file)} alt={entry.media.alternativeText} />
                    {entry.title && <p><b>{entry.title}</b></p>}
                    {entry.text && <div dangerouslySetInnerHTML={{__html: entry.text}} />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      }
      {data.horizontalentry.length == 3 &&
        <article className="module-horizontal-scrolltrigger">
          <div className="horizontal-container three"  id={`trigger__${data.id}`}>
            {data.horizontalentry.map((entry, i) => (
              <div className={`panel panel__${data.id}`}>
                <div className="html-content grid-x">
                  <div class="cell">
                    <GatsbyImage image={getImage(entry.media.file)} alt={entry.media.alternativeText} />
                    {entry.title && <p><b>{entry.title}</b></p>}
                    {entry.text && <div dangerouslySetInnerHTML={{__html: entry.text}} />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      }
      {data.horizontalentry.length == 4 &&
        <article className="module-horizontal-scrolltrigger">
          <div className="horizontal-container four"  id={`trigger__${data.id}`}>
            {data.horizontalentry.map((entry, i) => (
              <div className={`panel panel__${data.id}`}>
                <div className="html-content grid-x">
                  <div class="cell">
                    <GatsbyImage image={getImage(entry.media.file)} alt={entry.media.alternativeText} />
                    {entry.title && <p><b>{entry.title}</b></p>}
                    {entry.text && <div dangerouslySetInnerHTML={{__html: entry.text}} />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      }
      {data.horizontalentry.length == 5 &&
        <article className="module-horizontal-scrolltrigger">
          <div className="horizontal-container five"  id={`trigger__${data.id}`}>
            {data.horizontalentry.map((entry, i) => (
              <div className={`panel panel__${data.id}`}>
                <div className="html-content grid-x">
                  <div class="cell">
                    <GatsbyImage image={getImage(entry.media.file)} alt={entry.media.alternativeText} />
                    {entry.title && <p><b>{entry.title}</b></p>}
                    {entry.text && <div dangerouslySetInnerHTML={{__html: entry.text}} />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      }
      {data.horizontalentry.length == 6 &&
        <article className="module-horizontal-scrolltrigger">
          <div className="horizontal-container six"  id={`trigger__${data.id}`}>
            {data.horizontalentry.map((entry, i) => (
              <div className={`panel panel__${data.id}`}>
                <div className="html-content grid-x">
                  <div class="cell">
                    <GatsbyImage image={getImage(entry.media.file)} alt={entry.media.alternativeText} />
                    {entry.title && <p><b>{entry.title}</b></p>}
                    {entry.text && <div dangerouslySetInnerHTML={{__html: entry.text}} />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      }
      {data.horizontalentry.length == 7 &&
        <article className="module-horizontal-scrolltrigger">
          <div className="horizontal-container seven"  id={`trigger__${data.id}`}>
            {data.horizontalentry.map((entry, i) => (
              <div className={`panel panel__${data.id}`}>
                <div className="html-content grid-x">
                  <div class="cell">
                    <GatsbyImage image={getImage(entry.media.file)} alt={entry.media.alternativeText} />
                    {entry.title && <p><b>{entry.title}</b></p>}
                    {entry.text && <div dangerouslySetInnerHTML={{__html: entry.text}} />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      }
      {data.horizontalentry.length == 8 &&
        <article className="module-horizontal-scrolltrigger">
          <div className="horizontal-container eight"  id={`trigger__${data.id}`}>
            {data.horizontalentry.map((entry, i) => (
              <div className={`panel panel__${data.id}`}>
                <div className="html-content grid-x">
                  <div class="cell">
                    <GatsbyImage image={getImage(entry.media.file)} alt={entry.media.alternativeText} />
                    {entry.title && <p><b>{entry.title}</b></p>}
                    {entry.text && <div dangerouslySetInnerHTML={{__html: entry.text}} />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      }
      {data.horizontalentry.length == 9 &&
        <article className="module-horizontal-scrolltrigger">
          <div className="horizontal-container nine"  id={`trigger__${data.id}`}>
            {data.horizontalentry.map((entry, i) => (
              <div className={`panel panel__${data.id}`}>
                <div className="html-content grid-x">
                  <div class="cell">
                    <GatsbyImage image={getImage(entry.media.file)} alt={entry.media.alternativeText} />
                    {entry.title && <p><b>{entry.title}</b></p>}
                    {entry.text && <div dangerouslySetInnerHTML={{__html: entry.text}} />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      }
      {data.horizontalentry.length == 10 &&
        <article className="module-horizontal-scrolltrigger">
          <div className="horizontal-container ten"  id={`trigger__${data.id}`}>
            {data.horizontalentry.map((entry, i) => (
              <div className={`panel panel__${data.id}`}>
                <div className="html-content grid-x">
                  <div class="cell">
                    <GatsbyImage image={getImage(entry.media.file)} alt={entry.media.alternativeText} />
                    {entry.title && <p><b>{entry.title}</b></p>}
                    {entry.text && <div dangerouslySetInnerHTML={{__html: entry.text}} />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </article>
      }
    </>
  )
}

export default HorizontalGalery
