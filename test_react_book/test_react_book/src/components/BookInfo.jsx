import React from "react";
import Picture from "./Picture";
import BookTextInfo from "./BookTextInfo";
import "bootstrap/dist/css/bootstrap.css";
import ShareSocialMedia from "./ShareSocialMedia";

class BookInfo extends React.Component {
  render() {
    return (
      <div class="row">
        <div class="col">
          <Picture />
        </div>
        <div class="col">
          <BookTextInfo />
        </div>
        <div class="col">
          <ShareSocialMedia />
        </div>
      </div>
    );
  }
}

export default BookInfo;
