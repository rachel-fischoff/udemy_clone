import React from "react";
import CourseList from './../components/displays/course_list'
import SecondaryNav from "./../components/menus/secondary_nav_bar";

export default function Home() {
  return (
    <div style={{ marginTop: "80px" }} >
      <SecondaryNav/>
      {" "}
      <CourseList/>
      <CourseList/>
    </div>
  );
}
