import React from "react"
import { Link } from "react-router-dom"

const NotFound = () => (
  <div className="container-fluid">
    <h1 className="display-4"> Page Not Found </h1>
    <Link to="/" className="btn btn-primary btn-lg">
      Home
    </Link>
  </div>
)
export default NotFound
