import {metodoTransporte} from './metodoTransporte';

export class Peaton extends metodoTransporte {
  name :string;
  id :string;
  tipo :string;
  velocidad :number;

  constructor(name :string, id :string, velocidad :number) {
    super();
    this.name = name;
    this.id = id;
    this.tipo = `Peaton`;
    this.velocidad = velocidad;
  }
};
