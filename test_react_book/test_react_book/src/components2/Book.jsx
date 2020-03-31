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
    const myQuery = new URLSearchParams(window.location.search);
    // setup state
    this.state = {
      bookISBN: myQuery.get("isbn"), //this.props.match.params.ISBN,
      bookGenre: "default genre",
      bookTitle: "default book title",
      bookCover:
        "https://clipartsworld.com/images/book-of-shadows-clipart-11.jpg",
      authorName: "default author name",
      bookSummary:
        "Book Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque imperdiet urna ac suscipit tempus. In hac habitasse platea dictumst. Morbi id fermentum magna, ac blandit orci. Integer cursus molestie mi sit amet sodales. Donec eu efficitur sapien. Mauris vel sapien non arcu condimentum semper eget at magna. Curabitur blandit est vel justo varius efficitur sed ac urna. Ut ac mauris rhoncus, convallis nisi non, vestibulum ex. Duis porta in nisi sed dignissim. Maecenas nulla neque, facilisis vitae posuere nec, vehicula nec orci. In in quam tempus, mollis risus quis, interdum risus. Ut elit velit, interdum ac lectus at, ultricies porttitor sem. Etiam mattis enim ac tincidunt molestie. Sed pharetra, mauris eu scelerisque malesuada, ligula diam pulvinar urna, vitae tempus tellus est sed dui. Vestibulum luctus urna sem, elementum fermentum arcu aliquet sed. Aenean nec massa ex. Nam rhoncus consectetur risus sit amet volutpat. Nunc eu sem faucibus, dapibus urna id, dapibus felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent imperdiet vel nulla eget pulvinar. Sed lacus ligula, laoreet vel velit at, faucibus pretium tellus. Morbi ultrices sollicitudin purus, eget mattis velit condimentum eget. Donec ultricies tempus congue. Nam gravida odio sit amet augue pretium finibus. Nulla blandit elementum est vel accumsan. Donec pretium vehicula mauris. Nunc aliquam nec libero a fringilla. Quisque mattis, lectus non posuere pharetra, sapien libero posuere erat, quis fringilla erat tellus in quam. Aliquam rhoncus neque dui, nec lacinia enim vulputate vitae. Maecenas volutpat libero non purus mollis aliquet. Morbi commodo blandit sapien tristique tempus. Nunc euismod urna sed odio tincidunt, et ornare tellus maximus. Sed fermentum massa non aliquam faucibus. Mauris imperdiet tortor lacus, quis iaculis felis semper at. Donec sit amet arcu vel lorem tempus aliquam. Cras ut porttitor dolor. Sed pharetra metus eu laoreet consectetur. Maecenas vitae iaculis est. ",
      bookRecommendations: [
        {
          picture:
            "https://books.google.com/books/content?id=dLo_GyEykjQC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
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
    console.log("in did mount modifying state");
    this.loadResults();
  }

  loadResults() {
    const params = new URLSearchParams(window.location.search);
    fetch("http://34.71.147.72:80/book?isbn=" + this.state.bookISBN)
      .then(result => result.json())
      .then(result => {
        this.setState({
          bookTitle: result.volumeInfo.title,
          bookCover: result.volumeInfo.imageLinks.thumbnail,
          bookSummary: result.volumeInfo.description,
          authorName: result.volumeInfo.authors,
          bookGenre: result.volumeInfo.genre
        });
        fetch("http://34.71.147.72:80/recBooks?genre=" + result.volumeInfo.genre)
        .then(response => response.json())
        .then(data => {
          console.log("hi");
          console.log(data);
          var recommendations = [];
          for(var i = 0; i < 9; i++){
            recommendations.push({
              picture: data[i].volumeInfo.imageLinks.thumbnail,
              ISBN: data[i].volumeInfo.industryIdentifiers.identifier
            })
          }
          this.setState({bookRecommendations: recommendations});
        });
      });
  }


  componentDidUpdate() {
    console.log("book ajax call update");
  }

  render() {
    console.log("in books");
    console.log(this.state.bookISBN);
    return (
      <React.Fragment>
        <Header title={this.state.bookTitle} author={this.state.authorName} />
        <Description
          description={this.state.bookSummary}
          image={this.state.bookCover}
        />
        <Recommendations recommendations={this.state.bookRecommendations} />
        {/*<Reviews />*/}
      </React.Fragment>
    );
  }
}

export default Book;
