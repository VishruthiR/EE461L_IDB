import React from "react";
import Paper from "@material-ui/core/Paper";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Box from '@material-ui/core/Box';

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
        <Grid container>
          <Grid item sm={4}>
            <CardMedia
              component="img"
              image={this.props.image}
              alt={"No picture for this description"}
            ></CardMedia>
          </Grid>
          <Grid item sm={8}>
            <Box display="flex" flexDirection="column">
              <Box display="flex" justifyContent="flex-end">
                <Typography variant="h1" style={{ padding: 10 }}>
                  {this.props.title}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Link
                  underline="none"
                  component={RouterLink}
                  to={"/author?name=" + this.props.author.split(" ").join("+")}
                >
                  <Typography variant="h3">{this.props.author}</Typography>
                </Link>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Link
                  underline="none"
                  component={RouterLink}
                  to={"/genre?genre=" + this.props.genre.split(" ").join("+")}
                >
                  <Typography variant="h3">{this.fixGenreName(this.props.genre)}</Typography>
                </Link>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Typography variant="h5" style={{ padding: 10 }}>
                  {"Publisher: " + this.props.publisher}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Typography variant="h5" style={{ padding: 10 }}>
                  {"Number of Pages: " + this.props.numPages}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Typography variant="h5" style={{ padding: 10 }}>
                  {"Average Rating: " + this.props.rating}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Typography variant="h5" style={{ padding: 10 }}>
                  {"Number of Ratings: " + this.props.numRatings}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Typography variant="h5" style={{ padding: 10 }}>
                  {"Published Date: " + this.props.publishedDate}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      );
/* 
    return (
      <Paper style={{ padding: 20, fontSize: 36 }}>
        <div style={{ padding: 10 }}>
          <h1>{this.props.title}</h1>
          <Link
            underline="none"
            component={RouterLink}
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
*/
  }
}

export default BookHeader;
