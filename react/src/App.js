import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BookContainer from "./components/BookContainer";
import AuthorContainer from "./components/AuthorContainer";
import GenreContainer from "./components/GenreContainer";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Sidebar from "./components/Sidebar";
import ResultsP from "./components/ResultsP";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";


function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Box display="flex">
          <div style={{ flexShrink: 0, width: 240 }}>
            <Sidebar />
          </div>
          <div style={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={5} md={12}>
                <CardMedia
                  component="img"
                  height="260"
                  alt="Header"
                  image={require("./components/images/Header.jpg")}
                />
              </Grid>
            </Grid>
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/about" exact component={About} />
              <Route path="/book" component={BookContainer} />
              <Route path="/author" component={AuthorContainer} />
              <Route path="/genre" component={GenreContainer} />
              <Route path="/results" component={ResultsP} />
            </Switch>
          </div>
        </Box>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
