import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
//import Link from "@material-ui/core/Link";
import { Link } from "react-router-dom";

class Homepage extends React.Component {
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5} md={12}>
          <CardMedia
            component="img"
            height="260"
            alt="Header"
            image={require("./images/Header.jpg")}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardActionArea component={Link} to={"/results?type=book&query="}>
              <CardMedia
                component="img"
                height="420"
                alt="Books"
                image="https://cdn.shoplightspeed.com/shops/621012/files/15915280/books.jpg"
                title="Books"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Books
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Explore Popular Books
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardActionArea component={Link} to={"/results?type=author&query="}>
              <CardMedia
                component="img"
                height="420"
                alt="Authors"
                image="https://hccontent.s3.amazonaws.com/1/Blog/author-bios.jpg"
                title="Authors"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Authors
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Explore Popular Authors
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardActionArea component={Link} to={"/results?type=genre&query="}>
              <CardMedia
                component="img"
                height="420"
                alt="Genres"
                image="https://www.writersandartists.co.uk/assets/users/admin_1/admin_1-asset-502ba7d510930.jpg"
                title="Genres"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Genres
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Explore Popular Genres
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <Card>
            <CardActionArea component={Link} to={"/About"}>
              <CardMedia
                component="img"
                height="420"
                alt="About Us"
                image="https://cdn.searchenginejournal.com/wp-content/uploads/2019/01/Top-10-Ranking-About-Us-Pages-760x400.png"
                title="About Us"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  About Us
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Learn more about the Booklopedia Team
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

export default Homepage;
