import 'mocha';
import {expect} from 'chai';
import {Pokedex} from '../src/ejercicio-1/pokedex';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {tipoPokemon} from '../src/ejercicio-1/pokemon';
import {Combat} from '../src/ejercicio-1/combat';

describe('Ejercicio-1: Pokedex y Combat', () => {
  it('Comprobar Pikachu y Blastoise', () => {
    const pokedex :Pokedex = new Pokedex([
      'Pikachu',
      new Pokemon('Pikachu', 12, 15, tipoPokemon.electrico, 45, 12, 14, 500),
    ]);

    pokedex.addPokemon([
      'Blastoise',
      new Pokemon('Blastoise', 12, 15, tipoPokemon.agua, 55, 82, 94, 550),
    ]);

    expect(pokedex.print()).to.be.equal('Pikachu\nBlastoise\n');
  });

  it('Comprobar Pokedex vacía', () => {
    const pokedex :Pokedex = new Pokedex();
    expect(pokedex.print()).to.be.equal(undefined);
  });

  it('Comprobar combate', () => {
    const combate :Combat = new Combat(
        new Pokemon('Pikachu', 12, 15, tipoPokemon.electrico, 45, 12, 14, 500),
        new Pokemon('Blastoise', 12, 15, tipoPokemon.agua, 60, 12, 14, 700),
    );
    expect(combate.start()).to.be.equal(`Pikachu gana el combate con 375 HP`);
  });
});
