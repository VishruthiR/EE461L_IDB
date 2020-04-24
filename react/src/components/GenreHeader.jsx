import React from "react";
import Paper from "@material-ui/core/Paper";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Box from '@material-ui/core/Box';

class GenreHeader extends React.Component {
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
                  {this.props.genre}
                </Typography>
              </Box>
             <Box display="flex" justifyContent="flex-end">
                <Typography variant="h5">
                  {"Number of Books: " + this.props.numBooks}
                </Typography>
              </Box>
             <Box display="flex" justifyContent="flex-end">
                <Typography variant="h5">
                  {"Number of Authors: " + this.props.numAuthors}
                </Typography>
              </Box>
           </Box>
          </Grid>
        </Grid>
      );
  }

/*  render() {
    return (
      <Paper style={{ padding: 20, fontSize: 36 }}>
        <div style={{ padding: 10 }}>
          <h1>{this.props.genre}</h1>
        </div>
      </Paper>
    );
  }
*/
}

export default GenreHeader;
