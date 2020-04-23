import React from "react";
import Paper from "@material-ui/core/Paper";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

class AuthorHeader extends React.Component {
  render() {
    return (
      <Paper style={{ padding: 20, fontSize: 36 }}>
        <div style={{ padding: 10 }}>
          <h1>{this.props.author}</h1>
        </div>
      </Paper>
    );
  }
}

export default AuthorHeader;
