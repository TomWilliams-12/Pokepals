import React from "react";
import { Link } from "@reach/router";

export default function Pokemon({ pokemon }) {
  return (
    <div className="pokemon-container">
      <div className="image-container">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <div className="info">
        <h1>
          {pokemon.id} : {pokemon.name}
        </h1>
      </div>
    </div>
  );
}
