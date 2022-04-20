import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { bindActionCreators } from "redux"
import * as courseActions from "../../redux/actions/courseActions"
import CourseList from "./CourseList"
// eslint-disable-next-line react/prefer-stateless-function
class CoursePage extends React.Component {
  componentDidMount() {
    this.props.actions.loadCourses().catch((error) => {
      console.log(`Loading courses failed ${error}`)
    })
  }

  render() {
    return <CourseList courses={this.props.courses} />
  }
}

// declare PropTypes
CoursePage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
  courses: state.courses,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(courseActions, dispatch),
})
// export default connect(mapStateToProps, mapDispatchToProps)(CoursePage)

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage)
