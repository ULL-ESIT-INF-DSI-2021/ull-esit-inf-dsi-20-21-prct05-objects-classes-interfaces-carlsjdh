import {metodoTransporte} from './metodoTransporte';


export class Coche extends metodoTransporte {
  name :string;
  id :string;
  tipo :string;
  puertas :number
  velocidad :number;
  constructor(name :string, id :string, velocidad :number, puertas :number) {
    super();
    this.name = name;
    this.id = id;
    this.tipo = `Coche`;
    this.puertas = puertas;
    this.velocidad = velocidad;
  }
};
