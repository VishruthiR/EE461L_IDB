import React from "react";
import Description from "./Description";
import Header from "./Header";
import RecommendationCarousel from "./RecommendationCarousel";

class Book extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header 
          type="book"
          title={this.props.bookTitle} image={this.props.bookCover} author={this.props.authorName}
          genre={this.props.bookGenre} publisher={this.props.bookPublisher}
          numPages={this.props.bookNumPages} rating={this.props.bookRating}
          numRatings={this.props.numRatings} publishedDate={this.props.publishedDate}
        />
        <br />
        <Description
          typeOfDescription="Book Description"
          description={this.props.bookSummary}
        />
        <RecommendationCarousel
          recommendations={this.props.bookRecommendations}
          typeOfRecommendation={"Recommended Books"}
          type={"Book"}
        />
      </React.Fragment>
    );
  }
}

export default Book;
