import 'mocha';
import {expect} from 'chai';
import {Coche} from '../src/ejercicio-3/coche';
import {Peaton} from '../src/ejercicio-3/peaton';
import {Street} from '../src/ejercicio-3/street';

describe('Ejercicio-3: Medios de transporte', () => {
  const Coche1 :Coche = new Coche(`Seat`, `45TR8`, 80, 5);
  const Coche2 :Coche = new Coche(`Toyota`, `KFASD5`, 65, 3);

  const Peaton1 :Peaton = new Peaton(`Juan`, `4587156447T`, 6);

  it('Comprobar información de Coche', () => {
    expect(Coche1.name).to.be.equal(`Seat`);
    expect(Coche2.name).to.be.equal(`Toyota`);
    expect(`puertas` in Coche1).to.be.equal(true);
    expect(Coche2.puertas).to.be.equal(3);
  });

  it('Comprobar información de Peaton y diferencia frente a Coche', () => {
    expect(Peaton1.name).to.be.equal(`Juan`);
    expect(`puertas` in Peaton1).to.be.equal(false);
  });

  const calle1 :Street = new Street(`Trinidad`, `LL`, `Peaton`, `Coche`);
  const calle2 :Street = new Street(`Trinidad`, `LL`, `Peaton`);


  it('Agregar información correctamente a street', () => {
    calle1.add(Coche1);
    calle1.add(Peaton1);
    expect(calle1.print()).to.be.deep.equal([
      'Soy un Coche llamado Seat',
      'Soy un Peaton llamado Juan',
    ]);
  });

  it('Comprobar tipos e igualdad de contenido al add de street', () => {
    expect(calle2.add(Coche1)).to.be.equal(undefined);

    expect(calle1.add(Coche1)).to.be.equal(undefined);

    expect(calle1.print()).to.be.deep.equal([
      'Soy un Coche llamado Seat',
      'Soy un Peaton llamado Juan',
    ]);
  });

  it('Comprobar eliminaciones de métodos de transporte en steet', () => {
    expect(calle2.add(Coche1)).to.be.equal(undefined);

    expect(calle1.add(Coche1)).to.be.equal(undefined);

    expect(calle1.print()).to.be.deep.equal([
      'Soy un Coche llamado Seat',
      'Soy un Peaton llamado Juan',
    ]);

    expect(calle1.delete('45TR8'));

    expect(calle1.print()).to.be.deep.equal([
      'Soy un Peaton llamado Juan',
    ]);

    expect(calle1.delete(`45TR8`)).to.be.deep.equal(undefined);
  });
});
