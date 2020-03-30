import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Book from "./components2/Book";
import Author from "./components2/Author";
import Genre from "./components2/Genre";
import Results from "./components2/Results";
import Homepage from "./components2/Homepage";
import About from "./components2/About"

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/book/:ISBN" component={Book} /> 
            <Route path="/author/" component={Author} />
            <Route path="/genre/:name" component={Genre} />
            <Route path="/results/:query" component={Results} />
            <Route path="/about" component={About} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
