import React from "react";
import Result from "./Result";
import { Link as RouterLink, Redirect } from "react-router-dom";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import PaginationBar from "./PaginationBar";
import ListItem from "@material-ui/core/ListItem";
/*
const Results = props => {
  let res = [];
  for (let i = 0; i < 5; i++) {
    res.push({
      title: "And Then There Were None",
      author: "Agatha Christie",
      description:
        "Sed metus dui, dictum quis eleifend non, malesuada ut lorem. In finibus nulla quis efficitur rutrum. Aenean feugiat mauris magna, sollicitudin rhoncus mi sagittis vel. Quisque a sodales urna, eu volutpat metus. Phasellus vitae quam non enim auctor ornare vel et odio. Pellentesque tempus erat porttitor ex laoreet, eget iaculis leo ornare. Maecenas eu sapien ornare dolor suscipit facilisis. Nullam scelerisque, purus quis feugiat efficitur, lacus enim faucibus urna, eu ullamcorper metus odio et risus. Duis ac sem mauris. Praesent et porttitor mi, ut luctus metus. Mauris imperdiet condimentum purus, vitae mattis ligula feugiat at. Sed ut tellus ac arcu pharetra venenatis sed id risus. "
    });
  }

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(
    !isNaN(props.match.params.pageNum) ? Number(props.match.params.pageNum) : 1
  );
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [typeOfSearch] = useState(props.match.params.type);
  const [resultsQuery] = useState(props.match.params.query);

  useEffect(() => {
    const getResults = async () => {
      setLoading(true);
      // do call here
      setLoading(false);
      setResults(res);
    };

    getResults();
  }, [currentPage, res]);

  //rerenders page but with new pages information
  //this function might need to be passed into from results so we can rerender the page but maybe not

  const nextPage = (event, newPageNum) => {
    console.log("updating page!");
    console.log(newPageNum);
    setCurrentPage(newPageNum);
  };

  return (
    <React.Fragment>
      <List variant="flush">
        {results.map((result, index) => (
          <Link
            underline="none"
            component={RouterLink}
            to={"/book/1234"}
            key={index}
          >
            <ListItem>
              <Result
                title={result.title}
                author={result.author}
                description={result.description}
              />
            </ListItem>
          </Link>
        ))}
      </List>
      <PaginationBar
        currentPage={currentPage}
        numPages={20}
        updatePage={nextPage}
      />
    </React.Fragment>
  );
};

export default Results;
*/

class ResultsP extends React.Component {
  getDummyResults() {
    let results = [];
    for (let i = 0; i < 5; i++) {
      results.push({
        title: "And Then There Were None",
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
    this.state = {
      typeOfSearch: queryString.get("type"),
      resultsQuery: queryString.get("query"),
      pageNum: queryString.get("page"),
      numPages: 100,
      reloadResults: false
    };
  }

  componentDidMount() {
    // make AJAX call based on query, needs to figure out number of pages server side, i think?
    console.log("results ajax call first time");
  }

  componentDidUpdate() {
    // make AJAX call based on query, needs to figure out number of pages server side, i think?
    console.log("results ajax call update");
  }

  //rerenders page but with new pages information
  //this function might need to be passed into from results so we can rerender the page but maybe not

  nextPage = (event, newPageNum) => {
    console.log("updating page!");
    console.log(newPageNum);
    this.setState({
      pageNum: newPageNum
    });
    let newUrl = new URLSearchParams(window.location.search);
	newUrl.set("pageNum", newPageNum);
	window.location.replace("/results"+newUrl);
    return;
  };

  render() {
    console.log("in results");
    console.log(this.state.typeOfSearch);
    console.log(this.state.resultsQuery);
    console.log(this.state.pageNum);
    let results = this.getDummyResults();
    return (
      <React.Fragment>
        <List variant="flush">
          {results.map((result, index) => (
            <Link
              underline="none"
              component={RouterLink}
              to={"/book/1234"}
              key={index}
            >
              <ListItem>
                <Result
                  title={result.title}
                  author={result.author}
                  description={result.description}
                />
              </ListItem>
            </Link>
          ))}
        </List>
        <PaginationBar
          currentPage={
            !isNaN(this.state.pageNum) ? Number(this.state.pageNum) : 1
          }
          numPages={this.state.numPages}
          updatePage={this.nextPage}
        />
      </React.Fragment>
    );
  }
}

export default ResultsP;
