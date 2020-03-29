import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';

class Description extends React.Component {
  render() {
    return (
      <Card>
        <CardContent>
		  <Grid container>
			  <Grid item sm={2} container>
			    <img src={this.props.image} style={{flexDirection: 'row', flexWrap: 'wrap', width: 'inherit', height: 'inherit'}} />
			  </Grid>
			  <Grid item sm={10}>
          	    <Typography variant="h6" style={{padding: 10}}>{this.props.description}</Typography>
		  	  </Grid>
		  </Grid>
        </CardContent>
      </Card>
    );
  }
}

export default Description;
