const produtos = [
  //Preparadores
  { id: 1, nome: "Desidrat Frasco", categoria: "Preparadores", preco: 8.5, min: 12, disponivel: true, imagem: "desidrat_frasco.webp" },
  { id: 2, nome: "Desidrat Sachê", categoria: "Preparadores", preco: 4, min: 24, disponivel: true, imagem: "Desidrat_Sache.webp" },
  { id: 3, nome: "Fibra em rolo", categoria: "Preparadores", preco: 10.1, min: 12, disponivel: true, imagem: "fibra-vidro.webp" },
  { id: 7, nome: "Prep Spray Frasco", categoria: "Preparadores", preco: 20.3, min: 12, disponivel: true, imagem: "Prep-Nail-Spray-Frasco.webp" },
  { id: 8, nome: "Prep Spray Refil", categoria: "Preparadores", preco: 13.2, min: 16, disponivel: true, imagem: "Prep-Nail-Spray-Sache.webp" },
  { id: 9, nome: "Primer Ácido Frasco", categoria: "Preparadores", preco: 9.5, min: 16, disponivel: true, imagem: "primer_acido.webp" },
  { id: 10, nome: "Primer Adesivador Frasco", categoria: "Preparadores", preco: 8.5, min: 16, disponivel: true, imagem: "primer-adesivador.webp" },

  //Gel Base 
  { id: 4, nome: "Gel Base Clear Frasco", categoria: "Gel Base", preco: 14.95, min: 12, disponivel: true, imagem: "gel_base_frasco.webp" },
  { id: 5, nome: "Gel Base Clear Sachê", categoria: "Gel Base", preco: 14.95, min: 12, disponivel: true, imagem: "gel_base_clear_sache.webp" },
  { id: 6, nome: "Gel Base Pink Sachê", categoria: "Gel Base", preco: 14.95, min: 12, disponivel: true, imagem: "gel-base-pink.webp" },

  //Gel Classic
  { id: 11, nome: "Sachê Classic Cover 14g", categoria: "Gel Classic", preco: 18.50, min: 12, disponivel: true, imagem: "classic-cover.webp" },
  { id: 28, nome: "Sachê Classic Cover 34g", categoria: "Gel Classic", preco: 29.30, min: 12, disponivel: true, imagem: "classic-cover34g.webp" },
  { id: 13, nome: "Sachê Classic Nude 14g", categoria: "Gel Classic", preco: 18.50, min: 12, disponivel: true, imagem: "classic-nude.webp" },
  { id: 27, nome: "Sachê Classic Nude 34g", categoria: "Gel Classic", preco: 29.30, min: 12, disponivel: true, imagem: "classic-nude34g.webp" },
  { id: 14, nome: "Sachê Classic Clear 14g", categoria: "Gel Classic", preco: 18.50, min: 12, disponivel: true, imagem: "classic-clear.webp" },
  { id: 26, nome: "Sachê Classic Clear 34g", categoria: "Gel Classic", preco: 29.30, min: 12, disponivel: true, imagem: "classic-nude34g.webp" },
  { id: 12, nome: "Sachê Classic Blanc 14g", categoria: "Gel Classic", preco: 18.50, min: 12, disponivel: true, imagem: "classic-blanc.webp" },
  { id: 15, nome: "Sachê Classic Crystal 14g", categoria: "Gel Classic", preco: 18.50, min: 12, disponivel: true, imagem: "classic-crystal.webp" },
  { id: 16, nome: "Sachê Classic Pink 14g", categoria: "Gel Classic", preco: 18.50, min: 12, disponivel: true, imagem: "classic-pink.webp" },
  { id: 17, nome: "Sachê Gel Classic Blush 14g", categoria: "Gel Classic", preco: 18.50, min: 12, disponivel: true, imagem: "classic-blush.webp" },

  //Gel Control
  { id: 18, nome: "Sachê Control Cover 14g", categoria: "Gel Control", preco: 18.50, min: 12, disponivel: true, imagem: "control-cover.webp" },
  { id: 21, nome: "Sachê Control Nude 14g", categoria: "Gel Control", preco: 18.50, min: 12, disponivel: true, imagem: "control-nude.webp" },
  { id: 19, nome: "Sachê Control Pink 14g", categoria: "Gel Control", preco: 18.50, min: 12, disponivel: true, imagem: "control-pink.webp" },
  { id: 20, nome: "Sachê Control White 14g", categoria: "Gel Control", preco: 18.50, min: 12, disponivel: true, imagem: "control-white.webp" },

  //Gel Hybrid
  { id: 29, nome: "Sachê Gel Hybrid Cover 34g", categoria: "Gel Hybrid", preco: 29.30, min: 12, disponivel: true, imagem: "hybrid-cover.webp" },
  { id: 30, nome: "Sachê Gel Hybrid Nude 34g", categoria: "Gel Hybrid", preco: 29.30, min: 12, disponivel: true, imagem: "hybrid-nude.webp" },

  //Gel Glitter | Hard
  { id: 24, nome: "Sachê Gel Classic Glitter Nude 14g", categoria: "Gel Glitter | Hard", preco: 18.50, min: 12, disponivel: true, imagem: "nude-glitter.webp" },
  { id: 25, nome: "Sachê Gel Classic Glitter Cover 14g", categoria: "Gel Glitter | Hard", preco: 18.50, min: 12, disponivel: true, imagem: "cover-glitter.webp" },
  { id: 22, nome: "Sachê Hard Blanc 14g", categoria: "Gel Glitter | Hard", preco: 18.50, min: 12, disponivel: true, imagem: "hard-blanc.webp" },
  { id: 23, nome: "Sachê Hard Pink 14g", categoria: "Gel Glitter | Hard", preco: 18.50, min: 12, disponivel: true, imagem: "hard-pink.webp" },
  
  //Acrílico
  { id: 31, nome: "Monomer Frasco 240 ml", categoria: "Acrílico", preco: 45.90, min: 8, disponivel: true, imagem: "monomer-frasco.webp" },
  { id: 32, nome: "Monomer Sachê 30ml", categoria: "Acrílico", preco: 12.45, min: 12, disponivel: true, imagem: "monomer-sache.webp" },
  { id: 33, nome: "Pó Acrílico Sachê Super Clear 30g", categoria: "Acrílico", preco: 18.45, min: 12, disponivel: true, imagem: "super-clear.webp" },
  { id: 34, nome: "Pó Acrílico Sachê Super Branco 30g", categoria: "Acrílico", preco: 18.45, min: 12, disponivel: true, imagem: "super-branco.webp" },
  { id: 35, nome: "Pó Acrílico Sachê Cover Pink 30g", categoria: "Acrílico", preco: 18.45, min: 12, disponivel: true, imagem: "cover-pink.webp" },
  { id: 36, nome: "Pó Acrílico Sachê Cover Nude 30g", categoria: "Acrílico", preco: 18.45, min: 12, disponivel: true, imagem: "cover-nude.webp" },
  { id: 37, nome: "Pó Acrílico Sachê Cover Baby 30g", categoria: "Acrílico", preco: 18.45, min: 12, disponivel: true, imagem: "cover-baby.webp" },
  { id: 38, nome: "Pó Acrílico Sachê Cover Rosé 30g", categoria: "Acrílico", preco: 18.45, min: 12, disponivel: true, imagem: "cover-rose.webp" },
  { id: 39, nome: "Pote Pó Acrílico Com Glitter Goyave Shine 20g", categoria: "Acrílico", preco: 22.45, min: 6, disponivel: true, imagem: "goyave-shine.webp" },
  { id: 40, nome: "Pote Pó Acrílico Com Glitter Pink Shine 20g", categoria: "Acrílico", preco: 22.45, min: 6, disponivel: true, imagem: "pink-shine.webp" },
  { id: 41, nome: "Pote Pó Acrílico Com Glitter Baby Shine 20g", categoria: "Acrílico", preco: 22.45, min: 6, disponivel: true, imagem: "baby-shine.webp" },
  { id: 42, nome: "Pote Pó Acrílico Com Glitter Nude Shine 20g", categoria: "Acrílico", preco: 22.45, min: 6, disponivel: true, imagem: "nude-shine.webp" },
  { id: 43, nome: "Pote Pó Acrílico Com Glitter Natural Shine 20g", categoria: "Acrílico", preco: 22.45, min: 6, disponivel: true, imagem: "natural-shine.webp" },
  { id: 44, nome: "Pote Pó Acrílico Com Glitter Blanc Shine 20g", categoria: "Acrílico", preco: 22.45, min: 6, disponivel: true, imagem: "blanc-shine.webp" },

  //Top Coat
  { id: 51, nome: "Top Coat Brilho Clear Frasco 9g", categoria: "Top Coat", preco: 22.20, min: 12, disponivel: true, imagem: "top-coat-clear.webp" },
  { id: 52, nome: "Top Coat Gold Frasco 9g", categoria: "Top Coat", preco: 22.20, min: 12, disponivel: true, imagem: "top-coat-gold.webp" },
  { id: 53, nome: "Top Coat Silver Frasco 9g", categoria: "Top Coat", preco: 22.20, min: 12, disponivel: true, imagem: "Top-Coat-Silver.webp" },
  { id: 54, nome: "Top Coat Pink Frasco 9g", categoria: "Top Coat", preco: 22.20, min: 12, disponivel: true, imagem: "Top-Coat-Pink.webp" },
  { id: 55, nome: "Top Coat Cover Frasco 9g", categoria: "Top Coat", preco: 22.20, min: 12, disponivel: true, imagem: "top-coat-cover.webp" },
  { id: 56, nome: "Top Coat Blanc Frasco 9g", categoria: "Top Coat", preco: 22.20, min: 12, disponivel: true, imagem: "top-coat-blanc.webp" },
  { id: 57, nome: "Top Coat Eggshell Matte Frasco 9g", categoria: "Top Coat", preco: 22.20, min: 12, disponivel: true, imagem: "top-coat-eggshell-matte.webp" },
  { id: 61, nome: "Top Coat Eggshell Silver Frasco 9g", categoria: "Top Coat", preco: 22.20, min: 12, disponivel: true, imagem: "top-coat-eggshell-silver.webp" },
  { id: 58, nome: "Top Coat Butterfly Pink Frasco 9g", categoria: "Top Coat", preco: 22.20, min: 6, disponivel: true, imagem: "top-coat-butterfly-pink.webp" },
  { id: 59, nome: "Top Coat Rosé Gold Frasco 9g", categoria: "Top Coat", preco: 22.20, min: 6, disponivel: true, imagem: "top-coat-rose-gold.webp" },
  { id: 60, nome: "Top Coat White Glow Frasco 9g", categoria: "Top Coat", preco: 22.20, min: 12, disponivel: true, imagem: "top-coat-white-glow.webp" },


  //Top Coat Sachê
  { id: 45, nome: "Top Coat Brilho Clear Sachê 9g ", categoria: "Top Coat Sachê", preco: 17.95, min: 12, disponivel: true, imagem: "Top-Coat-Clear-Sache.webp" },
  { id: 46, nome: "Top Coat Silver Sachê 9g ", categoria: "Top Coat Sachê", preco: 17.95, min: 12, disponivel: true, imagem: "Top-Coat-Silver-Sache.webp" },
  { id: 47, nome: "Top Coat Gold Sachê 9g ", categoria: "Top Coat Sachê", preco: 17.95, min: 12, disponivel: true, imagem: "Top-Coat-Gold-Sache.webp" },
  { id: 48, nome: "Top Coat Pink Sachê 9g ", categoria: "Top Coat Sachê", preco: 17.95, min: 12, disponivel: true, imagem: "Top-Coat-Pink-Sache.webp" },
  { id: 49, nome: "Top Coat Cover Sachê 9g ", categoria: "Top Coat Sachê", preco: 17.95, min: 12, disponivel: true, imagem: "top-coat-cover-sache.webp" },
  { id: 50, nome: "Top Coat Blanc Sachê 9g ", categoria: "Top Coat Sachê", preco: 17.95, min: 12, disponivel: true, imagem: "top-coat-blanc-sache.webp" },

  //Esmaltes e Finalizadores
  { id: 62, nome: "Esmalte Em Gel My Glossy Purple Pink 9g", categoria: "Esmaltes e Finalizadores", preco: 12.90, min: 12, disponivel: true, imagem: "Esmalte-My-Glossy.webp" },
  { id: 63, nome: "Esmalte Em Gel Preto 9g", categoria: "Esmaltes e Finalizadores", preco: 12.90, min: 12, disponivel: true, imagem: "Esmalte-Preto.webp" },
  { id: 64, nome: "Esmalte Em Gel Branco 9g", categoria: "Esmaltes e Finalizadores", preco: 12.90, min: 12, disponivel: true, imagem: "Esmalte-Branco.webp" },
  { id: 65, nome: "Óleo De Parfum 10ml", categoria: "Esmaltes e Finalizadores", preco: 9.50, min: 12, disponivel: true, imagem: "oleo-de-parfum.webp" },
  { id: 66, nome: "Sachê De Creme Parfum 14g", categoria: "Esmaltes e Finalizadores", preco: 4.00, min: 36, disponivel: true, imagem: "Creme-de-Parfum.webp" },

  //Pote Eco
  { id: 67, nome: "Pote Eco Branco Com Fundo Preto 30g", categoria: "Pote Eco", preco: 4.60, min: 12, disponivel: true, imagem: "pote-eco-branco.webp" },
  { id: 72, nome: "Pote Eco Branco Com Fundo Preto 30g", categoria: "Pote Eco", preco: 3.90, min: 120, disponivel: true, imagem: "pote-eco-branco.webp" },
  { id: 68, nome: "Pote Eco Verde Água 30g", categoria: "Pote Eco", preco: 4.60, min: 12, disponivel: true, imagem: "pote-eco-verde-agua.webp" },
  { id: 73, nome: "Pote Eco Verde Água 30g", categoria: "Pote Eco", preco: 3.90, min: 120, disponivel: true, imagem: "pote-eco-verde-agua.webp" },
  { id: 69, nome: "Pote Eco Azul Celeste 30g", categoria: "Pote Eco", preco: 4.60, min: 12, disponivel: true, imagem: "pote-eco-azul-celeste.webp" },
  { id: 74, nome: "Pote Eco Azul Celeste 30g", categoria: "Pote Eco", preco: 3.90, min: 120, disponivel: true, imagem: "pote-eco-azul-celeste.webp" },
  { id: 70, nome: "Pote Eco Rosa Candy 30g", categoria: "Pote Eco", preco: 4.60, min: 12, disponivel: true, imagem: "pote-eco-rosa-candy.webp" },
  { id: 75, nome: "Pote Eco Rosa Candy 30g", categoria: "Pote Eco", preco: 3.90, min: 120, disponivel: true, imagem: "pote-eco-rosa-candy.webp" },
  { id: 71, nome: "Pote Eco Lavanda 30g", categoria: "Pote Eco", preco: 4.60, min: 12, disponivel: true, imagem: "pote-eco-lavanda.webp" },
  { id: 76, nome: "Pote Eco Lavanda 30g", categoria: "Pote Eco", preco: 3.90, min: 120, disponivel: true, imagem: "pote-eco-lavanda.webp" },

  //Frascos
  { id: 77, nome: "Frasco Pet Lilás 60ml - Monomer", categoria: "Frascos", preco: 2.90, min: 60, disponivel: true, imagem: "Frasco-Eco-Monomer.webp" },
  { id: 78, nome: "Frasco Silk 10ml Eco Rosa", categoria: "Frascos", preco: 2.85, min: 24, disponivel: true, imagem: "frasco-silk-rosa.webp" },
  { id: 79, nome: "Frasco Silk 10ml Eco Azul (Pincel Curto)", categoria: "Frascos", preco: 2.85, min: 24, disponivel: true, imagem: "frasco-silk-azul.webp" },

  //Lixas
  { id: 80, nome: "Lixa 100", categoria: "Lixas", preco: 2.50, min: 24, disponivel: true, imagem: "Lixa-100.webp" },
  { id: 81, nome: "Lixa 150", categoria: "Lixas", preco: 2.50, min: 24, disponivel: true, imagem: "Lixa-150.webp" },
  { id: 82, nome: "Lixa 180", categoria: "Lixas", preco: 2.50, min: 24, disponivel: true, imagem: "Lixa-180.webp" },
  { id: 83, nome: "Lixa 220", categoria: "Lixas", preco: 2.50, min: 24, disponivel: true, imagem: "Lixa-220.webp" },
  { id: 84, nome: "Lixa Slim 120/150", categoria: "Lixas", preco: 2.50, min: 24, disponivel: true, imagem: "Lixa-Slim-120_150.webp" }

];


let carrinho = [];

function renderizarProdutos() {
  const container = document.getElementById("produtosContainer");
  container.innerHTML = "";

  const categorias = [...new Set(produtos.map(p => p.categoria))];
  categorias.forEach(cat => {
    const titulo = document.createElement("h2");
    titulo.className = "cat-title";
    titulo.innerText = cat.charAt(0).toUpperCase() + cat.slice(1).replace("-", " ");
    container.appendChild(titulo);

    const grid = document.createElement("div");
    grid.className = "grid";

    produtos.filter(p => p.categoria === cat).forEach(p => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
  <img src="${p.imagem}" alt="${p.nome}">
  <h3>${p.nome}</h3>
  <p><strong>R$ ${p.preco.toFixed(2)}</strong></p>
  <p>Mín: ${p.min} unid</p>
  <div>
    <button onclick="alterarQtd(${p.id}, -${p.min})" ${!p.disponivel ? "disabled" : ""}>-</button>
    <span id="qtd-${p.id}">0</span>
    <button onclick="alterarQtd(${p.id}, ${p.min})" ${!p.disponivel ? "disabled" : ""}>+</button>
  </div>
  <p id="soma-${p.id}" style="color:green; font-weight:bold; display:none;"></p>
`;

      grid.appendChild(card);
    });

    container.appendChild(grid);
  });
}

function alterarQtd(id, qtd) {
  const produto = produtos.find(p => p.id === id);
  let item = carrinho.find(c => c.id === id);

  if (!item && qtd > 0) {
    carrinho.push({ ...produto, quantidade: qtd });
  } else if (item) {
    item.quantidade += qtd;
    if (item.quantidade <= 0) {
      carrinho = carrinho.filter(c => c.id !== id);

      // 🔹 Reset visual quando zera
      document.getElementById(`qtd-${id}`).innerText = 0;
      const somaEl = document.getElementById(`soma-${id}`);
      if (somaEl) somaEl.style.display = "none";
    }
  }
  atualizarCarrinho();
}


function atualizarCarrinho() {
  produtos.forEach(produto => {
    const qtdEl = document.getElementById(`qtd-${produto.id}`);
    const somaEl = document.getElementById(`soma-${produto.id}`);
    const item = carrinho.find(c => c.id === produto.id);

    if (item) {
      qtdEl.innerText = item.quantidade;
      if (item.quantidade > 0) {
        somaEl.innerText = (item.preco * item.quantidade).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        });
        somaEl.style.display = "inline";
      }
    } else {
      // 🔹 Se não está no carrinho → resetar
      qtdEl.innerText = 0;
      somaEl.style.display = "none";
    }
  });

  atualizarRodape();
}



function atualizarRodape() {
  let total = 0;
  let qtd = 0;

  carrinho.forEach(item => {
    total += item.preco * item.quantidade;
    qtd++;
  });

  document.getElementById("pedidoTotal").innerText =
    total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  document.getElementById("pedidoQtd").innerText =
    qtd + (qtd === 1 ? " produto" : " produtos");
}

function abrirResumoPedido() {
  document.getElementById("pedidoModal").classList.remove("hidden");

  const nome = document.getElementById("nomeCliente").value || "Não informado";
  const telefone = document.getElementById("telefoneCliente").value || "Não informado";
  const cnpj = document.getElementById("cnpjCliente").value || "Não informado";

  document.getElementById("resumoNome").innerText = nome;
  document.getElementById("resumoTelefone").innerText = telefone;
  document.getElementById("resumoCNPJ").innerText = cnpj;

  const resumo = document.getElementById("pedidoResumo");
  resumo.innerHTML = "";
  let total = 0;

  carrinho.forEach(item => {
    total += item.preco * item.quantidade;
    resumo.innerHTML += `<p>🛒 <strong>${item.quantidade} unid</strong> × ${item.nome} — <strong>R$ ${(item.preco * item.quantidade).toFixed(2)}</strong></p>`;
  });

  document.getElementById("pedidoResumoTotal").innerText =
    total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}


function fecharResumoPedido() {
  document.getElementById("pedidoModal").classList.add("hidden");
}

function copiarPedido() {
  const nome = document.getElementById("nomeCliente").value || "Não informado";
  const telefone = document.getElementById("telefoneCliente").value || "Não informado";
  const cnpj = document.getElementById("cnpjCliente").value || "Não informado";

  let texto = `📋 *Resumo do Pedido*\n\n👤 Cliente: ${nome}\n📞 Telefone: ${telefone}\n🧾 CNPJ: ${cnpj}\n\n`;

  let total = 0;
  carrinho.forEach(item => {
    total += item.preco * item.quantidade;
    texto += `🛒 ${item.quantidade} × ${item.nome} — *R$ ${(item.preco * item.quantidade).toFixed(2)}*\n`;
  });

  texto += `\n💰 *Total do Pedido:* ${total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;

  navigator.clipboard.writeText(texto);
  alert("Pedido copiado!");
}

function enviarWhatsApp() {
  const nome = document.getElementById("nomeCliente").value || "Não informado";
  const telefone = document.getElementById("telefoneCliente").value || "Não informado";
  const cnpj = document.getElementById("cnpjCliente").value || "Não informado";

  let texto = `📋 *Resumo do Pedido*\n\n👤 Cliente: ${nome}\n📞 Telefone: ${telefone}\n🧾 CNPJ: ${cnpj}\n\n`;

  let total = 0;
  carrinho.forEach(item => {
    total += item.preco * item.quantidade;
    texto += `🛒 ${item.quantidade} × ${item.nome} — *R$ ${(item.preco * item.quantidade).toFixed(2)}*\n`;
  });

  texto += `\n💰 *Total do Pedido:* ${total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;

  window.open("https://wa.me/?text=" + encodeURIComponent(texto), "_blank");
}


function enviarWhatsApp() {
  const nome = document.getElementById("nomeCliente").value || "Não informado";
  const telefone = document.getElementById("telefoneCliente").value || "Não informado";
  const cnpj = document.getElementById("cnpjCliente").value || "Não informado";

  let texto = `📋 *Resumo do Pedido*\n\n👤 Cliente: ${nome}\n📞 Telefone: ${telefone}\n🧾 CNPJ: ${cnpj}\n\n`;

  let total = 0;
  carrinho.forEach(item => {
    total += item.preco * item.quantidade;
    texto += `🛒 ${item.quantidade} × ${item.nome} — *R$ ${(item.preco * item.quantidade).toFixed(2)}*\n`;
  });

  texto += `\n💰 *Total do Pedido:* ${total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;

  window.open("https://wa.me/?text=" + encodeURIComponent(texto), "_blank");
}

renderizarProdutos();

// --- FILTRO POR BUSCA ---
document.getElementById("searchInput").addEventListener("input", function () {
  const termo = this.value.toLowerCase();
  const cards = document.querySelectorAll(".card");
  const categorias = document.querySelectorAll(".cat-title");

  cards.forEach(card => {
    const nome = card.querySelector("h3").innerText.toLowerCase();
    if (nome.includes(termo)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });

  // 🔹 Mostra título apenas se houver produto visível
  categorias.forEach(titulo => {
    const grid = titulo.nextElementSibling;
    const temVisivel = Array.from(grid.querySelectorAll(".card"))
      .some(card => card.style.display !== "none");

    if (temVisivel) {
      titulo.style.display = "block";
      grid.style.display = "grid";
    } else {
      titulo.style.display = "none";
      grid.style.display = "none";
    }
  });
});



// --- FILTRO POR CATEGORIA ---
document.getElementById("categoryFilter").addEventListener("change", function () {
  const categoria = this.value;
  const grids = document.querySelectorAll(".grid");

  grids.forEach(grid => {
    const titulo = grid.previousElementSibling; // garante que pega o <h2>

if (!categoria || titulo.innerText === categoria) {
  grid.style.display = "grid";
  titulo.style.display = "block";
} else {
  grid.style.display = "none";
  titulo.style.display = "none";
}


  });
});

function salvarPDF() {
  const nome = document.getElementById("nomeCliente").value || "Não informado";
  const telefone = document.getElementById("telefoneCliente").value || "Não informado";
  const cnpj = document.getElementById("cnpjCliente").value || "Não informado";

  let texto = `Resumo do Pedido\n\nCliente: ${nome}\nTelefone: ${telefone}\nCNPJ: ${cnpj}\n\n`;

  let total = 0;
  carrinho.forEach(item => {
    total += item.preco * item.quantidade;
    texto += `${item.quantidade} × ${item.nome} — R$ ${(item.preco * item.quantidade).toFixed(2)}\n`;
  });

  texto += `\nTotal do Pedido: ${total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}`;

  // Usando jsPDF
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(texto, 10, 10);
  doc.save("pedido.pdf");
}
