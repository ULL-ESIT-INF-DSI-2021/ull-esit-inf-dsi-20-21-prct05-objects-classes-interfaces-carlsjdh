import {Pokemon} from './pokemon';
import {tipoPokemon} from './pokemon';

type pokedexInfo = [string, Pokemon];

class Pokedex {
  constructor(...Pokemons: pokedexInfo[]) {
    Pokemons.forEach((Creature) => {
      this[Creature[0]] = Creature[1];
    });
  }

  print() {
    Object.keys(this).forEach((key) => {
      this[key].print();
    });
  };

  addPokemon(...Pokemons: pokedexInfo[]) {
    Pokemons.forEach((Creature) => {
      this[Creature[0]] = Creature[1];
    });
  }
};


const pokedex :Pokedex = new Pokedex(['Pikachu',
  new Pokemon('Pikachu', 12, 15, tipoPokemon.electrico, 45, 12, 14, 500)]);

pokedex.addPokemon(['Blastoise',
  new Pokemon('Blastoise', 12, 15, tipoPokemon.agua, 55, 82, 94, 550)]);

pokedex.print();
