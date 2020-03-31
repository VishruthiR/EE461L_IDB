import React from "react";
import Paper from "@material-ui/core/Paper";

class Header extends React.Component {
  render() {
    return (
      <Paper style={{ padding: 20, fontSize: 36 }}>
        <div style={{ padding: 10 }}>
          <h1>{this.props.title}</h1>
          {typeof this.props.author !== "undefined" && (
            <h3 style={{ lineHeight: 0 }}>{this.props.author}</h3>
          )}
        </div>
      </Paper>
    );
  }
}

export default Header;
