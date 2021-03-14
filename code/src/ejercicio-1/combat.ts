import {Pokemon, tipoPokemon} from './pokemon';


class Combat {
  private pokemon1 :Pokemon;
  private pokemon2 :Pokemon;
  constructor( pokemon1 :Pokemon, pokemon2 :Pokemon ) {
    this.pokemon1 = pokemon1;
    this.pokemon2 = pokemon2;
  }


  private daño(ataque :number, defensa :number, efectividad :number) :number {
    return (50.0 * (ataque / defensa ) * efectividad );
  }

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
    return -1;
  }
  start() {
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
    } else {
      resultado = `${this.pokemon2.nombre} cae en combate`;
    }
    console.log(resultado);
  }
};

const combate :Combat = new Combat(
    new Pokemon('Pikachu', 12, 15, tipoPokemon.electrico, 45, 12, 14, 500),
    new Pokemon('Blastoise', 12, 15, tipoPokemon.agua, 60, 12, 14, 700),
);

combate.start();
