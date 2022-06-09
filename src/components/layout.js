import ScrollReveal from "scrollreveal"
import React, { useEffect, useState } from "react"
import loadable from '@loadable/component'
import Header from "./header"
import Hamburger from "./navigation/Hamburger"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div className="allianz-foundation">
      <div className="inner">
        <Header />
        <Hamburger />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout
