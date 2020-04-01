import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link, NavLink } from "react-router-dom";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  search(type) {
    let newUrl = new URLSearchParams();
    newUrl.set("type", type);
    newUrl.set("query", this.state.value);
    window.location.assign("/results?" + newUrl);
  }

  render() {
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: {
            width: "240px"
          }
        }}
      >
        <Link to="/">
          <img
            alt="small logo"
            src={require("./images/SidebarLogo.jpg")}
            height="160"
          />
        </Link>
        <Divider />
        <List>
          <ListItem
            button
            component={NavLink}
            to="/"
            activeStyle={{
              fontWeight: "bold"
            }}
          >
            <ListItemText primary="Home"></ListItemText>
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/About"
            activeStyle={{
              fontWeight: "bold"
            }}
          >
            <ListItemText primary="About Us"></ListItemText>
          </ListItem>
        </List>
        <Divider />
        <FormControl>
          <InputLabel htmlFor="search-bar">Search...</InputLabel>
          <Input
            id="search-bar"
            name="query"
            onChange={this.handleChange}
            value={this.state.value}
          />
        </FormControl>
        <Divider />
        <List>
          <ListItem button id="books" onClick={e => this.search("book")}>
            <ListItemText primary="... for books"></ListItemText>
          </ListItem>
          <ListItem button id="authors" onClick={e => this.search("author")}>
            <ListItemText primary="... for authors"></ListItemText>
          </ListItem>
          <ListItem button id="genres" onClick={e => this.search("genre")}>
            <ListItemText primary="... for genres"></ListItemText>
          </ListItem>
        </List>
      </Drawer>
    );
  }
}

export default Sidebar;
