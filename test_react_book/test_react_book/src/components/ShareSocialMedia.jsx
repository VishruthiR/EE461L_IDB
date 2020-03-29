import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class ShareSocialMedia extends React.Component {
  render() {
    return (
      <div>
        <h6>Share With Your Friends!</h6>
        <a href="https://www.facebook.com">
          <img
            alt="No Link"
            src="https://live.staticflickr.com/2891/9249773998_7aa17362a8.jpg"
            width="30%"
            height="30%"
          ></img>
        </a>
        <a href="https://www.instagram.com">
          <img
            alt="No Link"
            src="https://www.hypebot.com/wp-content/uploads/2019/11/instagram.jpg"
            width="30%"
            height="30%"
          ></img>
        </a>
        <a href="https://www.twitter.com">
          <img
            alt="No Link"
            src="https://iconorbit.com/icons/256-watermark/1804201618085833028-twitter%20sky%20blue%20circle%20icon.jpg"
            width="30%"
            height="30%"
          ></img>
        </a>
      </div>
    );
  }
}

export default ShareSocialMedia;
