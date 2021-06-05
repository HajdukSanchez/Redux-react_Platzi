import React, { Component } from "react";
import { connect } from "react-redux";

import * as usersActions from "../../actions/usersActions";
import * as postsActions from "../../actions/postsActions";

class Posts extends Component {
  componentDidMount() {
    if (!this.props.usersReducers.users.length) this.props.fetchUsers();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Posts by {}</h2>
        {/* This is the way to get the Params that we past by URL */}
        {this.props.match.params.id}
      </div>
    );
  }
}

const mapStateToProps = ({ usersReducers, postsReducers }) => {
  return { usersReducers, postsReducers };
};

// This is a const to gave multiples reducers
const mapDispatchToProps = {
  ...usersActions,
  ...postsActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
