import React from "react";
function Pic({ imgSrc, onClick }) {
  return <button onClick={onClick}>{imgSrc}</button>;
}
export default Pic;
