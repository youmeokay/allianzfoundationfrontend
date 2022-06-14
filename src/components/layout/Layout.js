import ScrollReveal from "scrollreveal"
import React, { useEffect, useState } from "react"
import loadable from '@loadable/component'
const AnimatedCursors = loadable(() => import('./../helpers/Cursor'))

const Layout = ({ children }) => {

  useEffect(() => {
    ScrollReveal().reveal('.highlight-nav li', {
      delay: 0,
      duration: 320,
      interval: 64,
      distance: "2rem",
      origin: 'left',
    });
    ScrollReveal().reveal('.topic-nav', {
      delay: 320,
      duration: 640,
      distance: "2rem",
      origin: 'bottom',
    });
    ScrollReveal().reveal('.topic-nav a', {
      delay: 320,
      interval: 64,
      duration: 640,
    });
    ScrollReveal().reveal('.revealer', {
      delay: 64,
      duration: 640,
      interval: 64,
      distance: "2rem",
      origin: 'bottom'
    });
    ScrollReveal().reveal('.revealer-from-right', {
      delay: 64,
      duration: 640,
      interval: 64,
      distance: "2rem",
      origin: 'right'
    });
  },[]);

  return (
    <div className="allianz-foundation">
      <div className="inner">
        {children}
      </div>
      <AnimatedCursors
         innerSize={18}
         outerSize={18}
         color='0, 0, 0'
         outerAlpha={0}
         innerScale={1}
         outerScale={0}
       />
    </div>
  )
}

export default Layout
