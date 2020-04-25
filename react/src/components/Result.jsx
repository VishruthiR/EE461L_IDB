import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

class Result extends React.Component {
  render() {
    let descriptionLength = 150;
    const section = {
        height: "100%"
    };
    return (
/*
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image={this.props.image}
            title={this.props.title}
          />
          <CardContent>
            <Typography variant="h3">{this.props.title}</Typography>
              {typeof this.props.author !== "undefined" && (
                <Typography variant="h5" gutterBottom>
                  {this.props.author}
                </Typography>
              )}
              {typeof this.props.description!== "undefined" && (
                <Typography variant="h5" gutterBottom>
                  {this.props.description.substring(0, descriptionLength) + "..."}
                </Typography>
              )}               
          </CardContent>
        </CardActionArea>
      </Card>
*/
      <Card style={section}>
        <CardActionArea style={section}>
          <CardMedia
            component="img"
            image={this.props.image}
            title={this.props.title}
          />
          <CardContent>
            <Typography variant="h3">{this.props.title}</Typography>
              {typeof this.props.author !== "undefined" && (
                <Typography variant="h5" gutterBottom>
                  {this.props.author}
                </Typography>
              )}
              {typeof this.props.description!== "undefined" && (
                <Typography variant="h5" gutterBottom>
                  {this.props.description.substring(0, descriptionLength) + "..."}
                </Typography>
              )}               
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}
export default Result;
