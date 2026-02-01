class Biblioteca {
  constructor() {
    this.livros = [];
  }

  adicionarLivro(livro) {
    this.livros.push(livro);
  }

  emprestarLivro(livro, usuario) {
    if (usuario.emprestimos.length >= usuario.limiteEmprestimos()) {
      throw new Error("Limite de empréstimos atingido");
    }

    livro.emprestar();
    usuario.emprestimos.push(livro);
  }
}
