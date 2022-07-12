import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    search() {
        this.setState(this.props.onSearch);
    }

    render(){
        return(
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" />
                <button className="SearchButton">SEARCH</button>
            </div>
        )
    }
}

export default SearchBar;