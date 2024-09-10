function pesquisar() {
  // Obtém a seção onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  // se campoPesquisa for uma String sem nada
  if (!campoPesquisa) {
    section.innerHTML = "<p>Nenhum investimento encontrado. Voc^precisa digitar o nome de um investimento</P>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados, titulo e a descição
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags ="";

  // Itera sobre cada dado na lista de dados
  for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    // se titulo includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // então, Cria um novo elemento
      resultados += `
        <div class="item-resultado">
          <h2>${dado.titulo}</h2> <p class="descrição-meta">${dado.descricao}</p> <a href="${dado.link}" target="_blank">Mais informações</a> </div>
      `;
    }
  }

if (!resultados) {
  resultados = "<p>Nada foi encontrado</p>"
}

  // Atribui a string de resultados ao conteúdo HTML da seção
  section.innerHTML = resultados;
}
