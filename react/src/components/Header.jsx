import React from "react";
import Paper from "@material-ui/core/Paper";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

class Header extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item sm={8}>
          <Box display="flex" flexDirection="column">
            <Box display="flex">
              <Typography variant="h1">
                {this.props.title}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item sm={4}>
          <CardMedia
            component="img"
            image={this.props.image}
            alt={"No picture for this description"}
          ></CardMedia>
        </Grid>
      </Grid>
    );
  }
}

export default Header;
