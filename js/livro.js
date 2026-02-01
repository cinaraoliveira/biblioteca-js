class Livro {
  #disponivel = true;

  constructor(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
  }

  emprestar() {
    if (!this.#disponivel) {
      throw new Error("Livro indisponível");
    }
    this.#disponivel = false;
  }

  devolver() {
    this.#disponivel = true;
  }
}
