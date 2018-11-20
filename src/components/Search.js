import React, { Component } from 'react';

class Search extends Component {

  filterUpdate() {
    const value = this.searchValue.value;
    this.props.filterUpdate(value);
  }

  render() {
    const { searchType } = this.props;
    return (
      <form>
        Search By {searchType}
        <input
          type="text"
          ref={ (value) => {this.searchValue = value}}
          onChange={this.filterUpdate.bind(this)}
        />
      </form>
    )
  }
}

export default Search;
