<h1> Práctica 5 - Objetos, clases e interfaces </h1>

<h2> Índice: </h2>

- [Ejercicio 1 - Pokedex](#ejercicio-1---pokedex)
  - [__Explicación:__](#explicación)
    - [_Clase Pokemon:_](#clase-pokemon)
    - [_Clase Pokedex:_](#clase-pokedex)
    - [_Clase Combat:_](#clase-combat)


# Ejercicio 1 - Pokedex
>A partir del Ejercicio 9 realizado en la Práctica 3, cree la estructura de clases e interfaces que considere oportuna para representar el siguiente escenario
Se pide crear una Pokedex donde se almacene la información relacionada con distintos Pokemons. Para cada Pokemon, se deben almacenar los siguientes elementos de información en la Pokedex:
> - Nombre del Pokemon
> - Peso y altura
> - Tipo
> - Estadísticas básicas: ataque, defensa, velocidad, daño máximo (HP).
> 
> Por último, diseñe una clase Combat que simule el combate entre dos Pokemons. Para ello, un objeto de dicha clase deberá ser construido con dos contrincantes. Además, reescriba la función del ejercicio 9 de la práctica 3 como un método de esta clase. Incluya también un método start dentro de la clase Combat que realice la simulación del combate. Este método se basará en lo siguiente:
> 
> - Se realizarán ataques entre los contrincantes hasta que el daño sufrido por uno de ellos sea igual o superior a su HP.
> - Se considera que el primero de los contrincantes que recibe un objeto de la clase Combat será siempre el primero en realizar un ataque.
> - El método deberá mostrar por pantalla la evolución del combate. Esto es, después de cada ataque se debe mostrar el estado de HP de cada contrincante.

## __Explicación:__
Tenemos que generar tres clases:
- `Pokemon`
- `Pokedex`
- `Combat`

### _Clase Pokemon:_

````typescript
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

  getNombre() {
    return this.nombre;
  };

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
````

Esta clase almacena la información básica de un pokemon tales como el `nombre` , `peso` , `altura`, `tipo`..... Además se ha implementado un método que muestra por pantalla información asociada al pokemon.  
Cabe destacar que se ha creado un tipo de dato llaamdo `tipoPokemon` que es basicamente un enum que contiene los posibles tipos que puede tener un pokemon.

### _Clase Pokedex:_

````typescript
type pokedexInfo = [string, Pokemon];

export class Pokedex {

  constructor(...Pokemons: pokedexInfo[]) {
    Pokemons.forEach((Creature) => {
      this[Creature[0]] = Creature[1];
    });
  }
 
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
 
  addPokemon(...Pokemons: pokedexInfo[]) {
    Pokemons.forEach((Creature) => {
      this[Creature[0]] = Creature[1];
    });
  }

  [propertyName: string]: Pokemon;
};
````

La clase Pokedex realmente es un colector de Pokemons. El constructor recibe como parametro un array de `pokedexInfo`, `pokedexInfo` no es más que una tupla de datos `string` y `Pokemon` poniendo el nombre y el objeto del pokemon.  
Esta se guarda dinamicamente en el objeto asignando el `string` al valor `pokemon`. Luego tenemos el método print que recorre todos los valores asociados a la pokedex y invoca el método `print` ya que recordemos que es un colector de objetos `Pokemon`. A su vez, se guarda un string con el valor obtenido del recorrido para devolver, en caso de que este valor string sea vacío devolverá un `undefined` ya que se interpreta que la `Pokedex` se encuentra vacía.


### _Clase Combat:_

````typescript
export class Combat {
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
  }

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

````
El constructor de esta clase consiste en pasar dos objetos de tipo `Pokemon` ya que al fin y al cabo será un enfrentamiento entre dos Pokemons, esta se guardan como atributos del objeto. A continuación, utilizamos los métodos generados en el ejercicio 9 de la práctica 3 que consistía en devolver el daño resultante entre dos pokemons cuyos parametros se basaban en las estadísticas de los pokemons dentro del combate.  
Estos métodos son:
- `combatePokemon`: Devuelve el daño que genera
- `daño`: Este método funciona en conjunto a `combatePokemon`, ya que devuelve realmente el daño pero con la efectividad según el tipo de Pokemons ya previamente establecida.

El último método que queda por comentar es `start`, inicia el combate pokemon y empieza el Pokemon más a la izquierda introducido a través de los argumentos del constructor.  
Guardamos originalmente las vidas de los Pokemons para realizar sus correspondientes restas debido al daño que se les efectúe:  
````typescript
    let hpCombatePokemon1 :number = this.pokemon1.hp;
    let hpCombatePokemon2 :number = this.pokemon2.hp;
    let turno :boolean = true;
````
El valor `turno` nos permitirá alternar entre los turnos de ataque.  

````typescript
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
````
Tenemos un bucle while que finaliza cuando uno de los contricantes tenga una vida por debajo de 0, eso quiere decir que el pokemon se encuentra debilitado y por tanto el combate finaliza.  
Al principio se muestra información de interes sobre el combate como puede ser El nombre del pokemon y su vida, a continuación, con un `if` controlamos los turnos de ataque asociado a cada pokemon, cuando un pokemon acabe su turno la variable `turno` se invertirá `turno = !turno;` y por lo tanto en la siguiente ronda entrará por el `else`.  
En cada turno se genera el daño correspondiente al pokemons que va a realizar el ataque `const dañoTurno1 :number = this.combatePokemon(this.pokemon1.tipo, this.pokemon1.ataque, this.pokemon2.tipo, this.pokemon2.defensa);`. Esta información se muestra por pantalla y se resta con respecto a la vida del oponente `hpCombatePokemon2 -= dañoTurno1;`.  
Este proceso se hará cíclico hasta que se de la condición especificada al principio.

````typescript
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
````
Ahora simplemente filtramos los datos obtenidos y mostramos por pantalla al vencedor que corresponde con aquel pokemon con una vida no inferior a 0. A su vez, se retorna un string con el dato de quien fue el gamador del combate