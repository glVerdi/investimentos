function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
      // Cria o HTML para cada resultado e adiciona à string 'resultados'
      resultados += `
      <div class="item-resultado">
        <h2>${dado.titulo}</h2> <p class="descrição-meta">${dado.descricao}</p> <a href="${dado.link}" target="_blank">Mais informações</a> </div>
    `;
    }
  
    // Atribui a string de resultados ao conteúdo HTML da seção
    section.innerHTML = resultados;
  }