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

    console.log("reviewAuthor:", this.state.reviewAuthor)
    console.log("rating:", this.state.rating)
    console.log("reviewTitle:", this.state.reviewTitle)
    console.log("reviewText:", this.state.reviewText)

    if (!this.state.reviewAuthor) {
      authorError = "ERROR: Author cannot be blank.";
      console.log("1");
    }
    if (!this.state.reviewTitle) {
      titleError = "ERROR: Title cannot be blank.";
      console.log("2");
    }
    if (!this.state.rating) {
      ratingError = "ERROR: Rating cannot be blank.";
      console.log("3");
    }
    if (this.state.rating < 0 || this.state.rating > 100 ) {
      ratingError = "ERROR: Rating must be between 0 and 100.";
    }
    if (!this.state.reviewText) {
      textError = "ERROR: Text cannot be blank.";
      console.log("4");
    }

    if (authorError || titleError || ratingError || textError) {
      console.log("Error somewhere");
      this.setState({authorError, titleError, ratingError, textError});
      return false;
    }

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
      });
    }

  };


  render() {
    return (
      <form className="reviewForm" onSubmit={this.handleSubmit}>
        <h3>Add a Review:</h3>
        <input
          name="reviewAuthor"
          className="reviewAuthor"
          value={this.state.reviewAuthor}
          onChange={this.handleChange}
          placeholder="Author"
        />
        <div style={{fontSize: 12, color:"red"}}>
          {this.state.authorError}
        </div>
        <input
          name="reviewTitle"
          className="reviewTitle"
          value={this.state.reviewTitle}
          onChange={this.handleChange}
          placeholder="Title"
        />
        <div style={{fontSize: 12, color:"red"}}>
          {this.state.titleError}
        </div>
        <input
          name="rating"
          className="rating"
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
          className="reviewText"
          value={this.state.reviewText}
          onChange={this.handleChange}
          placeholder="Review"
        />
        <div style={{fontSize: 12, color:"red"}}>
          {this.state.textError}
        </div>
        <div className="form-group">
          <button className="" type="submit">Submit</button>
        </div>
      </form>


    );
  }
}
