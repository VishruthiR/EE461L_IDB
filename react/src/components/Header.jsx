import React from "react";
import Paper from "@material-ui/core/Paper";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

import GenreHeader from "./GenreHeader"
import BookHeader from "./BookHeader"
import AuthorHeader from "./AuthorHeader"

class Header extends React.Component {
  render() {
    switch(this.props.type){
        case "genre":
        return(<GenreHeader {...this.props}/>);
        break;
        case "book":
        return(<BookHeader {...this.props}/>);
        break;
        case "author":
        return(<AuthorHeader {...this.props}/>);
        break;
	}
  }
}

export default Header;
