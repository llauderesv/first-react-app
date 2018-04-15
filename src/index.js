import React, { Component } from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import CommentBox from "./components/comment-box";
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

const Textarea = props => {
  return (
    <div className="form-group">
      <textarea
        id="posts"
        className="form-control"
        name="post"
        cols="10"
        rows={props.rows}
        placeholder={props.placeholder}
      />
    </div>
  );
};

const Avatar = props => {
  return (
    <div className="avatar">
      <p className="user-name">{props.name}</p>
    </div>
  );
};

const Comments = props => {
  return (
    <div className="card-view-comment">
      <p className="date-comment">{props.data.commentDate}</p>
      <Avatar name={props.data.name} />
      <p className="comment">{props.data.comment}</p>
    </div>
  );
};

const LikesComments = props => {
  return (
    <div>
      <div className="likes-comments-container">
        <p className="likes">
          Likes <span className="likes-val">{props.likes}</span>
        </p>
        <p onClick={props.handleShowComment} className="comments">
          {props.isShow ? "Hide Comments" : "Comments"}{" "}
          <span className="comments-val">{props.comments.length}</span>
        </p>
      </div>
      {props.isShow
        ? props.comments.map(data => <Comments key={data.key} data={data} />)
        : ""}
    </div>
  );
};

const Posts = props => {
  return (
    <div className="card-view">
      <p className="date-posted">{props.post.datePosted}</p>
      <Avatar name={props.post.name} />
      <p className="posts">{props.post.post}</p>
      <LikesComments
        likes={props.post.likes}
        comments={props.post.comments}
        isShow={props.post.isShowComments}
        handleShowComment={props.handleShowComment}
      />
      <CommentBox
        name="comment"
        placeholder="Write a Comment"
        onKeyPress={props.onKeyPress}
      />
    </div>
  );
};

class NewsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          key: 1,
          datePosted: moment().format("MM/DD/YYYY"),
          name: "Vincent Llauderes",
          avatar: null,
          post:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia neque officiis exercitationem, a explicabo! Quae, dicta. Fugiat, asperiores reprehenderit. Quibusdam molestiae quo tempore, ut quos vitae commodi temporibus aut.",
          likes: 10,
          isShowComments: false,
          comments: [
            {
              key: 1,
              postId: 1,
              name: "Vianca",
              commentDate: moment().format("MM/DD/YYYY"),
              comment:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia neque officiis exercitationem, a explicabo! Quae, dicta. Fugiat, asperiores reprehenderit. Quibusdam molestiae quo tempore, ut quos vitae commodi temporibus aut."
            },
            {
              key: 2,
              postId: 1,
              name: "Vianca",
              commentDate: moment().format("MM/DD/YYYY"),
              comment:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia neque officiis exercitationem, a explicabo! Quae, dicta. Fugiat, asperiores reprehenderit. Quibusdam molestiae quo tempore, ut quos vitae commodi temporibus aut."
            }
          ]
        },
        {
          key: 2,
          datePosted: moment().format("MM/DD/YYYY"),
          name: "Bill Gates",
          avatar: null,
          post:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia neque officiis exercitationem, a explicabo! Quae, dicta. Fugiat, asperiores reprehenderit. Quibusdam molestiae quo tempore, ut quos vitae commodi temporibus aut.",
          likes: 5,
          isShowComments: false,
          comments: [
            {
              key: 1,
              postId: 2,
              name: "Vianca",
              commentDate: moment().format("MM/DD/YYYY"),
              comment:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia neque officiis exercitationem, a explicabo! Quae, dicta. Fugiat, asperiores reprehenderit. Quibusdam molestiae quo tempore, ut quos vitae commodi temporibus aut."
            },
            {
              key: 2,
              postId: 2,
              name: "Vianca",
              commentDate: moment().format("MM/DD/YYYY"),
              comment:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia neque officiis exercitationem, a explicabo! Quae, dicta. Fugiat, asperiores reprehenderit. Quibusdam molestiae quo tempore, ut quos vitae commodi temporibus aut."
            },
            {
              key: 3,
              postId: 2,
              name: "Vianca",
              commentDate: moment().format("MM/DD/YYYY"),
              comment:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia neque officiis exercitationem, a explicabo! Quae, dicta. Fugiat, asperiores reprehenderit. Quibusdam molestiae quo tempore, ut quos vitae commodi temporibus aut."
            }
          ]
        },
        {
          key: 3,
          datePosted: moment().format("MM/DD/YYYY"),
          name: "Steve Jobs",
          avatar: null,
          post:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia neque officiis exercitationem, a explicabo! Quae, dicta. Fugiat, asperiores reprehenderit. Quibusdam molestiae quo tempore, ut quos vitae commodi temporibus aut.",
          likes: 20,
          isShowComments: false,
          comments: [
            {
              key: 1,
              postId: 3,
              name: "Vianca",
              commentDate: moment().format("MM/DD/YYYY"),
              comment:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia neque officiis exercitationem, a explicabo! Quae, dicta. Fugiat, asperiores reprehenderit. Quibusdam molestiae quo tempore, ut quos vitae commodi temporibus aut."
            },
            {
              key: 2,
              postId: 3,
              name: "Vianca",
              commentDate: moment().format("MM/DD/YYYY"),
              comment:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia neque officiis exercitationem, a explicabo! Quae, dicta. Fugiat, asperiores reprehenderit. Quibusdam molestiae quo tempore, ut quos vitae commodi temporibus aut."
            },
            {
              key: 3,
              postId: 3,
              name: "Vianca",
              commentDate: moment().format("MM/DD/YYYY"),
              comment:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia neque officiis exercitationem, a explicabo! Quae, dicta. Fugiat, asperiores reprehenderit. Quibusdam molestiae quo tempore, ut quos vitae commodi temporibus aut."
            },
            {
              key: 4,
              postId: 3,
              name: "Vianca",
              commentDate: moment().format("MM/DD/YYYY"),
              comment:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quia neque officiis exercitationem, a explicabo! Quae, dicta. Fugiat, asperiores reprehenderit. Quibusdam molestiae quo tempore, ut quos vitae commodi temporibus aut."
            }
          ]
        }
      ]
    };
    this.submitPost = this.submitPost.bind(this);
  }

  submitPost() {
    this.setState({
      posts: this.state.posts.concat({
        name: "Guess User",
        avatar: null,
        post: document.getElementById("posts").value,
        datePosted: moment().format("MM/DD/YYYY"),
        likes: 0,
        comments: [],
        isShowComments: false
      })
    });
    document.getElementById("posts").value = "";
  }

  handleComment(id, event) {
    if (event.key === "Enter") {
      const posts = this.state.posts;
      posts[id].comments.push({
        key: posts[id].comments.length + 1,
        postId: id,
        name: "Guess User",
        commentDate: moment().format("MM/DD/YYYY"),
        comment: event.target.value
      });

      this.setState({
        posts
      });
    }
  }

  handleShowComment(id) {
    const posts = this.state.posts;
    posts[id].isShowComments = posts[id].isShowComments ? false : true;

    this.setState({
      posts
    });
  }

  displayPosts() {
    return this.state.posts.map((data, index) => {
      return (
        <Posts
          key={data.key}
          onKeyPress={this.handleComment.bind(this, index)}
          handleShowComment={this.handleShowComment.bind(this, index)}
          post={data}
        />
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Introduction to ReactJS</h1>
            <form action="#">
              <Textarea placeholder={"Write a Post"} />
              <SubmitButton onClick={this.submitPost} rows="3" />
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
