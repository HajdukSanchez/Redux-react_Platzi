import React, { Component } from "react";
import "../../assets/styles/components/Users.css";

import { connect } from "react-redux";
import * as usersActions from "../../actions/usersActions";

import Loader from "../Loader";
import Error from "../Error";
import Table from "./Table";

class Users extends Component {
  async componentDidMount() {
    if (!this.props.users.length) await this.props.fetchUsers();
  }

  render() {
    if (this.props.loading) return <Loader />;
    if (this.props.error) return <Error message={this.props.error} />;
    return <Table title='Users' />;
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducers;
};

// The first parameter is all the reducers the component is going to use
export default connect(mapStateToProps, usersActions)(Users);
