import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class Description extends React.Component {
  render() {
    return (
      <Card>
        <CardContent>
          <Typography variant="h6">{this.props.description}</Typography>
        </CardContent>
      </Card>
    );
  }
}
export default Description;
