import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { bindActionCreators } from "redux"
import * as courseActions from "../../redux/actions/courseActions"

// eslint-disable-next-line react/prefer-stateless-function
class CoursePage extends React.Component {
  componentDidMount() {
    this.props.actions.loadCourses().catch((error) => {
      console.log(`Loading courses failed ${error}`)
    })
  }

  render() {
    return (
      <>
        <h3>Courses</h3>
        <div className="mt-16 col-6">
          {this.props.courses.map((course) => (
            <div className="card my-2 p-4" key={course.title}>
              <div className="card-body">
                <h5 className="card-title">
                  {`${course.title} / ${course.rating}`}
                </h5>
              </div>
              <p className="card-text">
                lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          ))}
        </div>
      </>
    )
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
