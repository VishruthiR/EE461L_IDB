import React from "react";
import Recommendations from "./Recommendations";
import Description from "./Description";
import Header from "./Header";
/*
props passed in should describe what author this Author is
not sure how to uniquely identify this
*/
class Genre extends React.Component {
  constructor(props) {
    super(props);
    const myQuery = new URLSearchParams(window.location.search);
    // setup state
    this.state = {
      genreName: myQuery.get("genre"),
      genrePicture:
        "https://clipartsworld.com/images/book-of-shadows-clipart-11.jpg",
      genreDescription:
        "Author Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque imperdiet urna ac suscipit tempus. In hac habitasse platea dictumst. Morbi id fermentum magna, ac blandit orci. Integer cursus molestie mi sit amet sodales. Donec eu efficitur sapien. Mauris vel sapien non arcu condimentum semper eget at magna. Curabitur blandit est vel justo varius efficitur sed ac urna. Ut ac mauris rhoncus, convallis nisi non, vestibulum ex. Duis porta in nisi sed dignissim. Maecenas nulla neque, facilisis vitae posuere nec, vehicula nec orci. In in quam tempus, mollis risus quis, interdum risus. Ut elit velit, interdum ac lectus at, ultricies porttitor sem. Etiam mattis enim ac tincidunt molestie. Sed pharetra, mauris eu scelerisque malesuada, ligula diam pulvinar urna, vitae tempus tellus est sed dui. Vestibulum luctus urna sem, elementum fermentum arcu aliquet sed. Aenean nec massa ex. Nam rhoncus consectetur risus sit amet volutpat. Nunc eu sem faucibus, dapibus urna id, dapibus felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent imperdiet vel nulla eget pulvinar. Sed lacus ligula, laoreet vel velit at, faucibus pretium tellus. Morbi ultrices sollicitudin purus, eget mattis velit condimentum eget. Donec ultricies tempus congue. Nam gravida odio sit amet augue pretium finibus. Nulla blandit elementum est vel accumsan. Donec pretium vehicula mauris. Nunc aliquam nec libero a fringilla. Quisque mattis, lectus non posuere pharetra, sapien libero posuere erat, quis fringilla erat tellus in quam. Aliquam rhoncus neque dui, nec lacinia enim vulputate vitae. Maecenas volutpat libero non purus mollis aliquet. Morbi commodo blandit sapien tristique tempus. Nunc euismod urna sed odio tincidunt, et ornare tellus maximus. Sed fermentum massa non aliquam faucibus. Mauris imperdiet tortor lacus, quis iaculis felis semper at. Donec sit amet arcu vel lorem tempus aliquam. Cras ut porttitor dolor. Sed pharetra metus eu laoreet consectetur. Maecenas vitae iaculis est. ",
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
    this.loadResults();
  }

  componentDidUpdate() {}

  loadResults() {
    const params = new URLSearchParams(window.location.search);
    console.log(params.get("genre"));
    fetch("http://34.71.147.72:80/genre?" + params, { method: "GET" })
      .then(response => response.json())
      .then(data => {
        console.log("hi");
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
        <Header title={this.state.genreName} />
        <br />
        <Description
          description={this.state.genreDescription}
          image={this.state.genrePicture}
        />
        <Recommendations recommendations={this.state.bookRecommendations} />
      </React.Fragment>
    );
  }
}

export default Genre;
