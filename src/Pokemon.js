import React from "react";
import { Link } from "@reach/router";

export default function Pokemon({ pokemon }) {
  return pokemon.length === 0 ? (
    <h1></h1>
  ) : (
    <div className="pokemon-container">
      <div className="image-container">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="info">
        <h1>
          {pokemon.id} : {pokemon.name}
        </h1>
      </div>
    </div>
  );
}
