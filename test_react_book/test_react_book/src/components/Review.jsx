import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class Review extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="col-md-1">
          <img
            alt="No propic"
            src="https://i621.photobucket.com/albums/tt296/Kruh11/KruhPic50x50LQ.jpg"
          />
        </div>
        <div class="col-md-11">
          <h6>User rated it {3.5} stars, Mar 1, 2020</h6>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et
            lacus ex. Sed pharetra augue sed vestibulum efficitur. Suspendisse
            eleifend venenatis lorem eget hendrerit. Proin sit amet tellus
            augue. Curabitur eros nibh, gravida non efficitur auctor, posuere et
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Phasellus hendrerit consectetur
            nulla, in porttitor ante tempor non. Praesent eu justo varius,
            efficitur dui aliquam, vulputate augue. Sed ut arcu velit. Nunc
            ultricies orci in urna rutrum aliquet.
          </h6>
        </div>
      </div>
    );
  }
}

export default Review;
