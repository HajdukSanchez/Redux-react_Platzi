import React from "react";
import "../assets/styles/containers/App.css";

const App = () => {
  const addRows = () => [
    <tr>
      <td>Jozek</td>
      <td>hajduksanchez.dev@gmail.com</td>
      <td>hajduk-sanchez.com</td>
    </tr>,
    <tr>
      <td>Andrzej</td>
      <td>hajduksanchez.dev@gmail.com</td>
      <td>hajduk-sanchez.com</td>
    </tr>,
  ];

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
        <tbody>{addRows()}</tbody>
      </table>
    </div>
  );
};

export default App;
