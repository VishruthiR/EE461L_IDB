import React from "react";
import StarRating from "./StarRating";
import "bootstrap/dist/css/bootstrap.css";

class Rating extends React.Component {
  render() {
    return (
      <div>
        <h1>Ratings</h1>
        <div class="row">
          <div class="col">
            <h1>3.5 stars</h1>
          </div>
          <div class="col">
            <h1>5000 ratings</h1>
          </div>
          <div class="col">
            <h1>3000 reviews</h1>
          </div>
        </div>
        <h1>Post your own review!</h1>
      </div>
    );
  }
}

export default Rating;
