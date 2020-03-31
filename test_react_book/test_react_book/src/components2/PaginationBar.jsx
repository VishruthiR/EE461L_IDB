import React from "react";
//import Row from "react-bootstrap/Row";
//import Pagination from "react-bootstrap/Pagination";
import Pagination from "@material-ui/lab/Pagination";
import Grid from "@material-ui/core/Grid";

class PaginationBar extends React.Component {
  render() {
    let radius = 6;
    return (
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Pagination
            page={this.props.currentPage}
            siblingCount={radius}
            count={this.props.numPages}
            onChange={this.props.updatePage}
            style={{ justifyContent: "center" }}
          />
        </Grid>
      </Grid>
    );
  }
}

export default PaginationBar;
