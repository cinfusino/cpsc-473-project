import React from "react";
import ReviewForm from "./ReviewForm"
import shortid from 'shortid';
export default class ReviewList extends React.Component {

  state = {
    test: []
  }

  onSubmit = (model) => {
    model.id = +new Date();
    this.setState({
      test: [model, ...this.state.test]
    })
  }

  render() {

    const reviewList = this.state.test.map((reviews) => {
        let id = shortid.generate();
        if (reviews.author == "") {
          return <li key = "100"></li>
        }
        return (
          <li key = {id}>
            <ul>
              <li>{id}</li>
              <li>Author: {reviews.author}</li>
              <li>Title: {reviews.title}</li>
              <li>Rating: {reviews.rating}</li>
              <li>Review: {reviews.review}</li>
            </ul>
          </li>
        )
      });

    return (
      <div>
        <ReviewForm title = "Add a Review"
                    model = {[
                      {key: "author", label:"Author", props: {required: true}},
                      {key: "title", label: "Title", props: {required: true}},
                      {key: "rating", label: "Rating", type: "number", props: {required: true}},
                      {key: "review", label: "Review"}
                    ]}
                    onSubmit = {(model) => {this.onSubmit(model)}}
        />
        <ul>
          {reviewList}
        </ul>
      </div>
    )
  }
}
