import {Articulo} from './articulo';

type filtros = 'titulo' | 'autores' | 'email' | 'titulo' | 'resumen'

export class Gestor {
  articulos :Articulo[] = [];
  /**
   * Constructor del gestor
   * @param articulos Artículos que tendrá el gestor
   */
  constructor(...articulos :Articulo[]) {
    articulos.forEach( (articulo) => this.articulos.push(articulo));
  }
  /**
   * addArticulo
   * @param articulo Artículo que desea añadir
   */
  addArticulo(articulo :Articulo) {
    this.articulos.push(articulo);
  }

  /**
   * printFiltro
   * @param palabraClave Palabras Clave
   * @param filtros Filtros que desea mostrar
   */
  printFiltro(palabraClave :string[], ...filtros :filtros[]) :void {
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
  /**
   * print(), imprime la información de los artículos
   * en formato tabla
   */
  print() {
    console.table(this.articulos);
  }
  /**
   * exportFiltroApa
   * @param palabraClave Palabras clave que desea filtrar para aquellos
   * artículos que desea exportar en
   * formato APA
   * @returns Devuelve el un array de string de los artículos asociados
   * a las palabras claves en formato APA
   */
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

gestorArticulos.printFiltro([`Descent`, `Prueba`], `titulo`,
    `resumen`, `autores`);
console.table(gestorArticulos.exportFiltroApa([`Descent`, `Prueba`]));

