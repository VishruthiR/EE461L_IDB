import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Link, NavLink} from 'react-router-dom';

import SearchBar from './SearchBar'




class Sidebar extends React.Component {
	
	
	render() {
		
	
		return(
			
			<Drawer
				variant="permanent"
				classes={{
					paper: {
						width: "240px"
					}
				}}
			>
				<Link to="/index.html"><img src={this.props.logoSmall}/></Link>
				<Divider />
				<SearchBar />
				<Divider />
				<List>
					<ListItem button component={NavLink} to="/" activeStyle={{
						fontWeight: "bold"
					}}>
						<ListItemText primary="Home">
						</ListItemText>
					</ListItem>
					<ListItem button component={NavLink} to="/books" activeStyle={{
						fontWeight: "bold"
					}}>
						<ListItemText primary="Books">
						</ListItemText>
					</ListItem>
					<ListItem button component={NavLink} to="/authors" activeStyle={{
						fontWeight: "bold"
					}}>
						<ListItemText primary="Authors">
						</ListItemText>
					</ListItem>
					<ListItem button component={NavLink} to="/genres" activeStyle={{
						fontWeight: "bold"
					}}>
						<ListItemText primary="Genres">
						</ListItemText>
					</ListItem>
				</List>
			</Drawer>
		)
	}
}

export default Sidebar;