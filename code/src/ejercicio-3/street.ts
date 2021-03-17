import {metodoTransporte} from './metodoTransporte';

export class Street {
  calle :string;
  localizacion :string;
  tiposValidos :string[];
  carretera :metodoTransporte[] = [];
  /**
   * Constructor de una calle
   * @param calle Nombre de la calle
   * @param localizacion Localización de la calle
   * @param tipos Tipos que admite
   */
  constructor(calle :string, localizacion :string, ...tipos :string[]) {
    this.calle = calle;
    this.localizacion = localizacion;
    this.tiposValidos = tipos;
  }
  /**
   * add
   * @param transporte Medio de transporte que desea agregar
   * @returns Devuelve undefined en caso de introducir un tipo
   * erroneo o un valor ya introducido anteriormente
   */
  add(transporte :metodoTransporte) :void | undefined {
    if ( !!this.tiposValidos.find( (tipo) => tipo === transporte.tipo) &&
    (!this.carretera.find( (tipo) => tipo.id === transporte.id))) {
      this.carretera.push(transporte);
    } else {
      return undefined;
    }
  }
  /**
   * delete
   * @param transporteId id del medio de transporte que desea
   * eliminar
   * @returns Devuelve undefined en caso de introducir un id
   * no eliminable
   */
  delete(transporteId :string) :void | undefined {
    const index :number = this.carretera.findIndex((transporte) =>
      transporte.id === transporteId);
    if ( index != -1 ) {
      this.carretera.splice(index, 1);
    } else {
      return undefined;
    }
  }
  /**
   * print
   * @returns Devuelve un array de strings con información
   * de los medios de transporte usados en steet además de
   * mostrar por pantalla la información de la calle
   */
  print() :string[] {
    // eslint-disable-next-line max-len
    console.log(`Estado de la  calle ${this.calle} localizado en ${this.localizacion}\n`);
    this.carretera.sort((a, b) => b.velocidad - a.velocidad);

    const resultadoString :string[] = this.carretera.map((transporte) => {
      return `Soy un ${transporte.tipo} llamado ${transporte.name}`;
    }) as string[];

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
    return resultadoString;
  }
};
