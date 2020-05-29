import React, { Component } from "react";
import "./style.scss";
import Img from "./img/database2.png";
import { PostData } from "../../services/PostData";
// import { PostDataCourse } from "../../services/PostDataCourse";

class SingleCourse extends Component {
  // componentDidMount() {}

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
    this.addCourseToCart = this.addCourseToCart.bind(this);
  }

  addCourseToCart(e) {
    e.preventDefault();
    let chosenCourseID = e.currentTarget.value;
    //   // console.log(chosenCourseID);
    let data = JSON.parse(sessionStorage.getItem("userData"));
    let postData = {
      user_id: data.userData.user_id,
      course_id: chosenCourseID,
    };

    if (chosenCourseID) {
      PostData("addCourseToCart", postData);
    }
  }

  render() {
    const { courses } = this.props;

    return (
      <div className="container">
        <div className=" row">
          {courses.map((course) => (
            <div className="col-6" key={course.course_id}>
              <div>
                <button>{course.course_genre}</button>
                <p>{course.img_path}</p>
                <img className="singleImg" src={Img}></img>
                {/* <img src={course.img_path}></img> */}
                <h1>{course.course_name}</h1>
                <p>{course.short_description}</p>

                <form onSubmit={this.addCourseToCart} method="post">
                  <button
                    type="submit"
                    value={course.course_id}
                    onClick={this.addCourseToCart}
                  >
                    Add to cart
                  </button>
                </form>
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
