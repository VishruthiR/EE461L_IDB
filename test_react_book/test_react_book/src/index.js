import React from "react";
import ReactDOM from "react-dom";
import BookInfo from "./components/BookInfo";
import Summary from "./components/Summary";
import Rating from "./components/Rating";
import Reviews from "./components/Reviews";
import Recommendations from "./components/Recommendations";
import Book from "./components2/Book";
import Results from "./components2/Results";
import Description from "./components2/Description";

/*
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BookInfo />
        <hr></hr>
        <Summary />
        <hr></hr>
        <Recommendations />
        <hr></hr>
        <Rating />
        <hr></hr>
        <Reviews />
      </React.Fragment>
    );
  }
}
*/
/*
class App extends React.Component {
  render() {
    return <Book />;
  }
}
*/

class App extends React.Component {
  render() {
    return <Results />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
