import React from "react";
//import Row from "react-bootstrap/Row";
//import Pagination from "react-bootstrap/Pagination";
import Pagination from "@material-ui/lab/Pagination";
import Grid from "@material-ui/core/Grid";

class PaginationBar extends React.Component {
  /*
  generateSurroundingIndicies(currIndex, size, radius) {
    let items = [];
    items.push(<Pagination.Prev />);
    let start;
    let end;
    if (currIndex < radius || currIndex > size) {
      // don't have enough indicies to the left to center or currIndex out of range
      start = 1;
      end = radius * 2 - 1;
    } else if (currIndex + radius - 1 > size) {
      // don't have enough indicies to the right to center
      start = currIndex - (radius * 2 - 2 - (size - currIndex));
      end = size;
    } else {
      // have enough indicies to center
      start = currIndex - radius + 1;
      end = currIndex + radius - 1;
    }

    for (let index = start; index <= end; index++) {
      items.push(
        <Pagination.Item key={index} active={index === currIndex}>
          {index}
        </Pagination.Item>
        );
    }

    items.push(<Pagination.Next />);
    return items;
  }
 */

  /*
  rerenders page but with new pages information
  this function might need to be passed into from results so we can rerender the page but maybe not
  */
  nextPage(event, pageNum) {
    console.log(pageNum);
  }

  render() {
    /*
    let radius = 6;
    let pages = this.generateSurroundingIndicies(
      this.props.currentPage,
      this.props.numPages,
      radius
    );
    return (
      <Row className="justify-content-md-center">
        <Pagination>{pages}</Pagination>
      </Row>
    );
    */
    let radius = 6;
    return (
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <Pagination
            page={this.props.currentPage}
            siblingCount={radius}
            count={this.props.numPages}
            onChange={this.nextPage}
            style={{ justifyContent: "center" }}
          />
        </Grid>
      </Grid>
    );
  }
}

export default PaginationBar;
