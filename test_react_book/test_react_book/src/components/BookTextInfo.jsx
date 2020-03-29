import React from "react";
import "bootstrap/dist/css/bootstrap.css";

class BookTextInfo extends React.Component {
  render() {
    return (
      <div>
        <h3>Title</h3>
        <h3>Author</h3>
        <h3>Date Published</h3>
        <h3>Publisher</h3>
        <h3>
          <a href="https://booklopedia.appspot.com/homepage.html">
            Link to Buy
          </a>
        </h3>
      </div>
    );
  }
}

export default BookTextInfo;
