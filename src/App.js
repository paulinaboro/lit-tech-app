import React, { Component } from "react";
import "./styles/foundation.min.css";
import "./styles/custom.css";
import Routes from "./routes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import MobileHeader from "./components/MobileHeader/MobileHeader";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      // appName: "Databases tutorials login",
      home: false,
    };
  }
  render() {
    return (
      <div className="">
        <div className="">
          <div className="">
            {/* <MobileHeader name={this.state.appName} /> */}
            {/* <Header name={this.state.appName} /> */}
            <Header />
            <Routes name={this.state.appName} />
            <hr />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
