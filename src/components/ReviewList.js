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
        <li className="review_Item" key={review.id}>
          <ul>
            <li className="title_Review">Title: {review.reviewTitle} </li>
            <li className="rating_Review">Rating: {review.rating} </li>
            <li className="author_Review">Author: {review.reviewAuthor}</li>
            <li>Review:<p>{review.reviewText}</p></li>
          </ul>
        </li>
      )
    })

    const formList = this.state.reviews
    .map(formInput => {
      return(
        <li className="review_Item"key={formInput.id}>
          <ul>
            <li className="title_Review">Title: {formInput.reviewTitle} </li>
            <li className="rating_Review">Rating: {formInput.rating} </li>
            <li className="author_Review">Author: {formInput.reviewAuthor}</li>
            <li>Review:<p>{formInput.reviewText}</p></li>
          </ul>
        </li>
      )
    })
    return (
      <div>
        <ul className="review_List">
          {formList}
          {reviewList}

        </ul>

        <ReviewForm onSubmit={this.addReview} />
      </div>
    )
  }
}
