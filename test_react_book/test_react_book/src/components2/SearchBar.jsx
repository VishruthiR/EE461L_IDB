import React from 'react'
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
export default class SearchBar extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		
	}
	
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<FormControl>
						<InputLabel htmlFor="search-bar">Search...</InputLabel>
						<Input id="search-bar" name="query" onChange={this.handleChange} value={this.state.value}/>
				</FormControl>
			</form>
		);
	}
}