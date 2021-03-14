import {Articulo} from './articulo';


class Gestor {
  articulos :Articulo[] = [];
  constructor(...articulos :Articulo[]) {
    articulos.map( (articulo) => this.articulos.push(articulo));
  }

  addArticulo(articulo :Articulo) {
    this.articulos.push(articulo);
  }

  print() {
    console.table(this.articulos);
  }
}

const articulo1 :Articulo = new Articulo(
    `a1`,
    [`Delgado Hernandez,Pepe Javier`],
    [`pepe@gmail.com`],
    [`chos`, `miniño`],
    `en un lugar de la mancha`,
    `14/02/03`,
    `amaya`,
    54,
);
console.log(articulo1.apa());
const articulo2 :Articulo = new Articulo(
    `a2`,
    [`Hernández,Miguel`],
    [`miguel@gmail.com`],
    [`vaya`, `wow`],
    `viva twice`,
    `14/06/20`,
    `abeja`,
    12,
);


const gestorArticulos :Gestor = new Gestor(articulo1, articulo2 );

gestorArticulos.print();
