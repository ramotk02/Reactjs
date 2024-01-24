import React from "react";

const Button = () => {
  const handleClick = () => {
    console.log("click");
  };
  return <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded opacity-75">Cick on me</button>;
};

export default Button;
