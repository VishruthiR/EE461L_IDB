import React from "react";
import Description from "./Description";
import GenreHeader from "./GenreHeader";
import RecommendationCarousel from "./RecommendationCarousel";
/*
props passed in should describe what author this Author is
not sure how to uniquely identify this
*/
class Genre extends React.Component {
  constructor(props) {
    super(props);
    // setup state
    this.state = {
      genreName: "",
      genrePicture: "",
      genreDescription: "",
      numBooksGenre: 0,
      numAuthorsGenre: 0,
      authorRecommendation: [],
      bookRecommendations: []
    };
  }

  componentDidMount() {
    // make call to server to get information and modify state using setState
    this.loadResults();
  }

  componentDidUpdate() {}

  loadResults() {
    const params = new URLSearchParams(window.location.search);
    console.log(params.get("genre"));
    fetch("http://35.239.85.230/genre?" + params, { method: "GET" })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        let genre = data.genre;
        if (genre === "scienceFiction") {
          genre = "Science Fiction";
        } else if (genre === "HistoricalFiction") {
          genre = "Historical Fiction";
        }
        this.setState({
          genreName: genre,
          genreDescription: data.description,
          genrePicture: data.image
        });
      });

    fetch("http://35.239.85.230/recBooks?" + params, { method: "GET" })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        var recommendations = [];
        var i;
        for (i = 0; i < data.list.length; i++) {
          recommendations.push({
            picture: data.list[i].volumeInfo.imageLinks.thumbnail,
            ISBN: data.list[i].volumeInfo.industryIdentifiers.identifier,
            author: data.list[i].volumeInfo.authors,
            title: data.list[i].volumeInfo.title
          });
        }
        var authorRecs = [];
        for (i = 0; i < data.auth.length; i++) {
          authorRecs.push({
            picture: data.auth[i].imageLink,
            author: data.auth[i].author
          });
        }
        console.log("recommendations");
        console.log(recommendations);
        console.log("authorRecs");
        console.log(authorRecs);
        this.setState({ bookRecommendations: recommendations });
        this.setState({ authorRecommendation: authorRecs });
      });
  }

  render() {
    return (
      <React.Fragment>
        <GenreHeader genre={this.state.genreName} image={this.state.genrePicture} numBooks={this.state.numBooksGenre} numAuthors={this.state.numAuthorsGenre} />
        <br />
        <Description
          typeOfDescription="Genre Description" 
          description={this.state.genreDescription}
        />
        <RecommendationCarousel
          recommendations={this.state.authorRecommendation}
          typeOfRecommendation={"Recommended Authors"}
          type={"Author"}
        />
        <RecommendationCarousel
          recommendations={this.state.bookRecommendations}
          typeOfRecommendation={"Books by this author"}
          type={"Book"}
        />
      </React.Fragment>
    );
  }
}

export default Genre;
