import React, { Component } from 'react'

export class SearchBar extends Component {
    render() {
        return (
            <div className="search-container">
                <form>
                <input type= "search" className="search-bar"></input>
                <input type="submit" className="search-submit" value="Search"></input>
                </form>
            </div>
        )
    }
}

export default SearchBar
