import React, { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import ReviewList from './components/ReviewList';
import Search from './components/Search';
import Footer from './components/Footer';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filterTitle: '',
      filterGenre: '',
      selectedMovie: -1,
      clicked: false
    }
  }

  filterUpdate(title, genre) {
    this.setState({
      filterTitle: title,
      filterGenre: genre,
      clicked: false,
      selectedMovie: -1
    })
  }

  selectMovie(id, title) {
    this.setState({
      selectedMovie: id,
      filterTitle: title,
      clicked: true
    })
  }

  render() {
    return(

      <div className="main-container">
        <div className="nav-bar">
          <a href="/home">UReview</a>
          <Search
            filterUpdate={this.filterUpdate.bind(this)}
          />
        </div>
          <MovieList
            data={this.props.data}
            filterTitle={this.state.filterTitle}
            filterGenre={this.state.filterGenre}
            selectMovie={this.selectMovie.bind(this)}
            clicked={this.state.clicked}
          />

          <ReviewList
            data={this.props.data}
            selectedMovie={this.state.selectedMovie}
          />

          <Footer/>
      </div>
    )
  }

}


export default App;
