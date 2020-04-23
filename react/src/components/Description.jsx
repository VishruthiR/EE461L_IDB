import React from "react";
import Typography from "@material-ui/core/Typography";

class Description extends React.Component {
  render() {
      
    return (
      <React.Fragment>
        <h1>{this.props.typeOfDescription}</h1>
        <Typography variant="h6" style={{ padding: 10 }}>
          {this.props.description}
        </Typography>
      </React.Fragment>
    );
  }
}

export default Description;
