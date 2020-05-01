import React from "react";
import Recommendations from "./Recommendations";
import AuthorRecommendation from "./AuthorRecommendations";
import Description from "./Description";
import GenreHeader from "./GenreHeader";

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
        <AuthorRecommendation
          recommendations={this.props.authorRecommendation}
          typeOfRecommendation={"Recommended Authors"}
        />
        <Recommendations
          recommendations={this.props.bookRecommendations}
          typeOfRecommendation={"Recommended Books"}
        />
      </React.Fragment>
    );
  }
}

export default Genre;
