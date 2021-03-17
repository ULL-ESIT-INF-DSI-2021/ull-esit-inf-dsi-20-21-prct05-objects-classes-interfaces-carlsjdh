import {Pokemon} from './pokemon';

type pokedexInfo = [string, Pokemon];

export class Pokedex {
  /**
   * Constructor de una Pokedex
   * @param Pokemons Array de Pokemons para almacenar
   */
  constructor(...Pokemons: pokedexInfo[]) {
    Pokemons.forEach((Creature) => {
      this[Creature[0]] = Creature[1];
    });
  }
  /**
   * Print(), imprime información de los Pokemons
   * @returns En caso de estar vacía devuelve `undefined`
   * , si tiene Pokemons dentro devuelve un string con los
   * pokemons que tenga
   */
  print() :string | undefined {
    let result :string = ``;
    Object.keys(this).forEach((key) => {
      this[key].print();
      result += this[key].getNombre() + `\n`;
    });
    if (result !== ``) {
      return result;
    } else {
      return undefined;
    }
  };
  /**
   * addPokemon, añade pokemons
   * @param Pokemons Pokemons que quieres introducir en formato
   * array
   */
  addPokemon(...Pokemons: pokedexInfo[]) {
    Pokemons.forEach((Creature) => {
      this[Creature[0]] = Creature[1];
    });
  }
};

