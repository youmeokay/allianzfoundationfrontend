import ScrollReveal from "scrollreveal"
import React, { useEffect, useState } from "react"

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
      delay: 0,
      duration: 640,
      interval: 128,
      distance: "2rem",
      origin: 'bottom'
    });
    ScrollReveal().reveal('.revealer-from-left', {
      delay: 64,
      duration: 640,
      distance: "2rem",
      origin: 'left'
    });
    ScrollReveal().reveal('.revealer-from-right', {
      delay: 64,
      duration: 640,
      distance: "2rem",
      origin: 'right'
    });
    ScrollReveal().reveal('.revealer-horizontal', {
      delay: 64,
      duration: 640,
    });
    ScrollReveal().reveal('.search-revealer', {
      delay: 0,
      duration: 320,
    });
  },[]);

  return (
    <div className="allianz-foundation">
      {children}
    </div>
  )
}

export default Layout
