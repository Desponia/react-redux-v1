import React, { Component } from 'react'

class SearchBar extends Component {
    render() {
        return (
            <input onChange={(event) => console.log(event.target.value)}/>
            // <input onChange={this.onInputChange}/>
        )
    }

    onInputChange(e) {
        // e : event
        console.log(e)
    }
}

export default SearchBar