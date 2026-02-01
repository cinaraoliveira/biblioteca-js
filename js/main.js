document.addEventListener("DOMContentLoaded", () => {
  const autor = new Autor("Machado de Assis");
  const livro = new Livro("Dom Casmurro", autor);
  const aluno = new Aluno("Ana");
  const biblioteca = new Biblioteca();

  biblioteca.adicionarLivro(livro);

  document.getElementById("usuario").innerText = aluno.nome;
  document.getElementById("livro").innerText = livro.titulo;
  document.getElementById("autor").innerText = autor.nome;

  const status = document.getElementById("status");

  document.getElementById("btnEmprestar").addEventListener("click", () => {
    try {
      biblioteca.emprestarLivro(livro, aluno);
      status.innerText = "✅ Livro emprestado com sucesso!";
      status.style.color = "green";
    } catch (e) {
      status.innerText = "❌ " + e.message;
      status.style.color = "red";
    }
  });
});
