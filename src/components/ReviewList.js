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
            <ul className="review_Item">
              <li className="rating_Review">Rating: {reviews.rating}/100</li>
              <li className="title_Review"> - {reviews.title}</li>
              <li className="review_Review"> {reviews.review}</li>
              <li className="author_Review">Reviewed by: {reviews.author}</li>
            </ul>
          </li>
        )
      });

    return (
      <div>
        <ReviewForm title = "Add a Review"
                    model = {[
                      {key: "author", label:"Author:", props: {required: true}},
                      {key: "title", label: "Title:", props: {required: true}},
                      {key: "rating", label: "Rating:", type: "number", props: {required: true}},
                      {key: "review", label: "Review:"}
                    ]}
                    onSubmit = {(model) => {this.onSubmit(model)}}
        />
        <ul className = "review_List">
          {reviewList}
        </ul>
      </div>
    )
  }
}
