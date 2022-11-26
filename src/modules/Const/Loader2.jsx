import React from "react";
import { ClockLoader } from "react-spinners";
import "./Loader.css";

const Loader2 = () => {
  return (
    <div style={{width:'100%',height:'100%'}} className='main-load'>
      <div className="div-loader2">
        <ClockLoader color="#000" />
      </div>
    </div>
  );
};

export default Loader2;
