import { Component } from "react";

class FilterContact extends Component{

    state = {
        search: ""
    }

    handleSeach = (e)=>{
        this.setState({
            search: e.target.value
        })
        this.props.handleFilter(this.state.search)
    }

    render(){
        return(
            <input type="text" value={this.state.search} onChange={this.handleSeach} placeholder="Search"/>
        )
    }
}

export default FilterContact