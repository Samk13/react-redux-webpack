import React from "react"

// eslint-disable-next-line react/prefer-stateless-function
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

export default CoursePage
