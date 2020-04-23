import React from "react";
import Result from "./Result";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import PaginationBar from "./PaginationBar";
import ListItem from "@material-ui/core/ListItem";
import ScrollToTop from "./ScrollToTop";
import CardActionArea from "@material-ui/core/CardActionArea";

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

  reformatArrayAsMatrix(arr, sizeOfRow) {
    let matrix = [];
    let i, j;
    for (i = 0; i < arr.length; i += sizeOfRow) {
      let rowMatrix = [];
      for (j = 0; j < sizeOfRow && i + j < arr.length; j++) {
        rowMatrix.push(arr[i + j]);
      }
      matrix.push(rowMatrix);
    }
    return matrix;
  }

  render() {
    //let results = this.getDummyResults();
    const numSearchResultsPerRow = 3;
    let formattedSearchResults = this.reformatArrayAsMatrix(
        this.state.results,
        numSearchResultsPerRow
    );
    let gridSearchResults;
    if (this.state.typeOfSearch === "book") {
        gridSearchResults = 
            <Grid item>
                {formattedSearchResults.map((resultRow, indexRow) => (
                    <Grid container spacing={1}>
                        {resultRow.map((resultCol, indexCol) => (
                            <Grid item xs={12/numSearchResultsPerRow}>
                                <Link
                                    underline="none"
                                    component={RouterLink}
                                    to={
                                    "/" +
                                    this.state.typeOfSearch +
                                    "?isbn=" +
                                    resultCol.volumeInfo.industryIdentifiers.identifier}
                                    key={indexRow*numSearchResultsPerRow + indexCol}
                                >
                                    <Result
                                        title={resultCol.volumeInfo.title}
                                        author={resultCol.volumeInfo.authors}
                                        description={resultCol.volumeInfo.description}
                                        image={resultCol.volumeInfo.imageLinks.thumbnail}
                                    />
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                ))}
            </Grid>
    } else if (this.state.typeOfSearch === "author") {
      gridSearchResults = 
        <Grid item>
            {formattedSearchResults.map((resultRow, indexRow) => (
                <Grid container spacing={1}>
                    {resultRow.map((resultCol, indexCol) => (
                        <Grid item xs={12/numSearchResultsPerRow}>
                            <Link
                                underline="none"
                                component={RouterLink}
                                to={
                                "/" +
                                this.state.typeOfSearch +
                                "?name=" +
                                resultCol.author.split(" ").join("+")}
                                key={indexRow*numSearchResultsPerRow + indexCol}
                            >
                                <Result
                                    title={resultCol.author}
                                    image={resultCol.imageLink}
                                />
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            ))}
        </Grid>
    } else if (this.state.typeOfSearch === "genre") {
      gridSearchResults = 
        <Grid item>
            {formattedSearchResults.map((resultRow, indexRow) => (
                <Grid container spacing={1}>
                    {resultRow.map((resultCol, indexCol) => (
                        <Grid item xs={12/numSearchResultsPerRow}>
                            <Link
                                underline="none"
                                component={RouterLink}
                                to={
                                "/" +
                                this.state.typeOfSearch +
                                "?genre=" +
                                resultCol.genre.split(" ").join("+")}
                                key={indexRow*numSearchResultsPerRow + indexCol}
                            >
                                <Result
                                    title={this.fixGenreName(resultCol.genre)}
                                    image={resultCol.image}
                                    description={resultCol.description}
                                />
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            ))}
        </Grid>
    }
   
   return (
      <React.Fragment>
        <ScrollToTop />
        <br></br>
        <Grid container spacing={1} direction='column'>
          {gridSearchResults}
        </Grid>
        <br></br>
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
