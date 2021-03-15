export class Articulo {
  titulo: string;
  autores: string[];
  email: string[];
  palabrasClave :string[];
  resumen :string;
  fecha :string;
  editorial :string;
  numCitas :number;
  constructor(titulo :string, autores :string[],
      email :string[], palabrasClave :string[], resumen :string,
      fecha :string, editorial :string, numCitas :number) {
    this.titulo = titulo;
    this.autores = autores;
    this.email = email;
    this.palabrasClave = palabrasClave;
    this.resumen = resumen;
    this.fecha = fecha;
    this.editorial = editorial;
    this.numCitas = numCitas;
  }

  apa() :string {
    let apa :string = ``;
    this.autores.forEach((autor) => {
      const apellidos :string = autor.split(',')[0];
      const nombre :string = autor.split(',')[1];
      apellidos.split(' ').forEach((apellido) => apa += apellido + ' ');
      apa += ',';
      nombre.split(' ').forEach((nombre) => apa += nombre[0]+'. ' );
      apa += ',';
    });

    apa += `(${this.fecha}) ,`;
    apa += `${this.titulo}`;
    return apa;
  }
};

