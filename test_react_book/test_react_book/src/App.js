import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Book from "./components2/Book";
import Author from "./components2/Author";
import Genre from "./components2/Genre";
import Results from "./components2/Results";
import Homepage from "./components2/Homepage";
import About from "./components2/About";
import Sidebar from "./components2/Sidebar";
import Box from "@material-ui/core/Box";
import ResultsP from "./components2/ResultsP";

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
                  image={require("./components2/images/Header.jpg")}
                />
              </Grid>
            </Grid>
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/about" exact component={About} />
              <Route path="/book" component={Book} />
              <Route path="/author" component={Author} />
              <Route path="/genre" component={Genre} />
              <Route
                path="/results/:type/:query/:pageNum"
                component={Results}
              />
              <Route path="/results" component={ResultsP} />
            </Switch>
          </div>
        </Box>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
