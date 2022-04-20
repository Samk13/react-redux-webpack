import React from "react"
import propTypes from "prop-types"
import { Link } from "react-router-dom"

const CourseList = ({ courses }) => (
  <>
    <h3>Courses</h3>
    <div className="mt-16">
      {courses.map((course) => (
        <div className="card my-4" key={course.title}>
          <div className="card-body my-2 p-4">
            <h5 className="card-title">{`${course.title} by ${course.authorId}`}</h5>
            <div className="card-text">
              <span className="btn btn-light">{`${course.category}`}</span>
            </div>
            <Link to={`/course/${course.slug}`} className="btn btn-primary">
              View Course
            </Link>
          </div>
        </div>
      ))}
    </div>
  </>
)

CourseList.propTypes = {
  courses: propTypes.array.isRequired,
}

export default CourseList
