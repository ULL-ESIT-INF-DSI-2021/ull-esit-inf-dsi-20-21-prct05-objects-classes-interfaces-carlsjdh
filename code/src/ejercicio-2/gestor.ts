import {Articulo} from './articulo';


class Gestor {
  articulos :Articulo[] = [];
  constructor(...articulos :Articulo[]) {
    articulos.map( (articulo) => this.articulos.push(articulo));
  }

  addArticulo(articulo :Articulo) {
    this.articulos.push(articulo);
  }


  printFilto(palabraClave :string[], ...filtros :string[]) :void {
    const setFiltro = new Set;
    palabraClave.forEach((palabra) => {
      this.articulos.forEach((articulo) => {
        if (!!articulo.palabrasClave.find(
            (palabraClave) => palabraClave === palabra) ) {
          setFiltro.add(articulo);
        }
      });
    });
    if (filtros.length === 0 ) {
      console.table(Array.from(setFiltro) as Articulo[]);
    } else {
      console.table(Array.from(setFiltro) as Articulo[], filtros);
    }
  }

  print() {
    console.table(this.articulos);
  }

  exportFiltroApa(palabraClave :string[]) :string[] {
    const setFiltro = new Set;
    palabraClave.forEach((palabra) => {
      this.articulos.forEach((articulo) => {
        if (!!articulo.palabrasClave.find(
            (palabraClave) => palabraClave === palabra) ) {
          setFiltro.add(articulo.apa());
        }
      });
    });
    return Array.from(setFiltro) as string[];
  }
}

const articulo1 :Articulo = new Articulo(
    `A modified...`,
    [`Dahmani,Isma`, `Hifi,Mhand`],
    [],
    [`Descent`, `Heruristic`],
    `The knapsack problem arises in...`,
    `17/07/19`,
    `A modified descent method-based`,
    2,
);


const articulo3 :Articulo = new Articulo(
    `a3`,
    [`Delgado Hernandez,Pepe Javier`],
    [`pepe@gmail.com`],
    [`Prueba`, `Científico`],
    `En un lugar de la mancha`,
    `14/02/03`,
    `Amaya`,
    54,
);


const articulo2 :Articulo = new Articulo(
    `On exact...`,
    [`Lopez Zenarosa,Gabriel`],
    [],
    [`Bilevel programming`],
    `We consider the bilevel...`,
    `14/06/20`,
    `Abeja`,
    1,
);


const gestorArticulos :Gestor = new Gestor(articulo1, articulo2 );
gestorArticulos.addArticulo(articulo3);

gestorArticulos.print();

gestorArticulos.printFilto([`Descent`, `Prueba`], `titulo`, 
    `resumen`, `autores`);
console.table(gestorArticulos.exportFiltroApa([`Descent`, `Prueba`]));

