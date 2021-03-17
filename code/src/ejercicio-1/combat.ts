import {Pokemon, tipoPokemon} from './pokemon';

/**
 * @class Combat
 */
export class Combat {
  private pokemon1 :Pokemon;
  private pokemon2 :Pokemon;
  /**
   * Constructor de la clase combat
   * @param pokemon1 Pokemon 1 para el combate
   * @param pokemon2 Pokemon 2 para el combate
   */
  constructor( pokemon1 :Pokemon, pokemon2 :Pokemon ) {
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
  }

  /**
   * Daño que genera un pokemon
   * @param ataque Magnitud de ataque
   * @param defensa Magnitud de defensa
   * @param efectividad Magnitudad de efectividad
   * @returns Devuelve el daño que genera
   */
  private daño(ataque :number, defensa :number, efectividad :number) :number {
    return (50.0 * (ataque / defensa ) * efectividad );
  }

  /**
   * Combate pokemon
   * @param tipoAliado Tipo del pokemon aliado
   * @param ataqueAliado Magnitud del ataque del pokemon aliado
   * @param tipoEnemigo Tipo del pokemon enemigo
   * @param defensaEnemigo Magnitud de la defensa del pokemon enemigo
   * @returns Devuelve el daño generado teniendo en cuenta el tipo de pokemons
   */
  private combatePokemon(tipoAliado :tipoPokemon, ataqueAliado :number,
      tipoEnemigo :tipoPokemon, defensaEnemigo :number ) {
    switch (tipoAliado) {
      case tipoPokemon.fuego:
        if (tipoAliado === tipoEnemigo) {
          return this.daño(ataqueAliado, defensaEnemigo, 1 );
        } else if (tipoEnemigo === tipoPokemon.agua) {
          return this.daño(ataqueAliado, defensaEnemigo, 0.5 );
        } else if (tipoEnemigo === tipoPokemon.hierba) {
          return this.daño(ataqueAliado, defensaEnemigo, 2 );
        } else if (tipoEnemigo === tipoPokemon.electrico) {
          return this.daño(ataqueAliado, defensaEnemigo, 1 );
        } else {
          return this.daño(ataqueAliado, defensaEnemigo, 0 );
        }
      case tipoPokemon.agua:
        if (tipoAliado === tipoEnemigo) {
          return this.daño(ataqueAliado, defensaEnemigo, 1 );
        } else if (tipoEnemigo === tipoPokemon.electrico) {
          return this.daño(ataqueAliado, defensaEnemigo, 0.5 );
        } else if (tipoEnemigo === tipoPokemon.fuego) {
          return this.daño(ataqueAliado, defensaEnemigo, 2 );
        } else if (tipoEnemigo === tipoPokemon.hierba) {
          return this.daño(ataqueAliado, defensaEnemigo, 0.5 );
        } else {
          return this.daño(ataqueAliado, defensaEnemigo, 0 );
        }
      case tipoPokemon.hierba:
        if (tipoAliado === tipoEnemigo) {
          return this.daño(ataqueAliado, defensaEnemigo, 1 );
        } else if (tipoEnemigo === tipoPokemon.electrico) {
          return this.daño(ataqueAliado, defensaEnemigo, 1 );
        } else if (tipoEnemigo === tipoPokemon.fuego) {
          return this.daño(ataqueAliado, defensaEnemigo, 0.5 );
        } else if (tipoEnemigo === tipoPokemon.agua) {
          return this.daño(ataqueAliado, defensaEnemigo, 2 );
        } else {
          return this.daño(ataqueAliado, defensaEnemigo, 0 );
        }
      case tipoPokemon.electrico:
        if (tipoAliado === tipoEnemigo) {
          return this.daño(ataqueAliado, defensaEnemigo, 1 );
        } else if (tipoEnemigo === tipoPokemon.agua) {
          return this.daño(ataqueAliado, defensaEnemigo, 2 );
        } else if (tipoEnemigo === tipoPokemon.fuego) {
          return this.daño(ataqueAliado, defensaEnemigo, 1 );
        } else if (tipoEnemigo === tipoPokemon.hierba) {
          return this.daño(ataqueAliado, defensaEnemigo, 1 );
        } else {
          return this.daño(ataqueAliado, defensaEnemigo, 0 );
        }
    }
  }
  /**
   * Start, comienza el combate
   * @returns Devuelve un string de quien ha ganado el combate
   */
  start() :string {
    let hpCombatePokemon1 :number = this.pokemon1.hp;
    let hpCombatePokemon2 :number = this.pokemon2.hp;
    let turno :boolean = true;
    console.log(
        `---------Combate Pokemon---------\n\n` +
        `/---------ESTADO INCIAL---------/\n` +
        `  ${this.pokemon1.nombre} \n   HP: ${hpCombatePokemon1}\n` +
        `  ${this.pokemon2.nombre} \n   HP: ${hpCombatePokemon2}\n`+
        `/-------------------------------/\n`,
    );
    while ( (hpCombatePokemon1 >= 0) && (hpCombatePokemon2 >= 0) ) {
      console.log(
          `  ${this.pokemon1.nombre} \n   HP: ${hpCombatePokemon1}\n` +
          `  ${this.pokemon2.nombre} \n   HP: ${hpCombatePokemon2}\n`,
      );
      if (turno) {
        const dañoTurno1 :number = this.combatePokemon(this.pokemon1.tipo,
            this.pokemon1.ataque, this.pokemon2.tipo, this.pokemon2.defensa);
        console.log(
            `/---------------------------------/\n` +
            `   Turno de ${this.pokemon1.nombre}\n`+
            `   ${this.pokemon1.nombre} causa ${dañoTurno1} de daño\n` +
            `/---------------------------------/\n`,
        );
        hpCombatePokemon2 -= dañoTurno1;
        turno = !turno;
      } else {
        const dañoTurno2 :number = this.combatePokemon(this.pokemon2.tipo,
            this.pokemon2.ataque, this.pokemon1.tipo, this.pokemon1.defensa);
        console.log(
            `/---------------------------------/\n` +
          `  Turno de ${this.pokemon2.nombre}\n`+
          `  ${this.pokemon2.nombre} causa ${dañoTurno2} de daño\n` +
          `/---------------------------------/\n`,
        );
        hpCombatePokemon1 -= dañoTurno2;
        turno = !turno;
      }
    }

    let resultado = ``;

    if (hpCombatePokemon1 <= 0) {
      resultado = `${this.pokemon1.nombre} cae en combate`;

      console.log(resultado);

      return `${this.pokemon2.nombre} ` +
      `gana el combate con ${hpCombatePokemon2} HP`;
    } else {
      resultado = `${this.pokemon2.nombre} cae en combate`;

      console.log(resultado);

      return `${this.pokemon1.nombre} gana` +
      ` el combate con ${hpCombatePokemon1} HP`;
    }
  }
};
