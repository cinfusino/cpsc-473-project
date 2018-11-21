import React, { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import ReviewList from './components/ReviewList';
import Search from './components/Search';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterTitle: '',
      filterGenre: ''

    }
  }

  filterUpdate(title, genre) {
    this.setState({
      filterTitle: title,
      filterGenre: genre
    })
  }

  render() {
    return(

      <div>
        <div className="nav-bar">
          <a href="#Home">Home</a>
          <Search
            filterUpdate={this.filterUpdate.bind(this)}
          />
        </div>
          <MovieList
            data={this.props.data}
            filterTitle={this.state.filterTitle}
            filterGenre={this.state.filterGenre}
          />
      </div>
    )
  }

  // render() {
  //   return(
  //     <div>
  //       <ReviewList />
  //     </div>
  //   )
  // }
}


export default App;
