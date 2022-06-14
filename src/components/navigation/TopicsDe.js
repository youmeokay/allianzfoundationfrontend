import React from "react"
import { Link } from "gatsby"

export default function Topics() {
  return (
    <nav className="topic-nav grid-x">
      <Link to="/de/people" className="people cell medium-4">
        <ul className="menu vertical">
          <li className="text-center">
            Für<br />
            starke<br />
            <span>Menschen</span>
          </li>
        </ul>
      </Link>
      <Link to="/de/society" className="society cell medium-4">
        <ul className="menu vertical">
          <li className="text-center">
            Für<br />
            offene<br />
            <span>Gesellschaften</span>
          </li>
        </ul>
      </Link>
      <Link to="/de/planet" className="planet cell medium-4">
        <ul className="menu vertical">
          <li className="text-center">
            Für<br />
            einen lebendingen<br />
            <span>Planeten</span>
          </li>
        </ul>
      </Link>
    </nav>
  );
}
