import React, { useEffect } from "react"

const FixedText = ({ data }) => {

  const directionChange = data.direction.startsWith("Opposite")

  return (
    <article className="module-fixed-text cell medium-9">
        <div className="html-content">
          {directionChange ? (
            <div className="grid-x grid-margin-x">
              <div className="scroll-content cell medium-6 revealer">
                {data.text && <div dangerouslySetInnerHTML={{__html: data.text}} />}
              </div>
              <div className="cell medium-offset-1 medium-5">
                <div className="sticky-content">
                  <div className="sticky-inner">
                    {data.title &&  <h2><b>{data.title}</b></h2>}
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
                      <div className=""></div>
                    </div>
                    {data.title &&  <h2><b>{data.title}</b></h2>}
                  </div>
                </div>
              </div>
              <div className="scroll-content medium-offset-1 cell medium-6">
                {data.text && <div className="revealer" dangerouslySetInnerHTML={{__html: data.text}} />}
              </div>
            </div>
          )}
        </div>
    </article>
  )
}

export default FixedText
