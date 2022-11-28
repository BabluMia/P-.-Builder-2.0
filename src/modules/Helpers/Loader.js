import React from 'react';
import { ClockLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div
      className="categorey-parent py-4 w-100  d-flex justify-content-center align-items-center"
      style={{ height: "100%" }}
    >
      <ClockLoader color="#000" />
    </div>
    );
};

export default Loader;