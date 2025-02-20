import React from "react";
import { useState } from "react";

const Square = ({ value, onSquareClick }) => {
  return <button onClick={onSquareClick} className="square">{value}</button>;
};

export default Square;
