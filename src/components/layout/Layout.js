import ScrollReveal from "scrollreveal"
import React, { useEffect, useState } from "react"
import loadable from '@loadable/component'
const AnimatedCursors = loadable(() => import('./../helpers/Cursor'))
import Header from "./Header"
import Hamburger from "./../navigation/Hamburger"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className="allianz-foundation">
      <div className="inner">
        <Header />
        <Hamburger />
        {children}
        <Footer />
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
