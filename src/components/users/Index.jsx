import React, { Component } from "react";
import "../../assets/styles/components/Users.css";

import Loader from "../Loader";

import { connect } from "react-redux";
import * as usersActions from "../../actions/usersActions";

class Users extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  addRows = () =>
    this.props.users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ));

  render() {
    if (this.props.loading) return <Loader />;
    return (
      <div>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          {/* We add the JSX into our HTML */}
          <tbody>{this.addRows()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducers;
};

// The first parameter is all the reducers the component is going to use
export default connect(mapStateToProps, usersActions)(Users);
