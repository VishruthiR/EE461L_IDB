import React from "react";
import Description from "./Description";
import GenreHeader from "./GenreHeader";
import RecommendationCarousel from "./RecommendationCarousel";

class Genre extends React.Component {
  render() {
    return (
      <React.Fragment>
        <GenreHeader genre={this.props.genreName}
          image={this.props.genrePicture}
          numBooks={this.props.numBooksGenre}
          numAuthors={this.props.numAuthorsGenre}
        />
        <br />
        <Description
          typeOfDescription="Genre Description"
          description={this.props.genreDescription}
        />
        <RecommendationCarousel
          recommendations={this.props.authorRecommendation}
          typeOfRecommendation={"Recommended Authors"}
          type={"Author"}
        />
        <RecommendationCarousel
          recommendations={this.props.bookRecommendations}
          typeOfRecommendation={"Books by this author"}
          type={"Book"}
        />
      </React.Fragment >
    );
  }
}

export default Genre;
