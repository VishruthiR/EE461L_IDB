import React from "react";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import PaginationBar from "./PaginationBar";
import ListItem from "@material-ui/core/ListItem";
import { Link as RouterLink } from "react-router-dom";
class InnerResults extends React.Component {
  render() {
    return (
      <React.Fragment>
        <List variant="flush">
          {this.props.results.map((result, index) => (
            <Link underline="none" component={RouterLink} to={"/book/1234"}>
              <ListItem>{result}</ListItem>
            </Link>
          ))}
        </List>
        <PaginationBar currentPage={7} numPages={20} />
      </React.Fragment>
    );
  }
}

export default InnerResults;
