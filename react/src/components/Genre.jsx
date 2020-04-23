import React from "react";
import Recommendations from "./Recommendations";
import Description from "./Description";
import GenreHeader from "./GenreHeader";
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
    fetch("http://34.71.147.72:80/genre?" + params, { method: "GET" })
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

    fetch("http://34.71.147.72:80/recbooks?" + params, { method: "GET" })
      .then(response => response.json())
      .then(data => {
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
  }

  render() {
    return (
      <React.Fragment>
        <GenreHeader genre={this.state.genreName} />
        <br />
        <Description
          description={this.state.genreDescription}
          image={this.state.genrePicture}
        />
        <Recommendations
          recommendations={this.state.bookRecommendations}
          typeOfRecommendation={"Recommended Books"}
        />
      </React.Fragment>
    );
  }
}

export default Genre;
