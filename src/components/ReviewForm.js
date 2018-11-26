import React from "react";
import ReactDOM from 'react-dom';
import shortid from "shortid";

export default class ReviewForm extends React.Component {

  state = {

  }

  constructor(props) {
    super(props);
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.props.onSubmit) this.props.onSubmit(this.state);
  }

  onChange = (e, key) => {
    this.setState({
      [key]: this[key].value
    })
  }

  renderForm = () => {
    let model = this.props.model;
    let formUI = model.map((m) => {
      let key = m.key;
      let type = m.type || "text";
      let props = m.props || {};

      return (
        <div key = {key} className = 'reviewForm'>
          <label className = 'reviewLabel' key = {"1" + m.key}
                 htmlFor = {m.key}>
                 {m.label}
          </label>
          <input {...props}
                 ref={(key) => {this[m.key] = key}}
                 className = 'reviewInput'
                 type = {type}
                 key = {"i" + m.key}
                 onChange = {(e) => {this.onChange(e, key)}}
          />
        </div>
      )
    });
    return formUI;
  }

  // renderReviews = () => {
  //   let data = this.props.data;
  //   let reviewList = data.map((reviews) => {
  //     return (
  //       <li key = {reviews.id}>
  //         <ul>
  //           <li>Author: {reviews.author}</li>
  //           <li>Title: {reviews.title}</li>
  //           <li>Rating: {reviews.rating}</li>
  //           <li>Review: {reviews.review}</li>
  //         </ul>
  //       </li>
  //     )
  //   });
  // }

  render() {
    const reviewList = this.props.data.map((reviews) => {
        if (reviews.author == "") {
          return <li key = "100"></li>
        }
        return (
          <li key = {reviews.id}>
            <ul>
              <li>Author: {reviews.author}</li>
              <li>Title: {reviews.title}</li>
              <li>Rating: {reviews.rating}</li>
              <li>Review: {reviews.review}</li>
            </ul>
          </li>
        )
      });
    let title = this.props.title || "Reviews";
    return (
      <div className = {this.props.className}>
        <h3>{title}</h3>
        <form className="review-form" onSubmit={(e) => {this.onSubmit(e)}}>
          {this.renderForm()}
          <div className="form-group">
            <button type="submit">Submit Review</button>
          </div>
        </form>
        <ul>
          {reviewList}
        </ul>
      </div>
    )
  }
}
