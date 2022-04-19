import * as types from "./actionTypes"

function createCourse(course) {
  return {
    type: types.CREATE_COURSE,
    course,
  }
}

// eslint-disable-next-line import/prefer-default-export
export { createCourse }
