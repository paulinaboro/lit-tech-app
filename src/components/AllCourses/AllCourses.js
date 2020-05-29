import React, { Component } from "react";
import "./style.scss";
import CoursesFetching from "../SingleCourse/CoursesFetching";
// const urlData = require("../SingleCourse/courses.json");
import { Redirect } from "react-router-dom";

class AllCourses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      userFeed: "",
      redirectToReferrer: false,
      name: "",
      usercourses: [],
      courses: [],
    };
  }

  render() {
    return (
      // console.log(this.state.name);
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ul className="menu-list">
              <li>
                <a href="/home">Forum</a>
              </li>
              <li>
                <a href="/allcourses">All Courses</a>
              </li>
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
