import React from "react";
import Review from "./Review";
import "bootstrap/dist/css/bootstrap.css";

class Reviews extends React.Component {
  render() {
    return (
      <div>
        <h1>Reviews</h1>
        <Review />
        <Review />
        <Review />
      </div>
    );
  }
}

export default Reviews;
