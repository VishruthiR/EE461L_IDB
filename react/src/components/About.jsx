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

  async componentDidMount() {
    var url;
    var total_commits = 0;
    let kc = 0,
      dc = 0,
      sc = 0,
      vc = 0,
      mc = 0,
      jc = 0;
    for (var i = 1; i < 4; i++) {
      url =
        "https://api.github.com/repos/VishruthiR/EE461L_IDB/commits?page=" +
        i +
        "&per_page=100";
      await fetch(url)
        .then(response => response.json())
        .then(data => {
          total_commits += data.length;
          kc += data.filter(function(e) {
            return e.commit.author.name === "kumosumo";
          }).length;
          dc += data.filter(function(e) {
            return e.commit.author.name === "davidday99";
          }).length;
          mc += data.filter(function(e) {
            return e.commit.author.name === "Matthew Jiang";
          }).length;
          vc += data.filter(function(e) {
            return e.commit.author.name === "Vishruthi Ramaswamy";
          }).length;
          sc += data.filter(function(e) {
            return e.commit.author.name === "sshetkar3858";
          }).length;
          jc += data.filter(function(e) {
            return e.commit.author.name === "Jaino Vennatt";
          }).length;
        });
    }
    this.setState({ totalC: total_commits });
    this.setState({ kumoC: String(kc) });
    this.setState({ davidC: dc });
    this.setState({ matthewC: mc });
    this.setState({ vishC: vc });
    this.setState({ sidC: sc });
    this.setState({ jainoC: jc });

    fetch("https://api.github.com/repos/VishruthiR/EE461L_IDB/issues?state=all") //should increase pagination size and allow for all commits to show
      .then(response1 => response1.json())
      .then(issues => {
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
    const section = {
      height: "100%"
    };
    const numTheme = {
      color: "yellowgreen"
    };

    return (
      <Grid container spacing={3} alignItems="stretch">
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
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <h1>About The Bookish People</h1>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card style={section}>
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
                <Grid container>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Commits:&nbsp;
                  </Typography>
                  <Typography variant="body2" component="p" style={numTheme}>
                    {this.state.kumoC}
                  </Typography>
                </Grid>
                <Grid container>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Issues Assigned:&nbsp;
                  </Typography>
                  <Typography variant="body2" component="p" style={numTheme}>
                    {this.state.kumoI}
                  </Typography>
                </Grid>
                <Grid container>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Unit Tests:&nbsp;
                  </Typography>
                  <Typography variant="body2" component="p" style={numTheme}>
                    {0}
                  </Typography>
                </Grid>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card style={section}>
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
                <Grid container>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Commits:&nbsp;
                  </Typography>
                  <Typography variant="body2" component="p" style={numTheme}>
                    {this.state.davidC}
                  </Typography>
                </Grid>
                <Grid container>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Issues Assigned:&nbsp;
                  </Typography>
                  <Typography variant="body2" component="p" style={numTheme}>
                    {this.state.davidI}
                  </Typography>
                </Grid>
                <Grid container>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Unit Tests:&nbsp;
                  </Typography>
                  <Typography variant="body2" component="p" style={numTheme}>
                    {16}
                  </Typography>
                </Grid>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card style={section}>
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
                  Web Dev Lead. Created layout for website.
                </Typography>
                <Typography variant="h5" component="h2">
                  Github Stats
                </Typography>
                <Grid container>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Commits:&nbsp;
                  </Typography>
                  <Typography variant="body2" component="p" style={numTheme}>
                    {this.state.matthewC}
                  </Typography>
                </Grid>
                <Grid container>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Issues Assigned:&nbsp;
                  </Typography>
                  <Typography variant="body2" component="p" style={numTheme}>
                    {this.state.matthewI}
                  </Typography>
                </Grid>
                <Grid container>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Unit Tests:&nbsp;
                  </Typography>
                  <Typography variant="body2" component="p" style={numTheme}>
                    {0}
                  </Typography>
                </Grid>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card style={section}>
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
                  Created web page layouts and templates.
                </Typography>
                <Grid container>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Commits:&nbsp;
                  </Typography>
                  <Typography variant="body2" component="p" style={numTheme}>
                    {this.state.vishC}
                  </Typography>
                </Grid>
                <Grid container>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Issues Assigned:&nbsp;
                  </Typography>
                  <Typography variant="body2" component="p" style={numTheme}>
                    {this.state.vishI}
                  </Typography>
                </Grid>
                <Grid container>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Unit Tests:&nbsp;
                  </Typography>
                  <Typography variant="body2" component="p" style={numTheme}>
                    {4}
                  </Typography>
                </Grid>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card style={section}>
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
                  Created web pages and layouts.
                </Typography>
                <Typography variant="h5" component="h2">
                  Github Stats
                </Typography>
                <Grid container>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Commits:&nbsp;
                  </Typography>
                  <Typography variant="body2" component="p" style={numTheme}>
                    {this.state.sidC}
                  </Typography>
                </Grid>
                <Grid container>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Issues Assigned:&nbsp;
                  </Typography>
                  <Typography variant="body2" component="p" style={numTheme}>
                    {this.state.sidI}
                  </Typography>
                </Grid>
                <Grid container>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Unit Tests:&nbsp;
                  </Typography>
                  <Typography variant="body2" component="p" style={numTheme}>
                    {0}
                  </Typography>
                </Grid>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card style={section}>
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
                  Database lead. Wrote scripts to scrape data.
                </Typography>
                <Typography variant="h5" component="h2">
                  Github Stats
                </Typography>
                <Grid container>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Commits:&nbsp;
                  </Typography>
                  <Typography variant="body2" component="p" style={numTheme}>
                    {this.state.jainoC}
                  </Typography>
                </Grid>
                <Grid container>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Issues Assigned:&nbsp;
                  </Typography>
                  <Typography variant="body2" component="p" style={numTheme}>
                    {this.state.jainoI}
                  </Typography>
                </Grid>
                <Grid container>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Unit Tests:&nbsp;
                  </Typography>
                  <Typography variant="body2" component="p" style={numTheme}>
                    {7}
                  </Typography>
                </Grid>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <h1>Additional Info</h1>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card style={section}>
            <CardHeader title="Team Stats" />
            <CardContent>
              <Grid container>
                <Typography variant="body2" color="textSecondary" component="p">
                  Total Commits:&nbsp;
                </Typography>
                <Typography variant="body2" component="p" style={numTheme}>
                  {this.state.totalC}
                </Typography>
              </Grid>
              <Grid container>
                <Typography variant="body2" color="textSecondary" component="p">
                  Total Issues:&nbsp;
                </Typography>
                <Typography variant="body2" component="p" style={numTheme}>
                  {this.state.totalI}
                </Typography>
              </Grid>
              <Grid container>
                <Typography variant="body2" color="textSecondary" component="p">
                  Total Unit Tests:&nbsp;
                </Typography>
                <Typography variant="body2" component="p" style={numTheme}>
                  {27}
                </Typography>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
          <Card style={section}>
            <CardHeader title="Data Sources" />
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
        </Grid>
        <Grid item xs={12} sm={4} md={4}>
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
        </Grid>
        <Grid container direction="column" alignItems="center">
          <Grid item>
            <h1>
              Check out our{" "}
              <a href="https://github.com/VishruthiR/EE461L_IDB">Github!</a>{" "}
            </h1>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default About;
