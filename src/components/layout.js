import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"

import "./layout-test.css"
import "bulma/bulma.sass"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStroopwafel } from "@fortawesome/free-solid-svg-icons"
import { faHome } from "@fortawesome/free-solid-svg-icons"

library.add(faStroopwafel, faHome)
// library.add(faHome)

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          className="Site"
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main className="Site-content">{children}</main>
          <footer
            className="grid is-paddingless"
            style={{
              background: `white`,
              marginTop: `2rem`,
            }}
          >
            <div
              className="content has-text-centered"
              style={{
                borderTop: `.1px solid grey`,
                padding: `1rem 0`,
              }}
            >
              <p>
                © {new Date().getFullYear()}, this blog has been built using
                {` `}
                <a target="_blank" href="https://www.gatsbyjs.org">
                  Gatsby
                </a>{" "}
                and{" "}
                <a target="_blank" href="https://bulma.io/">
                  Bulma
                </a>
              </p>
            </div>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
