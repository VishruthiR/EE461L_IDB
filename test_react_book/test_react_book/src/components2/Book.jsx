import React from "react";
import Recommendations from "./Recommendations";
import Description from "./Description";
import Header from "./Header";
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
      fetch("http://34.71.147.72:80/book?isbn=" + isbn)
        .then(result => result.json())
        .then(result => {
          this.setState({
            bookTitle: result.volumeInfo.title,
            bookCover: result.volumeInfo.imageLinks.thumbnail,
            bookSummary: result.volumeInfo.description,
            authorName: result.volumeInfo.authors,
            bookGenre: result.volumeInfo.genre,
            bookISBN: result.volumeInfo.industryIdentifiers.identifier
          });
          fetch(
            "http://34.71.147.72:80/recBooks?genre=" + result.volumeInfo.genre
          )
            .then(response => response.json())
            .then(data => {
              console.log("hi");
              console.log(data);
              var recommendations = [];
              for (var i = 0; i < data.length; i++) {
                recommendations.push({
                  picture: data[i].volumeInfo.imageLinks.thumbnail,
                  ISBN: data[i].volumeInfo.industryIdentifiers.identifier
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
        <Header title={this.state.bookTitle} author={this.state.authorName} />
        <br />
        <Description
          image={this.state.bookCover}
          description={this.state.bookSummary}
        />
        <Recommendations
          recommendations={this.state.bookRecommendations}
          typeOfRecommendation={"Recommended Books"}
        />
        {/*<Reviews />*/}
      </React.Fragment>
    );
  }
}

export default Book;
