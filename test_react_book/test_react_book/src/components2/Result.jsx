import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";

class Result extends React.Component {
  render() {
    let descriptionLength = 1000;
    let condDescription;
    if (typeof this.props.description === "undefined") {
      condDescription = "Sorry about that! No description is available";
    } else if (this.props.description !== "") {
      condDescription = this.props.description.substring(0, descriptionLength);
    }
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
            <Typography variant="h6">{condDescription}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}
export default Result;
