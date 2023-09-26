"use strict";

const wrapper = document.querySelector(".wrapper");
const form = document.getElementById("form");

const poke = (...pokemon) => {
  try {
    pokemon.forEach(async (poke) => {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
      const res = await data.json();

      const html = `<div class="container">
      <img class="container__img" src="${res.sprites["front_shiny"]}">
      <span class="container__name">${
        res.name[0].toUpperCase() + res.name.slice(1)
      }</span>
      <img class="container__img-back" src="${res.sprites["back_shiny"]}">
      <span class="container__height">Height: ${res.height} feet</span>
      </div>`;

      wrapper.insertAdjacentHTML("afterbegin", html);

      return res;
    });
  } catch (error) {
    console.error(error);
  }
};

poke(
  "pikachu",
  "jigglypuff",
  "squirtle",
  "bulbasaur",
  "mew",
  "charmander",
  "snorlax",
  "eevee",
  "ditto",
  "mewtwo",
  "raichu",
  "dialga"
);
