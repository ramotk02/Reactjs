import React from "react";

const Button = ({ handleClick }) => {
  return (
     <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2 opacity-75">
       Click on me
     </button>
  );
};
export default Button;
