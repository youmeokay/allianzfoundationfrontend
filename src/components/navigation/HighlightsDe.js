import React from "react"
import { Link } from "gatsby"

function Highlights() {

  return (
    <nav className="highlight-nav grid-x">
      <ul className="menu vertical cell medium-6">
        <li>
          <Link to="/de/about">
            About Uns
          </Link>
        </li>
        <li>
          <Link to="/de/hubs">
            Hubs
          </Link>
        </li>
        <li>
          <Link to="/de/study">
            Study
          </Link>
        </li>
        <li>
          <Link to="/de/fellows">
            Fellows
          </Link >
        </li>
      </ul>
      <ul className="menu vertical cell medium-6">
        <li>
          <Link to="/de/funding">
            Funding
          </Link>
        </li>
        <li>
          <Link to="/de/application">
            Application
          </Link>
        </li>
        <li>
          <Link to="/de/calendar">
            Kalender
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Highlights;
