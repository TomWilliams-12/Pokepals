import React from "react";
import { Link } from "@reach/router";

export default function Pokemon({ id, name, type, moves, image }) {
  return (
    <Link to={`/details/${name}`} className="pokemon-container">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <h1>
          {id} : {name}
        </h1>
        <h2>Type: {type}</h2>
        <p>{moves}</p>
      </div>
    </Link>
  );
}
