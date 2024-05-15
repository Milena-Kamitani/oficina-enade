class No {
  constructor(dado, prioridade) {
      this.dado = dado;
      this.prioridade = prioridade;
      this.proximo = null;
  }
}

class ListaEncadeada {
  constructor() {
      this.topo = null;
  }


  inserirComPrioridade(dado, cor) {
      let prioridade = cor === "amarelo" ? 1 : 0; 
      let novoNo = new No(dado, prioridade);

      if (!this.topo || prioridade > this.topo.prioridade) {
        novoNo.proximo = this.topo;
        this.topo = novoNo;
    } else {
        let atual = this.topo;
        
        while (atual.proximo && prioridade <= atual.proximo.prioridade) {
            atual = atual.proximo;
        }
        novoNo.proximo = atual.proximo;
        atual.proximo = novoNo;
    }
}

imprimirLista() {
    let atual = this.topo;
    while (atual) {
        console.log(`Dado: ${atual.dado}, Prioridade: ${atual.prioridade === 1 ? "amarelo" : "verde"}`);
        atual = atual.proximo;
    }
}
}

let lista = new ListaEncadeada();
lista.inserirComPrioridade("Item 1", "amarelo");
lista.inserirComPrioridade("Item 2", "verde");
lista.inserirComPrioridade("Item 3", "amarelo");
lista.imprimirLista();
