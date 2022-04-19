import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import * as courseAction from "../../redux/actions/courseActions"

class CoursePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      course: {
        title: "",
        rating: 1,
      },
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    // eslint-disable-next-line react/no-access-state-in-setstate
    const course = { ...this.state.course, title: event.target.value }
    this.setState({ course })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.dispatch(courseAction.createCourse(this.state.course))
    console.log(this.state.course)
  }

  render() {
    const {
      course: { title },
    } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add course</h3>
        <div className="form-group col-6 mb-2">
          <label htmlFor="course" className="form-control col">
            Course Title
            <input
              type="text"
              className="form-control"
              id="course"
              placeholder="Enter Course name"
              onChange={this.handleChange}
              value={title.value}
            />
          </label>
        </div>
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
        {/* <div className="form-group col-6 mb-2">
          <label htmlFor="rating" className="form-control col">
            Rating
            <input
              type="number"
              className="form-control"
              id="rating"
              min={1}
              max={5}
              placeholder="Rating"
            />
          </label>
        </div> */}
        <button type="submit" value="save" className="btn btn-primary col-6">
          Submit
        </button>
      </form>
    )
  }
}

// declare PropTypes
CoursePage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  courses: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  courses: state.courses,
})
// const mapDispatchToProps = (state) => ({
//   course: state.course,
// })
// export default connect(mapStateToProps, mapDispatchToProps)(CoursePage)

export default connect(mapStateToProps)(CoursePage)
