import React from "react"
import { Link } from "gatsby"

function Highlights() {

  return (
    <nav className="highlight-nav grid-x">
      <ul className="menu vertical cell medium-6">
        <li>
          <Link to="/about">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/hubs">
            Hubs
          </Link>
        </li>
        <li>
          <Link to="/study">
            Study
          </Link>
        </li>
        <li>
          <Link to="/fellows">
            Fellows
          </Link >
        </li>
      </ul>
      <ul className="menu vertical cell medium-6">
        <li>
          <Link to="/funding">
            Funding
          </Link>
        </li>
        <li>
          <Link to="/application">
            Application
          </Link>
        </li>
        <li>
          <Link to="/calendar">
            Calendar
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Highlights;
