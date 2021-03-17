export class Articulo {
  titulo: string;
  autores: string[];
  email: string[];
  palabrasClave :string[];
  resumen :string;
  fecha :string;
  editorial :string;
  numCitas :number;
  /**
   * Constructor del artículo
   * @param titulo Título del artículo
   * @param autores Autores del artículo
   * @param email Correos de los autor/es del artículo
   * @param palabrasClave Palabras claves asociadas al artículo
   * @param resumen Resumen del artículo
   * @param fecha Fecha del artículo
   * @param editorial Editorial del artículo
   * @param numCitas Número de citas del artículo
   */
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
  /**
   * Apa
   * @returns Devuelve un string que contiene el formato APA del
   * artículo
   */
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

