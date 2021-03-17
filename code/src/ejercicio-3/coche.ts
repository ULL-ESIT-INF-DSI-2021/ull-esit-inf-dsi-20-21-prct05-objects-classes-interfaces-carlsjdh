import {metodoTransporte} from './metodoTransporte';


export class Coche extends metodoTransporte {
  name :string;
  id :string;
  tipo :string;
  puertas :number
  velocidad :number;
  /**
   * Constructor de un coche
   * @param name Nombre del coche
   * @param id Matrícula del coche
   * @param velocidad Velocidad del coche
   * @param puertas Número de puertas del coche
   */
  constructor(name :string, id :string, velocidad :number, puertas :number) {
    super();
    this.name = name;
    this.id = id;
    this.tipo = `Coche`;
    this.puertas = puertas;
    this.velocidad = velocidad;
  }
};
