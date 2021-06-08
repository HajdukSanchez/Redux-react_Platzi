import React, { Component } from "react";
import { connect } from "react-redux";
import "../../assets/styles/components/Posts.css";

import * as usersActions from "../../actions/usersActions";
import * as postsActions from "../../actions/postsActions";

import Loader from "../Loader";
import Error from "../Error";

class Posts extends Component {
  async componentDidMount() {
    // We restructured the variables
    const {
      fetchUsers,
      getPostByUser,
      match: {
        params: { id },
      },
    } = this.props;
    if (!this.props.usersReducers.users.length) await fetchUsers();
    if (!("latestPostsKey" in this.props.usersReducers.users[id])) await getPostByUser(id);
  }

  addPosts = () => {
    const {
      usersReducers,
      usersReducers: { users },
      postsReducers,
      postsReducers: { posts },
      match: {
        params: { id },
      },
    } = this.props;
    if (!users.length) return;
    if (usersReducers.error) return;
    if (postsReducers.loading) {
      return <Loader />;
    }
    if (postsReducers.error) {
      return <Error message={postsReducers.error} />;
    }
    if (!posts.length) return <h2>This user doesn't posts yet</h2>; // If the user don't have posts
    if (!("latestPostsKey" in users[id])) return; // We don't return anything if the user don't have the posts key yet
    const { latestPostsKey } = users[id]; // We gave the posts key of the user
    return posts[latestPostsKey].map((post) => (
      <div className='pub-title'>
        <h3>{post.title}</h3>
        <h4>{post.body}</h4>
      </div>
    ));
  };

  render() {
    const key = this.props.match.params.id;
    const name = this.props.usersReducers.users[key].name;
    if (this.props.usersReducers.loading || this.props.postsReducers.loading) return <Loader />;
    if (this.props.usersReducers.error || this.props.postsReducers.error) return <Error message={this.props.usersReducers.error} />;
    return (
      <div>
        <h1>Posts by {name}</h1>
        {/* This is the way to get the Params that we past by URL */}
        {this.addPosts()}
      </div>
    );
  }
}

const mapStateToProps = ({ usersReducers, postsReducers }) => {
  return { usersReducers, postsReducers };
};

// We assigned a name to one of the functions that we get
const { fetchPostsByUser: getPostByUser } = postsActions;

// This is a const to gave multiples reducers
const mapDispatchToProps = {
  ...usersActions,
  getPostByUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
