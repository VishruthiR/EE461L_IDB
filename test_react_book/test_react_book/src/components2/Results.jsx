import React from "react";
import Result from "./Result";
import PaginationBar from "./PaginationBar";
//import ListGroup from "react-bootstrap/ListGroup";
//import Reviews from "./Reviews";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {
  BrowserRouter,
  Route,
  Link as RouterLink,
  Switch
} from "react-router-dom";
import Link from "@material-ui/core/Link";
import Book from "./Book";
import InnerResults from "./InnerResults";

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultsQuery: this.props.query
    };
  }

  componentDidMount() {
    // make AJAX call based on query
  }

  getDummyResults() {
    let results = [];
    for (let i = 0; i < 5; i++) {
      results.push(
        <Result
          type="book"
          title="And Then There Were None"
          author="Agatha Christie"
          description="Sed metus dui, dictum quis eleifend non, malesuada ut lorem. In finibus nulla quis efficitur rutrum. Aenean feugiat mauris magna, sollicitudin rhoncus mi sagittis vel. Quisque a sodales urna, eu volutpat metus. Phasellus vitae quam non enim auctor ornare vel et odio. Pellentesque tempus erat porttitor ex laoreet, eget iaculis leo ornare. Maecenas eu sapien ornare dolor suscipit facilisis. Nullam scelerisque, purus quis feugiat efficitur, lacus enim faucibus urna, eu ullamcorper metus odio et risus. Duis ac sem mauris. Praesent et porttitor mi, ut luctus metus. Mauris imperdiet condimentum purus, vitae mattis ligula feugiat at. Sed ut tellus ac arcu pharetra venenatis sed id risus. "
        />
      );
    }
    return results;
  }

  render() {
    let results = this.getDummyResults();
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/book"
            component={Book}
            render={props => <Book {...props} ISBN={1234} />}
          />
          <Route path="/author" component={Book} />
          <Route path="/genre" component={Book} />
          <Route
            path="/"
            render={props => <InnerResults {...props} results={results} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Results;
