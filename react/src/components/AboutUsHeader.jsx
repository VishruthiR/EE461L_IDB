import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


class AboutUsHeader extends React.Component {
    render() {
        return (
        <Grid item xs={12} sm={5} md={12}>
            <Card>
              <CardContent>
                <h1>{this.props.header}</h1>
                <Typography variant="body2" color="textSecondary" component="p">
                  {this.props.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>);
    }
}

export default AboutUsHeader;
