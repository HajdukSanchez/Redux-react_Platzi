import React from "react";
import "../../assets/styles/components/Table.css";

import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Table = (props) => {
  // We can also send the user array, with params of using the redux connection
  // The two ways are correct
  const addRows = () =>
    props.users.map((user, key) => (
      <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
        <td className='table--center'>
          <Link to={`/posts/${key}`}>
            <FontAwesomeIcon icon={faEye} className='icon' />
          </Link>
        </td>
      </tr>
    ));

  return (
    <div>
      <h2>{props.title}</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th className='table--center'>Actions</th>
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
