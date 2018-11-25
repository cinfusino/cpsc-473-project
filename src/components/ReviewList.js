import React from "react";
import ReviewForm from "./ReviewForm"
export default class ReviewList extends React.Component {

  state = {
    test: [{author: "", title: "", rating: "", review: "", id: 0}]
  }

  onSubmit = (model) => {
    model.id = +new Date();
    this.setState({
      test: [model, ...this.state.test]
    })
  }

  render() {
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
                    data = {this.state.test}
        />
      </div>
    )
  }
}
