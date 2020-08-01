import React from "react";
import CourseList from './../components/displays/course_list'

export default function Home() {
  return (
    <div style={{ marginTop: "80px" }} >
      {" "}
      <CourseList/>
      <CourseList/>
    </div>
  );
}
