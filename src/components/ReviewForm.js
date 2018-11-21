import React from "react";
import shortid from "shortid";

const initialState = {
  reviewAuthor:'',
  rating: '',
  reviewTitle:'',
  reviewText:'',

  authorError:'',
  titleError:'',
  ratingError:'',
  textError:''
}

export default class ReviewForm extends React.Component {

  state = initialState;

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  validate = () => {
    let authorError = "";
    let titleError = "";
    let ratingError = "";
    let textError = "";

    if (!this.state.reviewAuthor) {
      authorError = "ERROR: Author cannot be blank.";
    }
    if (!this.state.reviewTitle) {
      titleError = "ERROR: Title cannot be blank.";
    }
    if (!this.state.rating) {
      ratingError = "ERROR: Rating cannot be blank.";
    }
    if (!this.state.reviewText) {
      textError = "ERROR: Text cannot be blank.";
    }

    if (authorError || titleError || ratingError || textError) {
      this.setState({authorError, titleError, ratingError, textError});
      return false;
    }
    this.setState({authorError, titleError, ratingError, textError});
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.props.onSubmit({
        id: shortid.generate(),
        reviewAuthor: this.state.reviewAuthor,
        rating: this.state.rating,
        reviewTitle: this.state.reviewTitle,
        reviewText: this.state.reviewText,
        complete: false,

      });
    }

  };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="reviewAuthor"
          value={this.state.reviewAuthor}
          onChange={this.handleChange}
          placeholder="Author"
        />
        <div style={{fontSize: 12, color:"red"}}>
          {this.state.authorError}
        </div>
        <input
          name="reviewTitle"
          value={this.state.reviewTitle}
          onChange={this.handleChange}
          placeholder="Title"
        />
        <div style={{fontSize: 12, color:"red"}}>
          {this.state.titleError}
        </div>
        <input
          name="rating"
          type="number"
          value={this.state.rating}
          onChange={this.handleChange}
          placeholder="Rating (0-100)"
        />
        <div style={{fontSize: 12, color:"red"}}>
          {this.state.ratingError}
        </div>
        <textarea
          name="reviewText"
          value={this.state.reviewText}
          onChange={this.handleChange}
          placeholder="Review"
        />
        <div style={{fontSize: 12, color:"red"}}>
          {this.state.textError}
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
