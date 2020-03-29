import React from 'react'
import Grid from '@material-ui/core/Grid';


class Header extends React.Component {
	render() {
		return <Grid container>
			<Grid item sm>
				<img src={this.props.image} />
			</Grid>
			<Grid item sm>
				<h1>{this.props.title}</h1>
			</Grid>
		</Grid>
	}
}

export default Header;