import React from "react";
import Result from "./Result";
//import Reviews from "./Reviews";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import PaginationBar from "./PaginationBar";
import ListItem from "@material-ui/core/ListItem";

/*
we want to migrate all the routing code here into the HomePage component and then everything can just link back
*/

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeOfSearch: this.props.match.params.type,
      resultsQuery: this.props.match.params.query,
      pageNum: this.props.match.params.pageNum
    };
  }

  static getDerivedStateFromProps(props) {
    // make AJAX call based on query
    console.log("results ajax call");
    return {
      typeOfSearch: props.match.params.type,
      resultsQuery: props.match.params.query,
      pageNum: props.match.params.pageNum
    };
  }

  getDummyResults() {
    let results = [];
    for (let i = 0; i < 5; i++) {
      results.push({
        id: i,
        type: "book",
        title: "And Then There Were None",
        author: "Agatha Christie",
        description:
          "Sed metus dui, dictum quis eleifend non, malesuada ut lorem. In finibus nulla quis efficitur rutrum. Aenean feugiat mauris magna, sollicitudin rhoncus mi sagittis vel. Quisque a sodales urna, eu volutpat metus. Phasellus vitae quam non enim auctor ornare vel et odio. Pellentesque tempus erat porttitor ex laoreet, eget iaculis leo ornare. Maecenas eu sapien ornare dolor suscipit facilisis. Nullam scelerisque, purus quis feugiat efficitur, lacus enim faucibus urna, eu ullamcorper metus odio et risus. Duis ac sem mauris. Praesent et porttitor mi, ut luctus metus. Mauris imperdiet condimentum purus, vitae mattis ligula feugiat at. Sed ut tellus ac arcu pharetra venenatis sed id risus. "
      });
    }
    return results;
  }

  render() {
    console.log("in results");
    console.log(this.state.typeOfSearch);
    console.log(this.state.resultsQuery);
    let results = this.getDummyResults();
    return (
      <React.Fragment>
        <List variant="flush">
          {results.map((result, index) => (
            <Link
              underline="none"
              component={RouterLink}
              to={"/book/1234"}
              key={result.id}
            >
              <ListItem>
                <Result
                  type={result.type}
                  title={result.title}
                  author={result.author}
                  description={result.description}
                />
              </ListItem>
            </Link>
          ))}
        </List>
        <PaginationBar currentPage={this.state.pageNum} numPages={20} />
      </React.Fragment>
    );
  }
}

export default Results;
