import React, { Component } from "react";
import { connect } from "react-redux";

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

  render() {
    const key = this.props.match.params.id;
    const name = this.props.usersReducers.users[key].name;
    if (this.props.usersReducers.loading) return <Loader />;
    if (this.props.usersReducers.error) return <Error message={this.props.usersReducers.error} />;
    return (
      <div>
        <h2>Posts by {name}</h2>
        {/* This is the way to get the Params that we past by URL */}
        {key}
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
