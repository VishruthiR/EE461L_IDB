import React from "react";
import Paper from "@material-ui/core/Paper";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

class Header extends React.Component {
  render() {
    return (
      <Paper style={{ padding: 20, fontSize: 36 }}>
        <div style={{ padding: 10 }}>
          <h1>{this.props.title}</h1>
          {typeof this.props.author !== "undefined" && (
            <Link
              underline="none"
              component={RouterLink}
              to={"/author?name=" + this.props.author.split(" ").join("+")}
            >
              <h3 style={{ lineHeight: 0 }}>{this.props.author}</h3>
            </Link>
          )}
        </div>
      </Paper>
    );
  }
}

export default Header;
