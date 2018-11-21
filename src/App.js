import React, { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import ReviewList from './components/ReviewList';
import Search from './components/Search';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      filterType: ''

    }
  }

  filterUpdate(value , type) {
    this.setState({
      filterText: value,
      filterType: type
    })
  }

  // render() {
  //   return(
  //
  //     <div>
  //       <div className="nav-bar">
  //         <a href="#Home">Home</a>
  //         <Search
  //           searchType="Title"
  //           filterText={this.state.filterText}
  //           filterUpdate={this.filterUpdate.bind(this)}
  //         />
  //         <Search
  //           searchType="Genre"
  //           filterText={this.state.filterText}
  //           filterUpdate={this.filterUpdate.bind(this)}
  //         />
  //
  //       </div>
  //         <MovieList
  //           data={this.props.data}
  //           filterText={this.state.filterText}
  //           filterType={this.state.filterType}
  //         />
  //     </div>
  //   )
  // }

  render() {
    return(
      <div>
        <ReviewList />
      </div>
    )
  }
}


export default App;
