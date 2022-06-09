import React, { useEffect } from "react"

const FixedText = ({ data }) => {

  const directionChange = data.direction.startsWith("Opposite")

  return (
    <article className="module-fixed-text cell medium-9">
        <div className="html-content">
          {directionChange ? (
            <div className="grid-x grid-margin-x">
              <div className="scroll-content cell medium-6 revealer">
                {data.text && <div dangerouslySetInnerHTML={{__html: data.fixedText}} />}
              </div>
              <div className="cell medium-offset-1 medium-5">
                <div className="sticky-content revealer">
                  <div className="sticky-inner">
                    {data.fixedTextTitle &&  <h2><b>{data.fixedTextTitle}</b></h2>}
                  </div>
                </div>
              </div>
            </div>
            ) : (
            <div className="grid-x grid-margin-x">
              <div className="cell medium-5">
                <div className="sticky-content revealer">
                  <div className="sticky-inner">
                    <div className="scharnier-fixed revealer-from-left">
                      <div></div>
                    </div>
                    {data.fixedTextTitle &&  <h2><b>{data.fixedTextTitle}</b></h2>}
                  </div>
                </div>
              </div>
              <div className="scroll-content medium-offset-1 cell medium-6">
                {data.fixedText && <div className="revealer" dangerouslySetInnerHTML={{__html: data.fixedText}} />}
              </div>
            </div>
          )}
        </div>
    </article>
  )
}

export default FixedText
