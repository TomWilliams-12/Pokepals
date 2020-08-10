import React from "react";
import { Link } from "@reach/router";

export default function Pokemon({ id, name, type, moves, image }) {
  return (
    <div className="pokemon-container">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <h1>
          {id} : {name}
        </h1>
      </div>
    </div>
  );
}
