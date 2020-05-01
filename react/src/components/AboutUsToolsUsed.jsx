import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class AboutUsToolsUsed extends React.Component {
    render() {
        const section = {
            height: "100%"
        };

        return (<Grid item xs={12} sm={4} md={4}>
            <Card style={section}>
              <CardHeader title="Tools Used" />
              <CardContent>
                <Typography variant="h5" component="h2">
                  React
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Used to create web pages and handle layout
                </Typography>
                <Typography variant="h5" component="h2">
                  Material-UI
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Used for base React component and styling
                </Typography>
                <Typography variant="h5" component="h2">
                  React-Router
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Used for linking react components together to allow for multiple
                  webpages
                </Typography>
                <Typography variant="h5" component="h2">
                  Jest/Enzyme
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Used for testing GUI components to ensure expected behavior
                  occurs
                </Typography>
                <Typography variant="h5" component="h2">
                  Postman
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Used for testing API requests
                </Typography>
                <Typography variant="h5" component="h2">
                  NodeJS
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Used to create backend API so the webpages can query the
                  database
                </Typography>
                <Typography variant="h5" component="h2">
                  Express
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  NodeJS framework used to connect to the database
                </Typography>
                <Typography variant="h5" component="h2">
                  MongoDB
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Used as a database to store all information about the
                  books/authors/genres
                </Typography>
              </CardContent>
            </Card>
          </Grid>);
    }
}

export default AboutUsToolsUsed;
