 import React from "react";


 const Square = ({value}) => {
    const handleClick = () => {
        console.log('clicked')
    }
    return (
      <button onClick={handleClick} className="square">{value}</button>
    );
 }

 export default Square;