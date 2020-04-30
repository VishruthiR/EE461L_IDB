import React from 'react';
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class AboutUsBio extends React.Component {
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
                <Grid container>
                <Grid item xs={6} md={6}>
                    <CardHeader title={this.props.name} />
                </Grid>
                <Grid item xs={6} md={6}>
                    <CardMedia
                    component="img"
                    image={this.props.image}
                    title={this.props.imagetitle}
                    />
                </Grid>
                <CardContent>
                    <Typography variant="h5" component="h2">Bio</Typography>

                    <Typography gutterBottom variant="body2" color="textSecondary" component="p">{this.props.bio}</Typography>

                    <Typography variant="h5" component="h2"> Major/Track</Typography>

                    <Typography gutterBottom variant="body2" color="textSecondary" component="p">{this.props.track}</Typography>

                    <Typography variant="h5" component="h2">Primary Responsibilities</Typography>

                    <Typography gutterBottom variant="body2" color="textSecondary" component="p">{this.props.responsibilities}</Typography>

                    <Typography variant="h5" component="h2">Github Stats</Typography>
                    
                    <Grid container>
                        <Typography variant="body2" color="textSecondary" component="p">Commits:&nbsp;</Typography>
                    
                        <Typography variant="body2" component="p" style={numTheme}>{this.props.commits}</Typography>
                    </Grid>

                    <Grid container>
                        <Typography variant="body2" color="textSecondary" component="p">Issues Assigned:&nbsp;</Typography>

                        <Typography variant="body2" component="p" style={numTheme}>{this.props.issues}</Typography>
                    </Grid>

                    <Grid container>
                        <Typography variant="body2" color="textSecondary" component="p">Unit Tests:&nbsp;</Typography>

                        <Typography variant="body2" component="p" style={numTheme}>{this.props.tests}</Typography>
                    </Grid>
                </CardContent>
                </Grid>
            </Card>
            </Grid>);
    }
}

export default AboutUsBio;