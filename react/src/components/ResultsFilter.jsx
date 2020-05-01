import React from "react";
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import Box from '@material-ui/core/Box';
import Typography from "@material-ui/core/Typography";

class ResultsFilter extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <Paper>
                <Typography> 
                    Searching through {this.props.typeOfSearch}s for "{this.props.resultsQuery}": 
                    <br/>
                    {this.props.totalItems} results found.
                    <br/>
                </Typography>
                <InputLabel htmlFor="sort-select"> Sort by: </InputLabel>
                <Box component="div" display={(this.props.typeOfSearch === "book")?"inline":"none"}>
                    <Select
                        value = {this.props.defaultSort}
                        onChange={this.props.handleSort}
                        inputProps={{
                        id: 'sort-select',        
			            }}
                    >
                        <option value={"author"}>Author</option>
                        <option value={"date"}>Date</option>
                        <option value={"book"}>Book</option>
                    </Select>
                </Box>
                <Select
                value = {this.props.defaultOrder}
                onChange={this.props.handleOrder}
                inputProps={{
                    id: 'order-select',        
		        }}
                >
                  <option value={"1"}>Ascending</option>
                  <option value={"-1"}>Descending</option>
                </Select>
            </Paper>
        );
    }
}

export default ResultsFilter;