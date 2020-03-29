import React from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { lineHeight } from '@material-ui/system';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';

class Header extends React.Component {
	render() {
		return <Paper style={{padding: 20, fontSize: 36}}>
			<div style={{padding: 10}}>
				<h1>{this.props.title}</h1>
				<h3 style={{lineHeight: 0}}>by David Day</h3>
			</div>
		</Paper>
	}
}

export default Header;