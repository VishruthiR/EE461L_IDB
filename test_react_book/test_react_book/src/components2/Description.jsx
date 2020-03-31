import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";

class Description extends React.Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Grid container>
            <Grid item sm={2} container>
              <CardMedia
                component="img"
                height="250"
                image={this.props.image}
                alt={"No picture for this description"}
              ></CardMedia>
            </Grid>
            <Grid item sm={10}>
              <Typography variant="h6" style={{ padding: 10 }}>
                {this.props.description}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default Description;
