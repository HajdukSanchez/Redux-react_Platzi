import React, { Component } from "react";
import { connect } from "react-redux";
import * as usersActions from "../../actions/usersActions";

class Posts extends Component {
  componentDidMount() {
    if (!this.props.users.length) this.props.fetchUsers();
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

const mapStateToProps = (reducers) => {
  return reducers.usersReducers;
};

export default connect(mapStateToProps, usersActions)(Posts);
