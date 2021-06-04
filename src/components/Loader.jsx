import React from "react";
import "../assets/styles/components/Loader.css";

const Loader = () => (
  <div className='center'>
    <div className='lds-ripple'>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default Loader;
