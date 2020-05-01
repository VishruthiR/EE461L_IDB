import React from "react";
import Recommendations from "./Recommendations";
import AuthorHeader from "./AuthorHeader";

class Author extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AuthorHeader image={this.props.authorPicture}
          author={this.props.authorName}
          genre={this.props.authorGenre}
          publisher={this.props.authorPublisher}
          numBooks={this.props.authorNumBooks}
        />
        <br />
        <Recommendations
          recommendations={this.props.bookRecommendations}
          typeOfRecommendation={"Books by this author"}
        />
      </React.Fragment>
    );
  }
}

export default Author;
