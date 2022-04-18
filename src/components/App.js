import React from "react"
import { Route, Switch } from "react-router-dom"
import HomePage from "./home/HomePage"
import AboutPage from "./about/AboutPage"
import HeaderComp from "./common/HeaderComp"
import CoursesPage from "./courses/CoursesPage"
import NotFound from "./NotFound"

const App = () => (
  <div className="container-fluid">
    <HeaderComp />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/Courses" component={CoursesPage} />
      <Route component={NotFound} />
    </Switch>
  </div>
)
export default App
