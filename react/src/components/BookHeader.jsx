import React from "react";
import Paper from "@material-ui/core/Paper";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

class BookHeader extends React.Component {
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
    return (
      <Paper style={{ padding: 20, fontSize: 36 }}>
        <div style={{ padding: 10 }}>
          <h1>{this.props.title}</h1>
          <Link
            underline="none"
            component={RouterLink}
            to={"/author?name=" + this.props.author.split(" ").join("+")}
          >
            <h3 style={{ lineHeight: 0 }}>{this.props.author}</h3>
          </Link>
          <Link
            underline="none"
            component={RouterLink}
            to={"/genre?genre=" + this.props.genre.split(" ").join("+")}
          >
            <h3 style={{ lineHeight: 0 }}>{this.fixGenreName(this.props.genre)}</h3>
          </Link>
          <h5 style={{ lineHeight: 0 }}>{this.props.publisher}</h5> 
          <h5 style={{ lineHeight: 0 }}>{this.props.numPages}</h5> 
          <h5 style={{ lineHeight: 0 }}>{this.props.rating}</h5> 
          <h5 style={{ lineHeight: 0 }}>{this.props.numRatings}</h5> 
          <h5 style={{ lineHeight: 0 }}>{this.props.publishedDate}</h5> 
        </div>
      </Paper>
    );
  }
}

export default BookHeader;
