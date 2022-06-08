import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="normal">
      <div className="grid-x align-bottom">

        <div className="cell medium-4 newsletter">

          <div className="grid-x align-center">
            <div className="cell small-6">
              <p>Subscribe to our newsletter and stay in touch:</p>
            </div>
          </div>

          <div className="newsletter-form grid-x align-bottom">
            <div className="cell medium-offset-3 small-7">
              <div className="form__group field">
                <input type="email" className="form__field" placeholder="E-Mail" name="name" id='name' required />
              </div>
            </div>
            <div className="cell small-2">
              <input type="submit" className="button" value="Send"/>
            </div>
          </div>

        </div>

        <div className="cell medium-offset-3 medium-2 small-6">
          <nav className="footleft">
            <ul className="menu simple">
              <li>
                <Link to="/going-local">
                  Going local
                </Link>
              </li>
              <li>
                <Link to="/news">
                  News
                </Link>
              </li>
              <li>
                <Link to="/jobs" >
                  Jobs
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="cell medium-2 small-6">
          <nav className="footright">
            <ul className="menu simple">
            <li>
              <Link to="/contact">
                Contact
              </Link>
            </li>
              <li>
                <Link to="/privacy">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link to="/imprint">
                  Imprint
                </Link>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </footer>
  )
}

export default Footer
