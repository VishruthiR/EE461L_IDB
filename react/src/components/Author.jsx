import React from "react";
import Recommendations from "./Recommendations";
import AuthorHeader from "./AuthorHeader";
/*
props passed in should describe what author this Author is
currently we use author name because it is unique within our DB but might need to be changed
*/
class Author extends React.Component {
  constructor(props) {
    super(props);
    // setup state
    this.state = {
      authorName: "",
      authorPicture: "",
      authorGenre: "",
      authorPublisher: "",
      authorNumBooks: "",
      bookRecommendations: []
    };
  }

  componentDidMount() {
    // make call to server to get information and modify state using setState
    const params = new URLSearchParams(window.location.search);

    fetch("http://34.71.147.72:80/author?" + params)
      .then(result => result.json())
      .then(data => {
        console.log(data);
        this.setState({
          authorName: data.author,
          authorPicture: data.imageLink
        });
      });
    fetch("http://34.71.147.72:80/authorsBooks?" + params, { method: "GET" })
      .then(response => response.json())
      .then(data => {
        if(data.pageOfItems.length > 0) {
          this.setState({ authorGenre: data.pageOfItems[0].volumeInfo.genre});
          this.setState({ authorPublisher: data.pageOfItems[0].volumeInfo.publisher});
        }
        var recommendations = [];
        for (var i = 0; i < data.pageOfItems.length; i++) {
          recommendations.push({
            picture: data.pageOfItems[i].volumeInfo.imageLinks.thumbnail,
            ISBN: data.pageOfItems[i].volumeInfo.industryIdentifiers.identifier,
            author: data.pageOfItems[i].volumeInfo.authors,
            title: data.pageOfItems[i].volumeInfo.title
          });
        }
        this.setState({ bookRecommendations: recommendations });
      });
  }

  componentDidUpdate() {}

  render() {
    return (
      <React.Fragment>
        <AuthorHeader image={this.state.authorPicture} author={this.state.authorName} genre={this.state.authorGenre} publisher={this.state.authorPublisher} numBooks={this.state.authorNumBooks}/>
        <br />
        <Recommendations
          recommendations={this.state.bookRecommendations}
          typeOfRecommendation={"Books by this author"}
        />
      </React.Fragment>
    );
  }
}

export default Author;
