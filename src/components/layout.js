import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div>
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
        <p>— the works of Michael C. Martinez → <span><Link to="/">info</Link></span></p>
        {/* <ul>
          <li>
            <sup>TITLE</sup><p>harsim.us</p>
          </li>
          <li>
            <sup>VER</sup><p>1.0</p>
          </li>
          <li>
            <sup>EMAIL</sup><a href="mailto: michael@harsim.us">michael@harsim.us</a>
          </li>
          <li>
            <sup>RESUME</sup><a href="/" download>mcmartinezresume.pdf</a>
          </li>
          <li>
            <sup>COMPANY</sup><p>DIAL UP</p>
          </li>
          <li>
            <sup>APPROVED BY</sup><p>Michael C. Martinez</p>
          </li>
          <li>
            <sup>DESCRIPTION</sup><p>The works of Michael C. Martinez</p>
          </li>
        </ul> */}
        {/* <div className="byline">
          <sup>EMAIL</sup><a href="mailto: michael@harsim.us">michael@harsim.us</a>
          {` `}
          <sup>RESUME</sup><a href="/static/favicon.ico" download>mcmresume.pdf</a>
        </div> */}
      </div>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        ← {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()} — Michael C. Martinez
        {/* {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a> */}
      </footer>
    </div>
  )
}

export default Layout
