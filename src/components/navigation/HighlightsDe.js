import React from "react"
import { Link } from "gatsby"

function Highlights() {

  return (
    <nav className="highlight-nav grid-x">
      <ul className="menu vertical cell medium-6">
        <li>
          <Link to="/de/about">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/de/apply">
            Apply
          </Link>
        </li>
        <li>
          <Link to="/de/calendar">
            Calendar
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
          <Link to="/de/fellows">
            Fellows
          </Link >
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
      </ul>
    </nav>
  )
}

export default Highlights;
