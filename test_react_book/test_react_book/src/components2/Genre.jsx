import React from "react";
import Recommendations from "./Recommendations";
import Description from "./Description";
/*
props passed in should describe what author this Author is
not sure how to uniquely identify this
*/
class Genre extends React.Component {
  constructor(props) {
    super(props);
    // setup state
    this.state = {
      genreName: this.props.match.params.name,
      genrePic:
        "https://clipartsworld.com/images/book-of-shadows-clipart-11.jpg",
      genreDescription:
        "Author Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque imperdiet urna ac suscipit tempus. In hac habitasse platea dictumst. Morbi id fermentum magna, ac blandit orci. Integer cursus molestie mi sit amet sodales. Donec eu efficitur sapien. Mauris vel sapien non arcu condimentum semper eget at magna. Curabitur blandit est vel justo varius efficitur sed ac urna. Ut ac mauris rhoncus, convallis nisi non, vestibulum ex. Duis porta in nisi sed dignissim. Maecenas nulla neque, facilisis vitae posuere nec, vehicula nec orci. In in quam tempus, mollis risus quis, interdum risus. Ut elit velit, interdum ac lectus at, ultricies porttitor sem. Etiam mattis enim ac tincidunt molestie. Sed pharetra, mauris eu scelerisque malesuada, ligula diam pulvinar urna, vitae tempus tellus est sed dui. Vestibulum luctus urna sem, elementum fermentum arcu aliquet sed. Aenean nec massa ex. Nam rhoncus consectetur risus sit amet volutpat. Nunc eu sem faucibus, dapibus urna id, dapibus felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent imperdiet vel nulla eget pulvinar. Sed lacus ligula, laoreet vel velit at, faucibus pretium tellus. Morbi ultrices sollicitudin purus, eget mattis velit condimentum eget. Donec ultricies tempus congue. Nam gravida odio sit amet augue pretium finibus. Nulla blandit elementum est vel accumsan. Donec pretium vehicula mauris. Nunc aliquam nec libero a fringilla. Quisque mattis, lectus non posuere pharetra, sapien libero posuere erat, quis fringilla erat tellus in quam. Aliquam rhoncus neque dui, nec lacinia enim vulputate vitae. Maecenas volutpat libero non purus mollis aliquet. Morbi commodo blandit sapien tristique tempus. Nunc euismod urna sed odio tincidunt, et ornare tellus maximus. Sed fermentum massa non aliquam faucibus. Mauris imperdiet tortor lacus, quis iaculis felis semper at. Donec sit amet arcu vel lorem tempus aliquam. Cras ut porttitor dolor. Sed pharetra metus eu laoreet consectetur. Maecenas vitae iaculis est. ",
      bookRecommendations: [
        "https://clipartsworld.com/images/book-of-shadows-clipart-11.jpg",
        "https://clipartsworld.com/images/book-of-shadows-clipart-11.jpg",
        "https://clipartsworld.com/images/book-of-shadows-clipart-11.jpg",
        "https://clipartsworld.com/images/book-of-shadows-clipart-11.jpg",
        "https://clipartsworld.com/images/book-of-shadows-clipart-11.jpg",
        "https://clipartsworld.com/images/book-of-shadows-clipart-11.jpg"
      ]
    };
  }

  componentDidMount() {
    // make call to server to get information and modify state using setState
  }

  render() {
    console.log(this.state.genreName);
    return (
      <React.Fragment>
        {/*<Header />*/}
        <Description description={this.state.genreDescription} />
        <Recommendations recommendations={this.state.bookRecommendations} />
      </React.Fragment>
    );
  }
}

export default Genre;
