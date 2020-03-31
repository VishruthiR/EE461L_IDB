import React from "react";
//import Card from "react-bootstrap/Card";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";

class Result extends React.Component {
  /*
  render() {
    let descriptionLength = 1000;
    return (
      <Card>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Subtitle>{this.props.author}</Card.Subtitle>
          <Card.Text>
            {this.props.description.substring(0, descriptionLength)}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
  */
  render() {
    let descriptionLength = 1000;
    return (
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography variant="h3">{this.props.title}</Typography>
            {typeof this.props.author !== "undefined" && (
              <Typography variant="h5" gutterBottom>
                {this.props.author}
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}
export default Result;
