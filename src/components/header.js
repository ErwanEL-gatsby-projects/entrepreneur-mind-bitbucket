import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/logo.png"

import "bulma/bulma.sass"
import "./layout-test.css"

const Header = ({ siteTitle }) => (
  <header>
    <nav
      class="grid navbar is-paddingless-horizontal is-white"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="brand center navbar-brand">
        <Link
          className="navbar-item title is-size-5"
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
          }}
        >
          <img src={logo} alt="Logo" style={{ marginRight: "4px" }} />
          {siteTitle}
        </Link>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
