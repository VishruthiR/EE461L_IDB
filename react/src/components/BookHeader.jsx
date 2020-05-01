import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Box from '@material-ui/core/Box';

class BookHeader extends React.Component {

  fixGenreName(genre) {
    let newGenre = genre;
    if (newGenre === "HistoricalFiction") {
      newGenre = "Historical Fiction";
    }
    return newGenre;
  }
  render() {
      return (
        <Grid container>
         <Grid item sm={8}>
            <Box display="flex" flexDirection="column">
              <Box display="flex">
                <Typography variant="h1">
                  {this.props.title}
                </Typography>
              </Box>
              <Box display="flex">
                <Link
                  underline="none"
                  component={RouterLink}
                  to={"/author?name=" + this.props.author.split(" ").join("+")}
                >
                  <Typography variant="h3">{this.props.author}</Typography>
                </Link>
              </Box>
              <Box display="flex">
                <Link
                  underline="none"
                  component={RouterLink}
                  to={"/genre?genre=" + this.props.genre.split(" ").join("+")}
                >
                  <Typography variant="h3">{this.fixGenreName(this.props.genre)}</Typography>
                </Link>
              </Box>
              <Box display="flex">
                <Typography variant="h5">
                  {"Publisher: " + this.props.publisher}
                </Typography>
              </Box>
              <Box display="flex">
                <Typography variant="h5">
                  {"Number of Pages: " + this.props.numPages}
                </Typography>
              </Box>
              <Box display="flex">
                <Typography variant="h5">
                  {"Average Rating: " + this.props.rating}
                </Typography>
              </Box>
              <Box display="flex">
                <Typography variant="h5">
                  {"Number of Ratings: " + this.props.numRatings}
                </Typography>
              </Box>
              <Box display="flex">
                <Typography variant="h5">
                  {"Published Date: " + this.props.publishedDate}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item sm={4}>
            <CardMedia
              component="img"
              image={this.props.image}
              alt={"No picture for this description"}
            ></CardMedia>
          </Grid>
        </Grid>
      );
  }
}

export default BookHeader;
