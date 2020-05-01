import React from "react";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-material-ui-carousel";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";

class BookRecommendations extends React.Component {
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
    const img_alt_text = "Default";
    const numImgsPerCarousel = 3; // must divide 12, since that is gridsize number
    let formattedRecommendations = this.reformatArrayAsMatrix(
      this.props.recommendations,
      numImgsPerCarousel
    );
    return (
      <React.Fragment>
        <h1>{this.props.typeOfRecommendation}</h1>
        <Carousel animation="slide" autoPlay={false}>
          {formattedRecommendations.map((recommendationRow, indexRow) => (
            <Grid container spacing={1}>
              {recommendationRow.map((recommendationCol, indexCol) => (
                <Grid item xs={12 / numImgsPerCarousel}>
                  <Box display="flex" flexDirection="column">
                    <Box>
                      <Link
                        underline="none"
                        component={RouterLink}
                        to={"/book?isbn=" + recommendationCol["ISBN"]}
                      >
                        <CardMedia
                          component="img"
                          height="550"
                          image={recommendationCol["picture"]}
                          alt={
                            img_alt_text +
                            (indexRow * numImgsPerCarousel + indexCol).toString()
                          }
                        ></CardMedia>
                      </Link>                   
                   </Box>
                   <Box display="flex">
                      <Link
                        underline="none"
                        component={RouterLink}
                        to={"/book?isbn=" + recommendationCol["ISBN"]}
                      >
                        <Typography variant="h5">
                          {recommendationCol["title"]}
                        </Typography>
                      </Link>
                    </Box>
                   <Box display="flex">
                      <Link
                        underline="none"
                        component={RouterLink}
                        to={"/author?name=" + recommendationCol["author"].split(" ").join("+")}
                      >
                        <Typography variant="h5">
                          {recommendationCol["author"]}
                        </Typography>
                      </Link>
                    </Box>
                 </Box>
                </Grid>
              ))}
            </Grid>
          ))}
        </Carousel>
      </React.Fragment>
    );
  }
}

export default BookRecommendations;
