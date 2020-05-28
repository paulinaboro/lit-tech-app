import React, { Component } from "react";
import "./style.scss";
import Img from "./img/database2.png";

class SingleCourse extends Component {
  componentDidMount() {}

  render() {
    const { courses } = this.props;
    return (
      <div className="container">
        <div className=" row">
          {courses.map((course) => (
            <div className="col-6">
              <div key={course.course_id}>
                <button>{course.course_genre}</button>
                <p>{course.img_path}</p>
                <img className="singleImg" src={Img}></img>
                {/* <img src={course.img_path}></img> */}
                <h1>{course.course_name}</h1>
                <p>{course.short_description}</p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
          );
        </div>
      </div>
    );
  }
}

export default SingleCourse;
