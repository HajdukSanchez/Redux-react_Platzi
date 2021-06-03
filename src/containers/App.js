import React from "react";
import "../assets/styles/containers/App.css";

const App = () => {
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
        <tbody>
          <tr>
            <td>Jozek</td>
            <td>hajduksanchez.dev@gmail.com</td>
            <td>hajduk-sanchez.com</td>
          </tr>
          <tr>
            <td>Andrzej</td>
            <td>hajduksanchez.dev@gmail.com</td>
            <td>hajduk-sanchez.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default App;
