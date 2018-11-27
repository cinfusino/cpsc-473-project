import React from 'react';

export default ({ data, filterTitle, filterGenre, selectMovie, clicked} ) => {
  const movieList = data
    .filter(movie => {
      //remove movies that do not match
      if (clicked) {
        console.log(clicked + "1")
        console.log(movie.title)
        console.log(filterTitle)
        console.log((movie.title.length == filterTitle.length), "Test")
        return movie.title.length == filterTitle.length
      }
      if (filterTitle == "" && filterGenre == "")
      {
        console.log(clicked + "2")
        return movie.title.toLowerCase().indexOf(filterTitle.toLowerCase()) >= 0
      }
      if (filterGenre != "" && filterTitle != "") {
        console.log(clicked + "3")
        const movie1 = movie.title.toLowerCase().indexOf(filterTitle.toLowerCase()) >= 0
        const movie2 = movie.genre.toLowerCase().indexOf(filterGenre.toLowerCase()) >= 0
        let movie3 = false
        if(movie1 && movie2) {
          movie3 = true
        }
        return movie3
      }
      if (filterGenre != ""){
        console.log(clicked + "4")
        return movie.genre.toLowerCase().indexOf(filterGenre.toLowerCase()) >= 0
      }
      if (filterTitle != "" && !clicked) {
        console.log(clicked + "5")
        return movie.title.toLowerCase().indexOf(filterTitle.toLowerCase()) >= 0
      }
      return false
    })
    .map(movie => {
      let avgRating = 0;
      for (let i = 0; i < movie.reviews.length;i++)
      {
        avgRating = avgRating + movie.reviews[i].rating;
      }

      avgRating = avgRating / movie.reviews.length;
      avgRating = avgRating.toFixed(2);

      return (
        <li onClick = {() => selectMovie(movie.id, movie.title.toLowerCase()) }key= {movie.id} className="movie-summary-container">
          <div className="movie-summary-left">
            <img alt={movie.title} height="200" width="200"src={movie.image}/>
          </div>
          <div className="movie-summary-right">
            <ul>
              <li>Title: {movie.title}</li>
              <li>Genre: {movie.genre}</li>
              <li>Length of Movie: {movie.movieLength} minutes </li>
              <li>Average Rating: {avgRating} /100</li>
              <li>Number of Reviews: {movie.reviews.length}</li>
            </ul>
          </div>
        </li>
      )
    })
  return(
    <ul  className="ul-movie-list">
      {movieList}
    </ul>
  );
}
