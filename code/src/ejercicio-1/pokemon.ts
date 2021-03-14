// eslint-disable-next-line no-unused-vars
export enum tipoPokemon {electrico, agua, hierba, fuego};

export class Pokemon {
  nombre :string;
  peso :number;
  altura :number;
  tipo :tipoPokemon;
  ataque :number;
  defensa :number;
  velocidad :number;
  hp :number;

  constructor(nombre :string, peso :number, altura :number, tipo :tipoPokemon
      , ataque :number, defensa :number, velocidad :number, hp :number) {
    this.nombre = nombre;
    this.peso = peso;
    this.altura = altura;
    this.tipo = tipo;
    this.ataque = ataque;
    this.defensa = defensa;
    this.velocidad = velocidad;
    this.hp = hp;
  }

  print() :void {
    console.log(`Pokemon llamado ${this.nombre}\n` +
    `Características:\n` +
    `- Peso: ${this.peso}\n` +
    `- Tipo: ${tipoPokemon[this.tipo]}\n` +
    `- Altura: ${this.altura}\n` +
    `- Ataque: ${this.ataque}\n` +
    `- Defensa: ${this.defensa}\n` +
    `- Velocidad: ${this.velocidad}\n`+
    `- hp: ${this.hp}\n`,
    );
  }
}

