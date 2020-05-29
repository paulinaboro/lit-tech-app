import React, { Component } from "react";
import axios from "axios";
import SingleCourse from "./SingleCourse";

export default class CoursesFetching extends Component {
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

  // state = {
  //   courses: [],
  // };

  componentDidMount() {
    axios
      .get(
        `http://localhost/databases2020/lit-tech-new-app/src/react-php/api/CoursesFetching.php`
      )
      .then((res) => {
        const courses = res.data;
        this.setState({ courses });
      });
    console.log(this.state.courses);
  }
  render() {
    console.log("state courses", this.state.courses);
    let coursesList = null;
    if (this.state.courses) {
      return (
        <SingleCourse
          courses={this.state.courses}
          addCourse={this.state.courses}
          deleteCourse={this.deleteCourse}
          name={this.state.courses}
        />
      );
    }
    return (
      <div>
        <ul>{coursesList}</ul>
      </div>
    );
  }
}
