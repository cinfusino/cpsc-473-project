import React from "react";
import ReviewForm from "./ReviewForm"
export default class ReviewList extends React.Component {

  state = {
    reviews: []
  };

  addReview = (review) => {
    this.setState({
      reviews: [review, ...this.state.reviews]
    });
  }

  render() {
    const movieIndex = this.props.selectedMovie;
    if (movieIndex === -1) return null;

    const reviewList = this.props.data[movieIndex].reviews
    .map(review => {
      return(
        <li key={review.id}>
          <ul>
            <li>Title: {review.reviewTitle} </li>
            <li>Rating: {review.rating} </li>
            <li>Author: {review.reviewAuthor}</li>
            <li>Review:<p>{review.reviewText}</p></li>
          </ul>
        </li>
      )
    })


    return (
      <div>
        <ul>
          {reviewList}
        </ul>

        <ReviewForm onSubmit={this.addReview} />
      </div>
    )
  }
}
