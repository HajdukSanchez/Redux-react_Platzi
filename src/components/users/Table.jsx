import React from "react";
import { connect } from "react-redux";

const Table = (props) => {
  // We can also send the user array, with params of using the redux connection
  // The two ways are correct
  const addRows = () =>
    props.users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ));

  return (
    <div>
      <h2>{props.title}</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>{addRows()}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (reducers) => {
  return reducers.usersReducers;
};

export default connect(mapStateToProps)(Table);
