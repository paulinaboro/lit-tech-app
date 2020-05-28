import React, { Component } from "react";
import "./style.scss";
import CoursesFetching from "../SingleCourse/CoursesFetching";
// const urlData = require("../SingleCourse/courses.json");
// import { Redirect } from "react-router-dom";

class AllCourses extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ul className="menu-list">
              <li>
                <a href="/home">Forum</a>
              </li>
              <li>All Courses</li>
              <li>Databases</li>
              <li>Design</li>
              <li>Game Development</li>
              <li>HTML</li>
              <li> CSS</li>
            </ul>
          </div>
          <div className="col-9">
            <CoursesFetching />
          </div>
        </div>
      </div>
    );
  }
}

export default AllCourses;