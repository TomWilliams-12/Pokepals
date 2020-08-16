import React, { setState, useState, Component } from "react";
import "regenerator-runtime/runtime";
import Results from "./Results";
import Pokemon from "./Pokemon";
import { render } from "react-dom";

var Pokedex = require("pokedex-promise-v2");
var MyPokedex = new Pokedex();

const Form = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  const fetchPokemon = () => {
    if (search === "") {
      alert("you need to search for a pokemon");
    } else {
      MyPokedex.getPokemonByName(search) // with Promise
        .then((response) => {
          setPokemon(response);
          console.log(response);
        })
        .catch((error) => {
          console.log("There was an ERROR: ", error);
          alert("this pokemon doesnt exist");
        });
    }
  };

  const randomPokemon = () => {
    const randomNumber = Math.floor(Math.random() * 807);
    MyPokedex.getPokemonByName(randomNumber)
      .then((response) => {
        setPokemon(response);
      })
      .catch((error) => {
        console.log("There was an ERROR", error);
      });
  };

  return (
    <div className="form-container">
      <form
        className="form-search"
        onSubmit={(e) => {
          e.preventDefault();
          fetchPokemon();
        }}
      >
        <label htmlFor="pokemonInput">
          <input
            onChange={(e) => setSearch(e.target.value)}
            id="pokemonInput"
            placeholder="Type in your Pokemon"
          />
        </label>
        <input type="submit" value="I Choose..." />
      </form>
      <form
        className="form-random"
        onSubmit={(e) => {
          e.preventDefault();
          randomPokemon();
        }}
      >
        <input type="submit" value="You Choose..." />
      </form>
      <Pokemon pokemon={pokemon} />
    </div>
  );
};

export default Form;
