import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import AboutUsBio from "./AboutUsBio";

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

        <AboutUsBio name="Kumaran Arulmani" image={require("./images/kumo.png")} imagetitle="Kumo Github Profile Pic"
          bio='Hailing from San Antonio, Kumaran Arulmani is an enigma. His powerful leadership skills and technical prowess 
          has earned him the nickname "The Processor."' track="Electrical and Computer Engineering: Software Engineering" 
          responsibilities="Project Lead. Developing page templates, specifically the About Page."
          commits={this.state.kumoC} issues={this.state.kumoI} tests="0"/>

        <AboutUsBio name="David Day" image={require("./images/david.jpeg")} imagetitle="David Github Profile Pic"
          bio="David Day takes pride in coming from the Rio Grande Valley. He loves working out and is interested in data science." 
          track="Electrical and Computer Engineering/Math: Software Engineering" 
          responsibilities="Scraping Data and situating database."
          commits={this.state.davidC} issues={this.state.davidI} tests="16"/>

        <AboutUsBio name="Matthew Jiang" image={require("./images/matthew.jpeg")} imagetitle="Matthew Github Profile Pic"
          bio="Matthew Jiang is a very knowledgable person with prior front-end experience. He loves League of Legends 
          and helping others learn." track="Electrical and Computer Engineering: Software Engineering" 
          responsibilities="Web Dev Lead. Created layout for website." 
          commits={this.state.matthewC} issues={this.state.matthewI} tests="0"/>

        <AboutUsBio name="Vishruthi Ramaswamy" image={require("./images/vishruthi.jpeg")} imagetitle="Vishruthi Github Profile Pic"
          bio="What Vishruthi lacks in height, she more than makes up for in talking. She is the voice of the team." 
          track="Electrical and Computer Engineering: Software Engineering" 
          responsibilities="Created web page layouts and templates." 
          commits={this.state.vishC} issues={this.state.vishI} tests="4"/>

        <AboutUsBio name="Siddhartha Shetkar" image={require("./images/sid.jpeg")} imagetitle="Siddhartha Github Profile Pic"
          bio="Siddhartha Shetkar, known as Sid by his peers, loves playing the violin, making origami, and plays competitive smash." 
          track="Electrical and Computer Engineering: Software Engineering" 
          responsibilities="Created web pages and layouts." 
          commits={this.state.sidC} issues={this.state.sidI} tests="0"/>

        <AboutUsBio name="Jaino Vennatt" image={require("./images/jaino.jpeg")} imagetitle="Jaino Github Profile Pic"
          bio="Jaino Vennatt is a fourth year student. Known for riding Boosted Boards and being smart, Jaino helps the 
          team stay on track." track="Electrical and Computer Engineering: Software Engineering" 
          responsibilities="Created web pages and layouts." 
          commits={this.state.jainoC} issues={this.state.jainoI} tests="7"/>

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
