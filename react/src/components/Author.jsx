import React from "react";
import Recommendations from "./Recommendations";
import Description from "./Description";
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
      authorBio: "",
      authorGenre: "",
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
        var recommendations = [];
        for (var i = 0; i < data.pageOfItems.length; i++) {
          recommendations.push({
            picture: data.pageOfItems[i].volumeInfo.imageLinks.thumbnail,
            ISBN: data.pageOfItems[i].volumeInfo.industryIdentifiers.identifier
          });
        }
        this.setState({ bookRecommendations: recommendations });
      });
  }

  componentDidUpdate() {}

  render() {
    return (
      <React.Fragment>
        <AuthorHeader author={this.state.authorName} />
        <br />
        <Description
          description={this.state.authorBio}
          image={this.state.authorPicture}
        />
        <Recommendations
          recommendations={this.state.bookRecommendations}
          typeOfRecommendation={"Books by this author"}
        />
      </React.Fragment>
    );
  }
}

export default Author;
