import React from "react";
import Description from "./Description";
import BookHeader from "./BookHeader";
import RecommendationCarousel from "./RecommendationCarousel";
/*
props passed in should describe what book this Book is
maybe all we need to be passed into is ISBN number and we get all the other info based on this
*/
class Book extends React.Component {
  constructor(props) {
    super(props);
    // setup state
    this.state = {
      bookISBN: "",
      bookGenre: "",
      bookTitle: "",
      bookCover: "",
      authorName: "",
      bookSummary: "",
      bookPublisher: "",
      bookNumPages: "",
      bookRating: 0,
      numRatings: 0,
      publishedDate: "",
      bookRecommendations: []
    };
  }

  componentDidMount() {
    // make call to server to get information and modify state using setState
    this.loadResults();
  }

  componentDidUpdate() {
    this.loadResults();
  }

  loadResults() {
    const params = new URLSearchParams(window.location.search);
    const isbn = params.get("isbn");
    if (isbn !== this.state.bookISBN) {
      fetch("http://35.239.85.230/book?isbn=" + isbn)
        .then(result => result.json())
        .then(result => {
          console.log(result);
          this.setState({
            bookTitle: result.volumeInfo.title,
            bookCover: result.volumeInfo.imageLinks.thumbnail,
            bookSummary: result.volumeInfo.description,
            authorName: result.volumeInfo.authors,
            bookGenre: result.volumeInfo.genre,
            bookISBN: result.volumeInfo.industryIdentifiers.identifier,
            bookRating: result.volumeInfo.averageRating,
            numRatings: result.volumeInfo.numberOfRatings,
            publishedDate: result.volumeInfo.publishedDate,
            bookPublisher: result.volumeInfo.publisher,
            bookNumPages: result.volumeInfo.pageCount
          });
          fetch(
            "http://35.239.85.230/recBooks?genre=" + result.volumeInfo.genre
          )
            .then(response => response.json())
            .then(data => {
              console.log("hi");
              console.log(data);
              var recommendations = [];
              for (var i = 0; i < data.list.length; i++) {
                console.log(data.list[i].volumeInfo.authors);
                recommendations.push({
                  picture: data.list[i].volumeInfo.imageLinks.thumbnail,
                  ISBN: data.list[i].volumeInfo.industryIdentifiers.identifier,
                  author: data.list[i].volumeInfo.authors,
                  title: data.list[i].volumeInfo.title
               });
              }
              this.setState({ bookRecommendations: recommendations });
            });
        });
    }
  }

  render() {
    return (
      <React.Fragment>
        <BookHeader title={this.state.bookTitle} image={this.state.bookCover} author={this.state.authorName} 
            genre={this.state.bookGenre} publisher={this.state.bookPublisher}
            numPages={this.state.bookNumPages} rating={this.state.bookRating}
            numRatings={this.state.numRatings} publishedDate={this.state.publishedDate}
            />
        <br />
        <Description
          typeOfDescription="Book Description"
          description={this.state.bookSummary}
        />
        <RecommendationCarousel
          recommendations={this.state.bookRecommendations}
          typeOfRecommendation={"Recommended Books"}
          type={"Book"}
        />
        {/*<Reviews />*/}
      </React.Fragment>
    );
  }
}

export default Book;
