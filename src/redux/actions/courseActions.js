import * as types from "./actionTypes"
import * as courseApi from "../../api/courseApi"

function createCourse(course) {
  return {
    type: types.CREATE_COURSE,
    course,
  }
}

const loadCoursesSuccess = (courses) => ({
  type: types.LOAD_COURSES_SUCCESS,
  courses,
})
// Thunk action creator
export function loadCourses() {
  return async (dispatch) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const courses = await courseApi.getCourses()
      return dispatch(loadCoursesSuccess(courses))
    } catch (error) {
      throw error
    }
  }
}

// eslint-disable-next-line import/prefer-default-export
export { createCourse }
