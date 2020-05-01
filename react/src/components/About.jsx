import React from "react";
import Grid from "@material-ui/core/Grid";
import AboutUsBio from "./AboutUsBio";
import AboutUsTeamStats from "./AboutUsTeamStats";
import AboutUsDataSources from "./AboutUsDataSources";
import AboutUsToolsUsed from "./AboutUsToolsUsed";
import AboutUsHeader from "./AboutUsHeader";

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

  getUserCommits(data, filter) {
    let commitNum = data.filter(function(e) {
      return e.commit.author.name === filter;
    }).length;
    return commitNum;
  }

  getUserIssues(issues, filter) {
    let issuesList = issues.filter(function(e) {
      let status = false;
      for (let i = 0; i < e.assignees.length; i++) {
        if (e.assignees[i].login === filter) {
          status = true;
          break;
        }
      }
      return status;
    });
    return issuesList;
  }

  async componentDidMount() {
    let url;
    let total_commits = 0;
    let kc = 0;
    let dc = 0;
    let sc = 0;
    let vc = 0;
    let mc = 0;
    let jc = 0;
    for (var i = 1; i < 4; i++) {
      url =
        "https://api.github.com/repos/VishruthiR/EE461L_IDB/commits?page=" + i + "&per_page=100";
      await fetch(url).then(response => response.json()).then(data => {
          total_commits += data.length;
          kc += this.getUserCommits(data, "kumosumo");
          dc += this.getUserCommits(data, "davidday99");
          mc += this.getUserCommits(data, "Matthew Jiang")
          vc += this.getUserCommits(data, "Vishruthi Ramaswamy")
          sc += this.getUserCommits(data, "sshetkar3858")
          jc += this.getUserCommits(data, "Jaino Vennatt")
        });
    }
    this.setState({ totalC: total_commits });
    this.setState({ kumoC: kc });
    this.setState({ davidC: dc });
    this.setState({ matthewC: mc });
    this.setState({ vishC: vc });
    this.setState({ sidC: sc });
    this.setState({ jainoC: jc });

    fetch("https://api.github.com/repos/VishruthiR/EE461L_IDB/issues?state=all") //should increase pagination size and allow for all commits to show
      .then(response1 => response1.json())
      .then(issues => {
        this.setState({ totalI: issues.length });
        this.setState({ kumoI: this.getUserIssues(issues, "kumosumo").length });
        this.setState({ davidI: this.getUserIssues(issues, "davidday99").length });
        this.setState({ matthewI: this.getUserIssues(issues, "myj99").length });
        this.setState({ vishI: this.getUserIssues(issues, "VishruthiR").length });
        this.setState({ sidI: this.getUserIssues(issues, "sshetkar3858").length });
        this.setState({ jainoI: this.getUserIssues(issues, "jainovennatt").length });
      });
  }
  render() {
    return (
      <Grid container spacing={3} alignItems="stretch">
        <AboutUsHeader header="About Booklopedia" description="Booklopedia is an Internet Database that curates information
                  about Modern Books written in English. We offer flexible and robust search options such as Author, Title, 
                  Genre, Ratings, and More. We provide one central location to house all relevant information for books, 
                  authors and genres."/>

        <Grid container direction="column" alignItems="center">
          <Grid item>
            <h1>About The Bookish People</h1>
          </Grid>
        </Grid>

        <AboutUsBio name="Kumaran Arulmani" image={require("./images/kumo.png")} imagetitle="Kumo Github Profile Pic"
          bio='Hailing from San Antonio, Kumaran Arulmani is an enigma. His powerful leadership skills and technical prowess 
          has earned him the nickname "The Processor."' track="Electrical and Computer Engineering: Software Engineering" 
          responsibilities="Project Lead. Developing page templates, specifically the About Page."
          commits={this.state.kumoC} issues={this.state.kumoI} tests={0}/>

        <AboutUsBio name="David Day" image={require("./images/david.jpeg")} imagetitle="David Github Profile Pic"
          bio="David Day takes pride in coming from the Rio Grande Valley. He loves working out and is interested in data science." 
          track="Electrical and Computer Engineering/Math: Software Engineering" 
          responsibilities="Scraping Data and situating database."
          commits={this.state.davidC} issues={this.state.davidI} tests={16}/>

        <AboutUsBio name="Matthew Jiang" image={require("./images/matthew.jpeg")} imagetitle="Matthew Github Profile Pic"
          bio="Matthew Jiang is a very knowledgable person with prior front-end experience. He loves League of Legends 
          and helping others learn." track="Electrical and Computer Engineering: Software Engineering" 
          responsibilities="Web Dev Lead. Created layout for website." 
          commits={this.state.matthewC} issues={this.state.matthewI} tests={0}/>

        <AboutUsBio name="Vishruthi Ramaswamy" image={require("./images/vishruthi.jpeg")} imagetitle="Vishruthi Github Profile Pic"
          bio="What Vishruthi lacks in height, she more than makes up for in talking. She is the voice of the team." 
          track="Electrical and Computer Engineering: Software Engineering" 
          responsibilities="Created web page layouts and templates." 
          commits={this.state.vishC} issues={this.state.vishI} tests={4}/>

        <AboutUsBio name="Siddhartha Shetkar" image={require("./images/sid.jpeg")} imagetitle="Siddhartha Github Profile Pic"
          bio="Siddhartha Shetkar, known as Sid by his peers, loves playing the violin, making origami, and plays competitive smash." 
          track="Electrical and Computer Engineering: Software Engineering" 
          responsibilities="Created web pages and layouts." 
          commits={this.state.sidC} issues={this.state.sidI} tests={0}/>

        <AboutUsBio name="Jaino Vennatt" image={require("./images/jaino.jpeg")} imagetitle="Jaino Github Profile Pic"
          bio="Jaino Vennatt is a fourth year student. Known for riding Boosted Boards and being smart, Jaino helps the 
          team stay on track." track="Electrical and Computer Engineering: Software Engineering" 
          responsibilities="Created web pages and layouts." 
          commits={this.state.jainoC} issues={this.state.jainoI} tests={7}/>

        <Grid container direction="column" alignItems="center">
          <Grid item>
            <h1>Additional Info</h1>
          </Grid>
        </Grid>
        
        <AboutUsTeamStats totalcommits={this.state.totalC} totalissues={this.state.totalI} totaltests={27}/>
        <AboutUsDataSources />
        <AboutUsToolsUsed />

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
