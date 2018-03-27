import React, { Component } from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import "./scss/main.scss";

const SubmitButton = props => {
  return (
    <button
      onClick={props.onClick}
      className="btn btn-primary btn-md"
      type="button"
    >
      Submit Post
    </button>
  );
};

const Textarea = () => {
  return (
    <div className="form-group">
      <textarea
        id="posts"
        className="form-control"
        name="post"
        cols="10"
        rows="3"
        placeholder="Write a post"
      />
    </div>
  );
};

const Posts = props => {
  return (
    <div className="card card-inverse">
      <div className="card-block">
        <p className="card-text">{props.data}</p>
      </div>
    </div>
  );
};

class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: ["Test", "Test 1", "Test 2"]
    };

    this.submitPost = this.submitPost.bind(this);
  }

  submitPost() {
    const postValue = document.getElementById("posts").value;

    this.setState({
      posts: this.state.posts.concat(postValue)
    });

    document.getElementById("posts").value = "";
  }

  displayPosts() {
    return this.state.posts.map(data => {
      return <Posts data={data} />;
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Welcome to ReactJS {moment().format("MM/DD/YYYY")}</h1>
            <form action="#">
              <Textarea />
              <SubmitButton onClick={this.submitPost} />
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">{this.displayPosts()}</div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<NewsFeed />, document.getElementById("feed"));
