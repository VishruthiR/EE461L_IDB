import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class AboutUsTeamStats extends React.Component {
    render() {
        const section = {
            height: "100%"
          };

        const numTheme = {
            color: "yellowgreen"
        };

        return (
        <Grid item xs={12} sm={4} md={4}>
          <Card style={section}>
            <CardHeader title="Team Stats" />
            <CardContent>
              <Grid container>
                <Typography variant="body2" color="textSecondary" component="p">
                  Total Commits:&nbsp;
                </Typography>
                <Typography variant="body2" component="p" style={numTheme}>
                  {this.props.totalcommits}
                </Typography>
              </Grid>
              <Grid container>
                <Typography variant="body2" color="textSecondary" component="p">
                  Total Issues:&nbsp;
                </Typography>
                <Typography variant="body2" component="p" style={numTheme}>
                  {this.props.totalissues}
                </Typography>
              </Grid>
              <Grid container>
                <Typography variant="body2" color="textSecondary" component="p">
                  Total Unit Tests:&nbsp;
                </Typography>
                <Typography variant="body2" component="p" style={numTheme}>
                  {this.props.totaltests}
                </Typography>
              </Grid>
            </CardContent>
          </Card>
        </Grid>);
    }
}

export default AboutUsTeamStats;
