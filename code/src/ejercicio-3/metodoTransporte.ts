import {Movable} from './movable';

export abstract class metodoTransporte implements Movable {
  abstract name :string;
  abstract id :string;
  abstract tipo :string;
  abstract velocidad :number;
};
