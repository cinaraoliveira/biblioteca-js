class Usuario {
  constructor(nome) {
    this.nome = nome;
    this.emprestimos = [];
  }

  limiteEmprestimos() {
    throw new Error("Método não implementado");
  }
}

class Aluno extends Usuario {
  limiteEmprestimos() {
    return 2;
  }
}

class Professor extends Usuario {
  limiteEmprestimos() {
    return 5;
  }
}
