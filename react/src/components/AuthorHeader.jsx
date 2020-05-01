import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Box from '@material-ui/core/Box';

class AuthorHeader extends React.Component {

  fixGenreName(genre) {
    let newGenre = genre;
    if (newGenre === "HistoricalFiction") {
      newGenre = "Historical Fiction";
    }
    return newGenre;
  }
 
  render() {
/*
    return (
      <Paper style={{ padding: 20, fontSize: 36 }}>
        <div style={{ padding: 10 }}>
          <h1>{this.props.author}</h1>
        </div>
      </Paper>
    );
*/
     return (
        <Grid container>
         <Grid item sm={8}>
            <Box display="flex" flexDirection="column">
              <Box display="flex">
                <Typography variant="h1">
                  {this.props.author}
                </Typography>
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

export default AuthorHeader;
