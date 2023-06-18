import React from "react";

function MenuItem({ image, name, rating }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>{rating}</p>
    </div>
  );
}

export default MenuItem;
