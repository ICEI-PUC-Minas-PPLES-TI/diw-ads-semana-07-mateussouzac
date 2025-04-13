const noticias = [
    {
      id: 1,
      titulo: "Cruzeiro contesta arbitragem",
      imagem: "crzfeminino.jpg",
      resumo: "Cruzeiro apresenta queixa à CBF sobre a arbitragem na semifinal da Supercopa. </p> Na partida contra o Corinthians, o Cruzeiro contestou a decisão da arbitragem de invalidar um gol por impedimento, aos 23 minutos do segundo tempo. O lance ocorreu durante a derrota do time mineiro por 1 a 0."
    },
    {
      id: 2,
      titulo: "Atlético busca hepta",
      imagem: "altcampeao.jpg",
      resumo: "Rubens Menin comemora título, almeja o heptacampeonato e considera o Atlético um dos ‘melhores do Brasil’.</p> Após a conquista do sexto título consecutivo do Campeonato Mineiro pelo Atlético, Rubens Menin, um dos principais investidores do clube, expressou sua alegria e já projetou o próximo objetivo: o heptacampeonato em 2026, um feito inédito na história do Galo."
    }
  ];
  
  function renderNoticias() {
    const container = document.getElementById("noticias");
    if (!container) return;
  
    container.innerHTML = noticias.map(noticia => `
      <div class="card">
        <img src="${noticia.imagem}" alt="${noticia.titulo}" />
        <h2>${noticia.titulo}</h2>
        <p>${noticia.resumo}</p>
        <a href="detalhes.html?id=${noticia.id}">Ver mais</a>
      </div>
    `).join("");
  }
  
  function getParametroURL(nome) {
    const params = new URLSearchParams(window.location.search);
    return params.get(nome);
  }
  
  function renderDetalhes() {
    const id = getParametroURL('id');
    const noticia = noticias.find(n => n.id == id);
  
    const container = document.getElementById("detalhe-noticia");
    if (noticia && container) {
      container.innerHTML = `
        <div class="card">
          <h1>${noticia.titulo}</h1>
          <img src="${noticia.imagem}" alt="${noticia.titulo}" />
          <p>${noticia.resumo}</p>
          <a href="index.html">Voltar</a>
        </div>
      `;
    }
  }
  
  renderNoticias();
  renderDetalhes();
  