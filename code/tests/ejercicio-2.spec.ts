import 'mocha';
import {expect} from 'chai';
import {Articulo} from '../src/ejercicio-2/articulo';
import {Gestor} from '../src/ejercicio-2/gestor';

describe('Ejercicio-2: Artículos y gestor', () => {
  it('Un árticulo tiene los datos correctos', () => {
    const articulo1 :Articulo = new Articulo(
        `A modified...`,
        [`Dahmani,Isma`, `Hifi,Mhand`],
        [`dahmani@gmail.com`, `hifi@gmail.com`],
        [`Descent`, `Heruristic`],
        `The knapsack problem arises in...`,
        `17/07/19`,
        `A modified descent method-based`,
        2,
    );
    expect(articulo1.titulo).to.be.equal('A modified...');
    expect(articulo1.autores).to.be.deep.equal([`Dahmani,Isma`, `Hifi,Mhand`]);
    expect(articulo1.email).to.be.deep.equal([`dahmani@gmail.com`,
      `hifi@gmail.com`]);
    expect(articulo1.palabrasClave).to.be.deep.equal([`Descent`, `Heruristic`]);
    expect(articulo1.fecha).to.be.equal(`17/07/19`);
    expect(articulo1.numCitas).to.be.equal(2);
  });

  it('Un árticulo devuelve la referencia en APA', () => {
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
    expect(articulo1.apa()).to.be.equal(
        'Dahmani ,I. ,Hifi ,M. ,(17/07/19) ,A modified...',
    );
  });


  it('Busqueda de árticulos por palabras claves en formato APA', () => {
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

    expect(gestorArticulos.exportFiltroApa(
        [`Descent`, `Prueba`])).to.be.deep.equal([
      'Dahmani ,I. ,Hifi ,M. ,(17/07/19) ,A modified...',
      'Delgado Hernandez ,P. J. ,(14/02/03) ,a3',
    ],
    );
  });

  it('Introducir dos árticulos iguales no provoca repetición', () => {
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

    const articulo2 :Articulo = new Articulo(
        `A modified...`,
        [`Dahmani,Isma`, `Hifi,Mhand`],
        [],
        [`Descent`, `Heruristic`],
        `The knapsack problem arises in...`,
        `17/07/19`,
        `A modified descent method-based`,
        2,
    );

    const gestorArticulos :Gestor = new Gestor(articulo1, articulo2 );

    expect(gestorArticulos.exportFiltroApa([`Descent`])).to.be.deep.equal(
        ['Dahmani ,I. ,Hifi ,M. ,(17/07/19) ,A modified...'],
    );
  });
});
