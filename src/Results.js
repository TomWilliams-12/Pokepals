import React, { useState, useEffect } from "react";
import Pokemon from "./Pokemon";

const Results = ({ pokemon }) => {
  return (
    <div className="search">
      <Pokemon
        name={pokemon.name}
        id={pokemon.id}
        // type={pokemon.types.type.name}
        // moves={pokemon.moves}
        // image={pokemon.sprites.front_default}
      />
    </div>
  );
};

export default Results;
