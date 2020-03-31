import React from "react";
import Recommendations from "./Recommendations";
import Description from "./Description";
import Header from "./Header";
/*
props passed in should describe what author this Author is
currently we use author name because it is unique within our DB but might need to be changed
*/
class Author extends React.Component {
  constructor(props) {
    super(props);
    const myQuery = new URLSearchParams(window.location.search);
    // setup state
    this.state = {
      authorName: myQuery.get("name"), //"default author name",
      authorPicture:
        "https://clipartsworld.com/images/book-of-shadows-clipart-11.jpg",
      authorBio: "",
      bookRecommendations: [
        {
          picture:
            "https://clipartsworld.com/images/book-of-shadows-clipart-11.jpg",
          ISBN: 1
        },
        {
          picture:
            "https://clipartsworld.com/images/book-of-shadows-clipart-11.jpg",
          ISBN: 2
        },
        {
          picture:
            "https://clipartsworld.com/images/book-of-shadows-clipart-11.jpg",
          ISBN: 3
        },
        {
          picture:
            "https://clipartsworld.com/images/book-of-shadows-clipart-11.jpg",
          ISBN: 4
        },
        {
          picture:
            "https://clipartsworld.com/images/book-of-shadows-clipart-11.jpg",
          ISBN: 5
        },
        {
          picture:
            "https://clipartsworld.com/images/book-of-shadows-clipart-11.jpg",
          ISBN: 6
        }
      ]
    };
  }

  componentDidMount() {
    // make call to server to get information and modify state using setState
    const params = new URLSearchParams(window.location.search);

    fetch("http://34.71.147.72:80/author?" + params)
      .then(result => result.json())
      .then(data => {
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
        <Header title={this.state.authorName} />
        <br />
        <Description
          description={this.state.authorBio}
          image={this.state.authorPicture}
        />
        <Recommendations recommendations={this.state.bookRecommendations} />
      </React.Fragment>
    );
  }
}

export default Author;
