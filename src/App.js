import React, { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Search from './components/Search';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterText: ''
    }
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }

  render() {
    return(

      <div>
        <div className="nav-bar">
          <a href="#Home">Home</a>
          <Search
            searchType="Title"
            filterText={this.state.filterText}
            filterUpdate={this.filterUpdate.bind(this)}
          />
        </div>
          <MovieList
          data={this.props.data}
          filterText={this.state.filterText}
          />
      </div>
    )
  }
}


export default App;
