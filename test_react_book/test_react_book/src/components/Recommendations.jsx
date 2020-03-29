import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-bootstrap/Carousel";

class Recommendations extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <div class="row">
            <div class="col">
              <img
                src="https://clipartsworld.com/images/book-of-shadows-clipart-11.jpg"
                alt="Default 1"
              />
            </div>
            <div class="col">
              <img
                src="https://clipartsworld.com/images/book-of-shadows-clipart-11.jpg"
                alt="Default 2"
              />
            </div>
            <div class="col">
              <img
                src="https://clipartsworld.com/images/book-of-shadows-clipart-11.jpg"
                alt="Default 3"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div class="row">
            <div class="col">
              <img
                src="https://clipartsworld.com/images/book-of-shadows-clipart-11.jpg"
                alt="Default 4"
              />
            </div>
            <div class="col">
              <img
                src="https://clipartsworld.com/images/book-of-shadows-clipart-11.jpg"
                alt="Default 5"
              />
            </div>
            <div class="col">
              <img
                src="https://clipartsworld.com/images/book-of-shadows-clipart-11.jpg"
                alt="Default 6"
              />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div class="row">
            <div class="col">
              <img
                src="https://clipartsworld.com/images/book-of-shadows-clipart-11.jpg"
                alt="Default 7"
              />
            </div>
            <div class="col">
              <img
                src="https://clipartsworld.com/images/book-of-shadows-clipart-11.jpg"
                alt="Default 8"
              />
            </div>
            <div class="col">
              <img
                src="https://clipartsworld.com/images/book-of-shadows-clipart-11.jpg"
                alt="Default 9"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Recommendations;
