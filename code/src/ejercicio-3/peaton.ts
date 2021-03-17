import {metodoTransporte} from './metodoTransporte';

export class Peaton extends metodoTransporte {
  name :string;
  id :string;
  tipo :string;
  velocidad :number;
  /**
   * Constructor de un peatón
   * @param name Nombre de un peatón
   * @param id DNI del peatón
   * @param velocidad Velocidad a la que circula
   */
  constructor(name :string, id :string, velocidad :number) {
    super();
    this.name = name;
    this.id = id;
    this.tipo = `Peaton`;
    this.velocidad = velocidad;
  }
};
