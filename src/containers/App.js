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
  addRows = () =>
    this.state.users.map((user) => (
      <tr key={user.name}>
        <td>{user.name}</td>
        <td>{user.mail}</td>
        <td>{user.link}</td>
      </tr>
    ));

  async componentDidMount() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState = {
      users: [
        {
          name: "Jozek",
          mail: "jozek@gmail.com",
          link: "https://hajduk.com",
        },
        {
          name: "Andrzej",
          mail: "jozekHajduk@gmail.com",
          link: "https://hajdukJozek.com",
        },
      ],
    };
  }

  render() {
    return (
      <div className='margin'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Mail</th>
              <th>Link</th>
            </tr>
          </thead>
          {/* We add the JSX into our HTML */}
          <tbody>{this.addRows()}</tbody>
        </table>
      </div>
    );
  }
}
