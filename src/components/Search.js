import React, { Component } from 'react';

class Search extends Component {

  filterUpdate() {
    const title = this.searchTitle.value;
    const genre = this.searchGenre.value;
    this.props.filterUpdate(title, genre);
  }

  render() {
    const { searchType } = this.props;
    return (
      <div  className="search-bars">
        <form>
          Search By Title
          <input
            type="text"
            ref={ (value) => {this.searchTitle = value}}
            onChange={this.filterUpdate.bind(this)}
          />
        </form>
        <form>
          Search By Genre
          <input
            type="text"
            ref={ (value) => {this.searchGenre = value}}
            onChange={this.filterUpdate.bind(this)}
          />
        </form>
      </div>
    )
  }
}

export default Search;
