import React from "react";
import Result from "./Result";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import PaginationBar from "./PaginationBar";
import ListItem from "@material-ui/core/ListItem";
import ScrollToTop from "./ScrollToTop";

class ResultsP extends React.Component {
  getDummyResults() {
    let results = [];
    for (let i = 0; i < 5; i++) {
      results.push({
        title: "And Then There Were None pg " + this.state.pageNum,
        author: "Agatha Christie",
        description:
          "Sed metus dui, dictum quis eleifend non, malesuada ut lorem. In finibus nulla quis efficitur rutrum. Aenean feugiat mauris magna, sollicitudin rhoncus mi sagittis vel. Quisque a sodales urna, eu volutpat metus. Phasellus vitae quam non enim auctor ornare vel et odio. Pellentesque tempus erat porttitor ex laoreet, eget iaculis leo ornare. Maecenas eu sapien ornare dolor suscipit facilisis. Nullam scelerisque, purus quis feugiat efficitur, lacus enim faucibus urna, eu ullamcorper metus odio et risus. Duis ac sem mauris. Praesent et porttitor mi, ut luctus metus. Mauris imperdiet condimentum purus, vitae mattis ligula feugiat at. Sed ut tellus ac arcu pharetra venenatis sed id risus. "
      });
    }
    return results;
  }

  constructor(props) {
    super(props);
    const queryString = new URLSearchParams(window.location.search);
    var type = queryString.get("type");
    var query = queryString.get("query");
    var page = queryString.get("pageNum");
    if (query == null) query = "";
    if (page == null) page = -1;
    this.state = {
      typeOfSearch: type,
      resultsQuery: query,
      pager: {},
      numPages: 0,
      reloadResults: false,
      results: []
    };
  }

  componentDidMount() {
    // make AJAX call based on query, needs to figure out number of pages server side, i think?
    this.loadResults();
  }

  componentDidUpdate() {
    // make AJAX call based on query, needs to figure out number of pages server side, i think?
    // this.loadResults();
  }

  loadResults() {
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("pageNum")) || 1;
    if (page !== this.state.pager.currentPage) {
      fetch("http://34.71.147.72:80/search?" + params, { method: "GET" })
        .then(response => response.json())
        .then(data => {
          console.log("hi");
          console.log(data);
          this.setState({ pager: data.pager });
          this.setState({ results: data.pageOfItems });
        });
    }
  }

  //rerenders page but with new pages information
  //this function might need to be passed into from results so we can rerender the page but maybe not

  nextPage = (event, newPageNum) => {
    console.log("updating page!");
    console.log(newPageNum);
    // this.setState({
    //   pager: { currentPage: newPageNum }
    // });
    let newUrl = new URLSearchParams(window.location.search);
    newUrl.set("pageNum", newPageNum);
    newUrl.set("query", this.state.resultsQuery);
    newUrl.set("type", this.state.typeOfSearch);
    this.props.history.push("/results?" + newUrl);
    this.loadResults();
    return;
  };

  fixGenreName(genre) {
    let newGenre = genre;
    if (newGenre === "scienceFiction") {
      newGenre = "Science Fiction";
    } else if (newGenre === "HistoricalFiction") {
      newGenre = "Historical Fiction";
    }
    return newGenre;
  }
  render() {
    //let results = this.getDummyResults();
    let listItems;
    if (this.state.typeOfSearch === "book") {
      listItems = this.state.results.map((result, index) => (
        <Link
          underline="none"
          component={RouterLink}
          to={
            "/" +
            this.state.typeOfSearch +
            "?isbn=" +
            result.volumeInfo.industryIdentifiers.identifier
          }
          key={index}
        >
          <ListItem>
            <Result
              title={result.volumeInfo.title}
              author={result.volumeInfo.authors}
              description={result.volumeInfo.description}
            />
          </ListItem>
        </Link>
      ));
    } else if (this.state.typeOfSearch === "author") {
      listItems = this.state.results.map((result, index) => (
        <Link
          underline="none"
          component={RouterLink}
          to={
            "/" +
            this.state.typeOfSearch +
            "?name=" +
            result.author.split(" ").join("+")
          }
          key={index}
        >
          <ListItem>
            <Result title={result.author} description={""} />
          </ListItem>
        </Link>
      ));
    } else if (this.state.typeOfSearch === "genre") {
      listItems = this.state.results.map((result, index) => (
        <Link
          underline="none"
          component={RouterLink}
          to={
            "/" +
            this.state.typeOfSearch +
            "?genre=" +
            result.genre.split(" ").join("+")
          }
          key={index}
        >
          <ListItem>
            <Result
              title={this.fixGenreName(result.genre)}
              description={result.description}
            />
          </ListItem>
        </Link>
      ));
    }
    return (
      <React.Fragment>
        <ScrollToTop />
        <List variant="flush">{listItems}</List>
        <PaginationBar
          currentPage={
            !isNaN(this.state.pager.currentPage)
              ? Number(this.state.pager.currentPage)
              : 1
          }
          numPages={this.state.pager.totalPages}
          updatePage={this.nextPage}
        />
      </React.Fragment>
    );
  }
}

export default ResultsP;
