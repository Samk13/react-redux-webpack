function createCourse(course) {
  return {
    type: "CREATE_COURSE",
    course,
  }
}

// eslint-disable-next-line import/prefer-default-export
export { createCourse }
