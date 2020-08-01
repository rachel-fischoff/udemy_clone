import React from "react";
import CourseThumbnail from "./course_thumbnail";

export default function CourseList() {
  return (
    <div style={{ marginTop: "80px" }}>
   
      Course List ! include side menu to search and filter{" "}
      <CourseThumbnail />
    </div>
  );
}
