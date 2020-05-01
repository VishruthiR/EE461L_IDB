import React from "react";
import Header from "./Header";
import RecommendationCarousel from "./RecommendationCarousel";

class Author extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header
          type="author"
          image={this.props.authorPicture}
          author={this.props.authorName}
          genre={this.props.authorGenre}
          publisher={this.props.authorPublisher}
          numBooks={this.props.authorNumBooks}
        />
        <br />
        <RecommendationCarousel
          recommendations={this.props.bookRecommendations}
          typeOfRecommendation={"Books by this author"}
          type={"Book"}
        />
      </React.Fragment>
    );
  }
}

export default Author;