import React, { Component } from 'react';

class Search extends Component {

  filterUpdate() {
    const title = this.searchTitle.value;
    const genre = this.searchGenre.value;
    this.props.filterUpdate(title, genre);
  }

  render() {
    return (
      <div>
        <form>
          Search By Title <br/>
          <input
            type="text"
            ref={ (value) => {this.searchTitle = value}}
            onChange={this.filterUpdate.bind(this)}
          />
          <br/>Search By Genre <br/>
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
