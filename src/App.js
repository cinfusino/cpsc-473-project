import React, { Component } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import ReviewList from './components/ReviewList';
import Search from './components/Search';
class App extends Component {

  constructor(props) {
    super(props);
    console.log(window.location.href)
    this.state = {
      filterTitle: '',
      filterGenre: '',
    }
  }

  filterUpdate(title, genre) {
    this.setState({
      filterTitle: title,
      filterGenre: genre
    })
  }

  rerender(stateReset) {
    window.location.reload();
  }

  render() {
    if (window.location.href === "http://localhost:3000/") {
      return(
        <div>
          <div className="nav-bar">
            <a onClick={this.rerender} href="#Home">Home</a>
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
    if (window.location.href === "http://localhost:3000/#Home") {
      //render() {
        return(
          <div>
            <a onClick={this.rerender} href="/">Back</a>
            <ReviewList />
          </div>
        )
    }
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
