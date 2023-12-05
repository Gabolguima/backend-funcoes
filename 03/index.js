const carrinho = {
  nomeDoCliente: "Guido Bernal",
  produtos: [
    {
      id: 1,
      nome: "Camisa",
      qtd: 3,
      precoUnit: 3000
    },
    {
      id: 2,
      nome: "Bermuda",
      qtd: 2,
      precoUnit: 5000
    }
  ],
  imprimirResumoDoCarrinho: function () {
    let precoTotalItensTexto = `${(this.calcularTotalAPagar() / 100).toFixed(2)}`;

    console.log(`Cliente: ${this.nomeDoCliente}`);
    console.log(`Total de itens: ${this.calcularTotalDeItens()} itens`);
    console.log(`Total a pagar: R$ ${precoTotalItensTexto}`);
  },
  addProduto: function (produto) {
    let indiceProdutoExistente = -1;

    for (let i = 0; i < this.produtos.length; i++) {
      if (this.produtos[i].id === produto.id) {
        indiceProdutoExistente = i;
        break;
      }
    }

    if (indiceProdutoExistente === -1) {
      this.produtos[this.produtos.length] = produto;
    } else {
      this.produtos[indiceProdutoExistente].qtd += produto.qtd;
    }
  },
  imprimirDetalhes: function () {
    console.log(`Cliente: ${this.nomeDoCliente}`);
    console.log("");

    let qtdTotalDeItens = this.calcularTotalDeItens();
    let precoTotalDeItens = this.calcularTotalAPagar();
    let precoTotalItensTexto = `${(precoTotalDeItens / 100).toFixed(2)}`;

    for (let i = 0; i < this.produtos.length; i++) {
      let produto = this.produtos[i];
      let totalAPagar = (produto.precoUnit / 100).toFixed(2);

      console.log(`Item ${i + 1} - ${produto.nome} - ${produto.qtd} und - R$ ${totalAPagar.replace(".", ",")}`);
    }

    console.log("");
    console.log(`Total de itens: ${qtdTotalDeItens} itens`);
    console.log(`Total a pagar: R$ ${precoTotalItensTexto.replace(".", ",")}`);
  },
  calcularTotalDeItens: function () {
    let qtdTotalDeItens = 0;

    for (const produto of this.produtos) {
      qtdTotalDeItens += produto.qtd;
    }
    return qtdTotalDeItens;
  },
  calcularTotalAPagar: function () {
    let precoTotalDeItens = 0;

    for (const produto of this.produtos) {
      precoTotalDeItens += produto.qtd * produto.precoUnit;
    }
    return precoTotalDeItens;
  },
  calcularDesconto: function () {
    let qtdTotalDeItens = this.calcularTotalDeItens();
    let precoTotalDeItens = this.calcularTotalAPagar();

    let descontoPorItens = 0;
    let descontoPorTotal = 0;

    if (qtdTotalDeItens > 4) {
      descontoPorItens = this.produtos[0].precoUnit;
      for (let i = 1; i < this.produtos.length; i++) {
        if (this.produtos[i].precoUnit < descontoPorItens) {
          descontoPorItens = this.produtos[i].precoUnit;
        }
      }
    }
    if (precoTotalDeItens > 10000) {

      descontoPorTotal = precoTotalDeItens * 0.1;
    }
    return descontoPorItens > descontoPorTotal ? descontoPorItens : descontoPorTotal;
  }
}
console.log(`Desconto de R$ ${(carrinho.calcularDesconto() / 100).toFixed(2).replace(".", ",")}`);
console.log("");

const novaBermuda = {
  id: 2,
  nome: "Bermuda",
  qtd: 3,
  precoUnit: 5000
}

carrinho.addProduto(novaBermuda);

const novoTenis = {
  id: 3,
  nome: "Tenis",
  qtd: 1,
  precoUnit: 10000
}

carrinho.addProduto(novoTenis);

console.log(`Desconto de R$ ${(carrinho.calcularDesconto() / 100).toFixed(2).replace(".", ",")}`);
console.log("");

// carrinho.imprimirResumoDoCarrinho();
console.log("");
carrinho.imprimirDetalhes();
