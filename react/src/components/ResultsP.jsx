import React from "react";
import Result from "./Result";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import PaginationBar from "./PaginationBar";
import ScrollToTop from "./ScrollToTop";
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

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
    var sort = queryString.get("sort");
    console.log("sort");
    console.log(sort);
    var ord = queryString.get("ord");
    if (query == null) query = "";
    if (page == null) page = -1;
    if (sort == null) sort = type;
    if (ord == null) ord = 1;
    this.state = {
      typeOfSearch: type,
      resultsQuery: query,
      sort: sort,
      order: ord,
      pager: {},
      numPages: 0,
      reloadResults: false,
      results: [],
      loaded: "false",
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
    console.log("called loadResults()");
//    this.setState({loaded: "false"});
    const params = new URLSearchParams(window.location.search);
    const page = parseInt(params.get("pageNum")) || 1;
    const sort = params.get("sort");
    const ord = params.get("ord");
    console.log("params start");
    console.log(page);
    console.log(sort);
    console.log(ord);
    console.log("params end");
    if (page !== this.state.pager.currentPage || sort !== this.state.sort || ord !== this.state.order) {
      this.setState({loaded: "false"});
      fetch("http://35.239.85.230/search?" + params, { method: "GET" })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          if(data.val !== undefined) {
            let pageOfItems = data.pageOfItems;
            for(let i = 0; i<pageOfItems.length; i++) {
              pageOfItems[i].genre = data.val[i].genre;
            }
          }
          this.setState({ pager: data.pager });
          this.setState({ results: data.pageOfItems });
          this.setState({loaded: "true"});
          if(data.val !== undefined) {
            this.setState({extraAuthorInfo: data.val});
          }
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
    newUrl.set("sort", this.state.sort);
    newUrl.set("ord", this.state.order);
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
            <Grid item xs={12}>
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
        <Grid item xs={12}>
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
                                    author={this.fixGenreName(resultCol.genre)}
                                />
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            ))}
        </Grid>
    } else if (this.state.typeOfSearch === "genre") {
      gridSearchResults = 
        <Grid item xs={12}>
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

    const handleSort = (event) =>{
      let newUrl = new URLSearchParams(window.location.search);
      newUrl.set("pageNum", 1);
      newUrl.set("query", this.state.resultsQuery);
      newUrl.set("type", this.state.typeOfSearch);
      newUrl.set("sort", event.target.value);
      newUrl.set("ord", this.state.order);
      this.props.history.push("/results?" + newUrl);
      this.setState({
        sort: event.target.value,
	  });
      this.loadResults();
    };
    const handleOrder = (event) =>{
      let newUrl = new URLSearchParams(window.location.search);
      newUrl.set("pageNum", 1);
      newUrl.set("query", this.state.resultsQuery);
      newUrl.set("type", this.state.typeOfSearch);
      newUrl.set("sort", this.state.sort);
      newUrl.set("ord", event.target.value);
      this.props.history.push("/results?" + newUrl);
      this.setState({
        order: event.target.value,
	  });
      this.loadResults();
    };
    let content;
    if(this.state.loaded === "true") {
      content = (
          <Grid container spacing={1}>
            {gridSearchResults}
            <Grid container direction="column" alignItems="center">
              <Grid item>
                <PaginationBar
                  currentPage={
                  !isNaN(this.state.pager.currentPage)
                  ? Number(this.state.pager.currentPage)
                  : 1
                  }
                  numPages={this.state.pager.totalPages}
                  updatePage={this.nextPage}
                />
              </Grid>
            </Grid>
          </Grid>
      );
    }
    if(this.state.loaded === "false") {
      content = (
         <Box display="flex" justifyContent="center">
           <CircularProgress/>
        </Box>
      );
    }
    return (
      <React.Fragment>
        <ScrollToTop />
        <br/>
        <Paper>
            <Typography> 
                Searching through {this.state.typeOfSearch}s for "{this.state.resultsQuery}": 
                <br/>
                {this.state.pager.totalItems} results found.
                <br/>
            </Typography>
            <InputLabel htmlFor="sort-select"> Sort by: </InputLabel>
            <Box component="div" display={(this.state.typeOfSearch === "book")?"inline":"none"}>
                <Select
                    value = {this.state.sort}
                    onChange={handleSort}
                    inputProps={{
                    id: 'sort-select',        
			        }}
                >
                    <option value={"author"}>Author</option>
                    <option value={"date"}>Date</option>
                    <option value={"book"}>Book</option>
                </Select>
            </Box>
            <Select
            value = {this.state.order}
            onChange={handleOrder}
            inputProps={{
                id: 'order-select',        
		    }}
            >
              <option value={"1"}>Ascending</option>
              <option value={"-1"}>Descending</option>
            </Select>
        </Paper>
        <br/>
        {content}
      </React.Fragment>
    );

  }
}

export default ResultsP;
