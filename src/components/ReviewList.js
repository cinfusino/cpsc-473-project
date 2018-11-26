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
    return (
      <div>
        
        <p>{JSON.stringify(this.state.reviews)}</p><br/>
        <ReviewForm onSubmit={this.addReview} />

      </div>
    )
  }
}
