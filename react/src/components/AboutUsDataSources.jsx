import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class AboutUsDataSources extends React.Component {
    render() {
        const section = {
            height: "100%"
        };

        return (<Grid item xs={12} sm={4} md={4}>
            <Card style={section}>
              <CardHeader title="Data Sources"/>
              <CardContent>
                <Typography variant="h5" component="h2">
                  <a href="https://developers.google.com/books">
                    Google Books API
                  </a>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Used to grab basic information of books
                </Typography>
                <Typography variant="h5" component="h2">
                  <a href="https://www.goodreads.com/api">Goodreads</a>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Used to grab additonal information regarding books as well as
                  rating information
                </Typography>
                <Typography variant="h5" component="h2">
                  <a href="https://isbndb.com/apidocs"> ISBN DB</a>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Used to grab ISBN information for books
                </Typography>
                <Typography variant="h5" component="h2">
                  <a href="https://developer.github.com/v3/">Github API</a>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Used to grab team members information and stats
                </Typography>
              </CardContent>
            </Card>
          </Grid>);
    }
}

export default AboutUsDataSources;
