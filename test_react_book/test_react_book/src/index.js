import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Book from "./components2/Book";
import Author from "./components2/Author";
import Genre from "./components2/Genre";
import Results from "./components2/Results";
import Homepage from "./components2/Homepage";
import Sidebar from "./components2/Sidebar";
import Box from '@material-ui/core/Box';
import ResultsP from "./components2/ResultsP";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
		<Box display="flex">
		  <div style={{flexShrink: 0, width: 240}}>
			<Sidebar />
		  </div>
		  <div style={{flexGrow:1}}>
			  <Switch>
				<Route path="/" exact component={Homepage} />
				<Route path="/book/:ISBN" component={Book} />
				<Route path="/author/:authorName" component={Author} />
				<Route path="/genre/:name" component={Genre} />
				<Route path="/results/:type/:query/:pageNum" component={Results} />
				
				//Parameter Style
				<Route path="/results" component={ResultsP} />
			  </Switch>
		  </div>
		</Box>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
