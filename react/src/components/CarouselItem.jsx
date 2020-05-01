import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";


class CarouselItem extends React.Component {
    render() {
        return (
        <Card>
              <CardActionArea component={Link} to={this.props.link}>
                <CardMedia
                  component="img"
                  height="420"
                  alt={this.props.title}
                  image={this.props.image}
                  title={this.props.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {this.props.title} 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {this.props.content}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>);
    }
}

export default CarouselItem;
