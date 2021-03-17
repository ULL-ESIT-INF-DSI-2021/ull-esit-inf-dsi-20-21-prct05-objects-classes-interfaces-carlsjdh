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
  /**
   * Constructor para generar un Pokemon
   * @param nombre Nombre del pokemon
   * @param peso Peso del Pokemon
   * @param altura Altura del Pokemon
   * @param tipo Tipo del Pokemon
   * @param ataque Ataque del Pokemon
   * @param defensa Defensa del Pokemon
   * @param velocidad Velocidad del Pokemon
   * @param hp Vida máxima del Pokemon
   */
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
  /**
   * getNombre
   * @returns Devuelve el nombre del Pokemon
   */
  getNombre() {
    return this.nombre;
  };
  /**
   * print(), imprime información del Pokemon
   */
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

