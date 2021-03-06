import React from "react"
import { Link } from "react-router-dom"

const HomePage = () => (
  <div className="jumbotron jumbotron-fluid">
    <h1 className="display-4">Hello, world!</h1>
    <p className="lead">
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
    </p>
    <hr className="my-4" />
    <p>
      It uses utility classNamees for typography and spacing to space content
      out within the larger container.
    </p>
    <p className="lead">
      <Link to="/about" className="btn btn-primary btn-lg">
        Learn more
      </Link>
    </p>
  </div>
)
export default HomePage
