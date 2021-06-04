import React from "react";
import "../assets/styles/components/Error.css";

const Error = (props) => (
  <div className='container'>
    <h1>Error Page</h1>
    <p className='zoom-area'>{props.message}</p>
  </div>
);

export default Error;
