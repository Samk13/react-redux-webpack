import React from "react"
import { NavLink } from "react-router-dom"

const HeaderComp = () => {
  const activeStyle = {
    // color: "#F15B2A",
    fontWeight: "bold",
    borderBottom: "2px solid #F15B2A",
  }
  return (
    <nav className="nav nav-pills flex-column flex-sm-row">
      <NavLink to="/" exact className="nav-link" activeStyle={activeStyle}>
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  )
}
export default HeaderComp
