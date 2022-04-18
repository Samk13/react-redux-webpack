import React from "react"
import { Link } from "react-router-dom"

const AboutPage = () => (
  <div className="jumbotron">
    <h2 className="display-4">About</h2>
    <p>This app user react redux react router and other libraries</p>
    <Link to="/" className="btn btn-primary btn-lg">
      Home
    </Link>
  </div>
)
export default AboutPage
