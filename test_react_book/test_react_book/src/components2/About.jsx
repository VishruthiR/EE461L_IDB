import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalC: 0,
      kumoC: 0,
      davidC: 0,
      matthewC: 0,
      vishC: 0,
      sidC: 0,
      jainoC: 0,
      totalI: 0,
      kumoI: 0,
      davidI: 0,
      matthewI: 0,
      vishI: 0,
      sidI: 0,
      jainoI: 0
    };
  }
  componentDidMount() {
    fetch(
      "https://api.github.com/repos/VishruthiR/EE461L_IDB/commits?per_page=500"
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ totalC: data.length });
        let kumoCommit = data.filter(function(e) {
          return e.commit.author.name === "kumosumo";
        });
        this.setState({ kumoC: kumoCommit.length });
        let davidCommit = data.filter(function(e) {
          return e.commit.author.name === "davidday99";
        });
        this.setState({ davidC: davidCommit.length });
        let matthewCommit = data.filter(function(e) {
          return e.commit.author.name === "Matthew Jiang";
        });
        this.setState({ matthewC: matthewCommit.length });
        let vishCommit = data.filter(function(e) {
          return e.commit.author.name === "Vishruthi Ramaswamy";
        });
        this.setState({ vishC: vishCommit.length });
        let sidCommit = data.filter(function(e) {
          return e.commit.author.name === "sshetkar3858";
        });
        this.setState({ sidC: sidCommit.length });
        let jainoCommit = data.filter(function(e) {
          return e.commit.author.name === "Jaino Vennatt";
        });
        this.setState({ jainoC: jainoCommit.length });
      });

    fetch(
      "https://api.github.com/repos/VishruthiR/EE461L_IDB/issues?per_page=100"
    ) //should increase pagination size and allow for all commits to show
      .then(response1 => response1.json())
      .then(issues => {
        console.log(issues);
        this.setState({ totalI: issues.length });
        let kumoIssues = issues.filter(function(e) {
          let status = false;
          for (let i = 0; i < e.assignees.length; i++) {
            if (e.assignees[i].login === "kumosumo") {
              status = true;
              break;
            }
          }
          return status;
        });
        this.setState({ kumoI: kumoIssues.length });
        let davidIssues = issues.filter(function(e) {
          let status = false;
          for (let i = 0; i < e.assignees.length; i++) {
            if (e.assignees[i].login === "davidday99") {
              status = true;
              break;
            }
          }
          return status;
        });
        this.setState({ davidI: davidIssues.length });
        let matthewIssues = issues.filter(function(e) {
          let status = false;
          for (let i = 0; i < e.assignees.length; i++) {
            if (e.assignees[i].login === "myj99") {
              status = true;
              break;
            }
          }
          return status;
        });
        this.setState({ matthewI: matthewIssues.length });
        let vishIssues = issues.filter(function(e) {
          let status = false;
          for (let i = 0; i < e.assignees.length; i++) {
            if (e.assignees[i].login === "VishruthiR") {
              status = true;
              break;
            }
          }
          return status;
        });
        this.setState({ vishI: vishIssues.length });
        let sidIssues = issues.filter(function(e) {
          let status = false;
          for (let i = 0; i < e.assignees.length; i++) {
            if (e.assignees[i].login === "sshetkar3858") {
              status = true;
              break;
            }
          }
          return status;
        });
        this.setState({ sidI: sidIssues.length });
        let jainoIssues = issues.filter(function(e) {
          let status = false;
          for (let i = 0; i < e.assignees.length; i++) {
            if (e.assignees[i].login === "jainovennatt") {
              status = true;
              break;
            }
          }
          return status;
        });
        this.setState({ jainoI: jainoIssues.length });
      });
  }
  render() {
    return (
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} sm={5} md={12}>
          <CardMedia
          component="img"
          height="260"
          alt="Header"
          image={require('./images/Header.jpg')}
          />
        </Grid>
        <Grid item xs={12} sm={5} md={12}>
          <Card>
            <CardContent>
              <h1>About Booklopedia</h1>
              <Typography variant="body2" color="textSecondary" component="p">
                Booklopedia is an Internet Database that curates information
                about Modern Books written in English. We offer flexible and
                robust search options such as Author, Title. Genre, Ratings, and
                More. We provide one central location to house all relevant
                information for books, authors and genres.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card>
            <Grid container>
              <Grid item xs={6} md={6}>
                <CardHeader title="Kumaran Arulmani" />
              </Grid>
              <Grid item xs={6} md={6}>
                <CardMedia
                  component="img"
                  image={require("./images/kumo.png")}
                  title="Kumo Github Profile Pic"
                />
              </Grid>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Bio
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Hailing from San Antonio, Kumaran Arulmani is an enigma. His
                  powerful leadership skills and technical prowess has earned
                  him the nickname "The Processor."
                </Typography>
                <Typography variant="h5" component="h2">
                  Major/Track
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Electrical and Computer Engineering: Software Engineering
                </Typography>
                <Typography variant="h5" component="h2">
                  Primary Responsibilities
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Project Lead. Developing page templates, specifically the
                  About Page.
                </Typography>
                <Typography variant="h5" component="h2">
                  Github Stats
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Commits: {this.state.kumoC}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Issues Assigned: {this.state.kumoI}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Units Tests: 0
                </Typography>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card>
            <Grid container>
              <Grid item xs={6} md={6}>
                <CardHeader title="David Day" />
              </Grid>
              <Grid item xs={6} md={6}>
                <CardMedia
                  component="img"
                  image={require("./images/david.jpeg")}
                  title="David Github Profile Pic"
                />
              </Grid>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Bio
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  David Day takes pride in coming from the Rio Grande Valley. He
                  loves working out and is interested in data science.
                </Typography>
                <Typography variant="h5" component="h2">
                  Major/Track
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Electrical and Computer Engineering/Math: Software Engineering
                </Typography>
                <Typography variant="h5" component="h2">
                  Primary Responsibilities
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Scraping Data and situating database.
                </Typography>
                <Typography variant="h5" component="h2">
                  Github Stats
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Commits: {this.state.davidC}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Issues Assigned: {this.state.davidI}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Units Tests: 0
                </Typography>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card>
            <Grid container>
              <Grid item xs={6} md={6}>
                <CardHeader title="Matthew Jiang" />
              </Grid>
              <Grid item xs={6} md={6}>
                <CardMedia
                  component="img"
                  image={require("./images/matthew.jpeg")}
                  title="Matthew Github Profile Pic"
                />
              </Grid>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Bio
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Matthew Jiang is a very knowledgable person with prior
                  front-end experience. He loves League of Legends and helping
                  others learn.
                </Typography>
                <Typography variant="h5" component="h2">
                  Major/Track
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Electrical and Computer Engineering/Math: Software Engineering
                </Typography>
                <Typography variant="h5" component="h2">
                  Primary Responsibilities
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Web Dev Lead. Created layout for website.
                </Typography>
                <Typography variant="h5" component="h2">
                  Github Stats
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Commits: {this.state.matthewC}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Issues Assigned: {this.state.matthewI}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Units Tests: 0
                </Typography>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card>
            <Grid container>
              <Grid item xs={6} md={6}>
                <CardHeader title="Vishruthi Ramaswamy" />
              </Grid>
              <Grid item xs={6} md={6}>
                <CardMedia
                  component="img"
                  image={require("./images/vishruthi.jpeg")}
                  title="Vishruthi Github Profile Pic"
                />
              </Grid>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Bio
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  What Vishruthi lacks in height, she more than makes up for in
                  talking. She is the voice of the team.
                </Typography>
                <Typography variant="h5" component="h2">
                  Major/Track
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Electrical and Computer Engineering/Math: Software Engineering
                </Typography>
                <Typography variant="h5" component="h2">
                  Primary Responsibilities
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Created web page layouts and templates.
                </Typography>
                <Typography variant="h5" component="h2">
                  Github Stats
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Commits: {this.state.vishC}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Issues Assigned: {this.state.vishI}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Units Tests: 0
                </Typography>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card>
            <Grid container>
              <Grid item xs={6} md={6}>
                <CardHeader title="Siddhartha Shetkar" />
              </Grid>
              <Grid item xs={6} md={6}>
                <CardMedia
                  component="img"
                  image={require("./images/sid.jpeg")}
                  title="Siddhartha Github Profile Pic"
                />
              </Grid>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Bio
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Siddhartha Shetkar, known as Sid by his peers, loves playing
                  the violin, making origami, and plays competitive smash.
                </Typography>
                <Typography variant="h5" component="h2">
                  Major/Track
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Electrical and Computer Engineering/Math: Software Engineering
                </Typography>
                <Typography variant="h5" component="h2">
                  Primary Responsibilities
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Created web pages and layouts.
                </Typography>
                <Typography variant="h5" component="h2">
                  Github Stats
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Commits: {this.state.sidC}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Issues Assigned: {this.state.sidI}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Units Tests: 0
                </Typography>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card>
            <Grid container>
              <Grid item xs={6} md={6}>
                <CardHeader title="Jaino Vennatt" />
              </Grid>
              <Grid item xs={6} md={6}>
                <CardMedia
                  component="img"
                  image={require("./images/jaino.jpeg")}
                  title="Jaino Github Profile Pic"
                />
              </Grid>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Bio
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Jaino Vennatt is a fourth year student. Known for riding
                  Boosted Boards and being smart, Jaino helps the team stay on
                  track.
                </Typography>
                <Typography variant="h5" component="h2">
                  Major/Track
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Electrical and Computer Engineering/Math: Software Engineering
                </Typography>
                <Typography variant="h5" component="h2">
                  Primary Responsibilities
                </Typography>
                <Typography
                  gutterBottom
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  Database lead. Wrote scripts to scrape data.
                </Typography>
                <Typography variant="h5" component="h2">
                  Github Stats
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Commits: {this.state.jainoC}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Issues Assigned: {this.state.jainoI}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Units Tests: 0
                </Typography>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    );
  }
}
export default About;
/*
<div>
        <h1>
          Kumo {this.state.kumoC} {this.state.kumoI}
        </h1>
        <h1>
          David {this.state.davidC} {this.state.davidI}
        </h1>
        <h1>
          Matthew {this.state.matthewC} {this.state.matthewI}
        </h1>
        <h1>
          Vish {this.state.vishC} {this.state.vishI}
        </h1>
        <h1>
          Sid {this.state.sidC} {this.state.sidI}
        </h1>
        <h1>
          Jaino {this.state.jainoC} {this.state.jainoI}
        </h1>
      </div>
*/
