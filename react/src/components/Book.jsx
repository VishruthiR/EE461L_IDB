import React from "react";
import Recommendations from "./Recommendations";
import Description from "./Description";
import BookHeader from "./BookHeader";
/*
props passed in should describe what book this Book is
maybe all we need to be passed into is ISBN number and we get all the other info based on this
*/
class Book extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BookHeader title={this.props.bookTitle} image={this.props.bookCover} author={this.props.authorName}
          genre={this.props.bookGenre} publisher={this.props.bookPublisher}
          numPages={this.props.bookNumPages} rating={this.props.bookRating}
          numRatings={this.props.numRatings} publishedDate={this.props.publishedDate}
        />
        <br />
        <Description
          typeOfDescription="Book Description"
          description={this.props.bookSummary}
        />
        <Recommendations
          recommendations={this.props.bookRecommendations}
          typeOfRecommendation={"Recommended Books"}
        />
      </React.Fragment>
    );
  }
}

export default Book;
