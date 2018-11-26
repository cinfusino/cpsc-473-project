import React from 'react';

export default ({ data, filterTitle, filterGenre } ) => {
  const movieList = data
    .filter(movie => {
      //remove movies that do not match
      if (filterTitle == "" && filterGenre == "")
      {
        return movie.title.toLowerCase().indexOf(filterTitle) >= 0
      }
      if (filterGenre != "" && filterTitle != "") {
        const movie1 = movie.title.toLowerCase().indexOf(filterTitle) >= 0
        const movie2 = movie.genre.toLowerCase().indexOf(filterGenre) >= 0
        let movie3 = false
        if(movie1 && movie2) {
          movie3 = true
        }
        return movie3
      }
      if (filterGenre != ""){
        return movie.genre.toLowerCase().indexOf(filterGenre) >= 0
      }
      if (filterTitle != "") {
        return movie.title.toLowerCase().indexOf(filterTitle) >= 0
      }
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
        <li key= {movie.id} className="movie-summary-container">
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
