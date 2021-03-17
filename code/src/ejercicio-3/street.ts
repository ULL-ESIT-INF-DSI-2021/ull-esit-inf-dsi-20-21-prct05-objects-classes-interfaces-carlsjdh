import {metodoTransporte} from './metodoTransporte';
import {Coche} from './coche';
import {Peaton} from './peaton';

class Street {
  calle :string;
  localizacion :string;
  tiposValidos :string[];
  carretera :metodoTransporte[] = [];
  constructor(calle :string, localizacion :string, ...tipos :string[]) {
    this.calle = calle;
    this.localizacion = localizacion;
    this.tiposValidos = tipos;
  }

  add(transporte :metodoTransporte) :void | undefined {
    if ( !!this.tiposValidos.find( (tipo) => tipo === transporte.tipo) &&
    (!this.carretera.find( (tipo) => tipo.id === transporte.id))) {
      this.carretera.push(transporte);
    } else {
      return undefined;
    }
  }

  delete(transporteId :string) :void | undefined {
    const index :number = this.carretera.findIndex((transporte) =>
      transporte.id === transporteId);
    if ( index != -1 ) {
      this.carretera.splice(index, 1);
    } else {
      return undefined;
    }
  }

  print() {
    // eslint-disable-next-line max-len
    console.log(`Estado de la  calle ${this.calle} localizado en ${this.localizacion}\n`);
    this.carretera.sort((a, b) => b.velocidad - a.velocidad);
    console.table(this.carretera, [`name`, `id`, `velocidad`]);
    const arrayTipos :string[] =
    this.carretera.map( (transporte) => transporte.tipo).
        filter((v, i, a) => a.indexOf(v) === i);

    let aux :string = ``;
    arrayTipos.forEach( (tipo) => {
      aux += tipo + ` = `;
      aux += this.carretera.filter((transporte) =>
        transporte.tipo === tipo).length.toString() + `\n`;
    } );

    console.log(aux);
  }
};


const calle :Street = new Street(`Trinidad`, `LL`, `Peaton`, `Coche`);

calle.add(new Coche( `Seat`, `FGADS8`, 500, 5 ) );
console.log(calle.add(new Coche( `Seat`, `FGADS8`, 600, 5 ) ));
calle.add(new Peaton( `Miguel`, `4582T`, 10) );
calle.print();
calle.delete(`FGADS8`);
calle.print();
