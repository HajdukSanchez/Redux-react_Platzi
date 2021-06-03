import React, { Component } from "react";
import "../assets/styles/containers/App.css";

import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({ users: response.data });
  }

  addRows = () =>
    this.state.users.map((user) => (
      <tr key={user.id}>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.website}</td>
      </tr>
    ));

  render() {
    return (
      <div className='margin'>
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
