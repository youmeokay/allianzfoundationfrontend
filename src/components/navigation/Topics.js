import React from "react"
import { Link } from "gatsby"

export default function Topics() {
  return (
    <nav className="topic-nav grid-x">
      <Link to="/people" className="people cell medium-4">
        <ul className="menu vertical">
          <li className="text-center">
            For<br />
            empowered<br />
            <span>people</span>
          </li>
        </ul>
      </Link>
      <Link to="/society" className="society cell medium-4">
        <ul className="menu vertical">
          <li className="text-center">
            For<br />
            open<br />
            <span>societies</span>
          </li>
        </ul>
      </Link>
      <Link to="/planet" className="planet cell medium-4">
        <ul className="menu vertical">
          <li className="text-center">
            For<br />
            a living<br />
            <span>planet</span>
          </li>
        </ul>
      </Link>
    </nav>
  );
}
