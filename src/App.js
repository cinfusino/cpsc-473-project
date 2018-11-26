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
      filterGenre: '',
      selectedMovie: -1
    }
  }

  filterUpdate(title, genre) {
    this.setState({
      filterTitle: title,
      filterGenre: genre
    })
  }

  selectMovie(id, title) {
    this.setState({
      selectedMovie: id,
      filterTitle: title
    })
  }

  render() {
    return(

      <div>
        <div className="nav-bar">
          <a href=" ">Home</a>
          <Search
            filterUpdate={this.filterUpdate.bind(this)}
          />
        </div>
          <MovieList
            data={this.props.data}
            filterTitle={this.state.filterTitle}
            filterGenre={this.state.filterGenre}
            selectMovie={this.selectMovie.bind(this)}
          />

          <ReviewList
            data={this.props.data}
            selectedMovie={this.state.selectedMovie}
          />
      </div>
    )
  }

}


export default App;
