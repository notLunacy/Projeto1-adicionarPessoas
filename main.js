class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

class Corolla {
  constructor() {
    this.assentos = [];
  }
  
  addPessoa(pessoa) {
    this.assentos.push(pessoa);
  }
}

const corolla = new Corolla();
const botao = document.querySelector('button');

botao.addEventListener('click', () => {
  const nome = prompt('Digite um nome');
  const pessoa = new Pessoa(nome);
  corolla.addPessoa(pessoa);
  console.log(corolla);
  let assentos = corolla.assentos.length;
  let verificarAssentos = assentos >= 5 ? console.log("O carro está cheio") : console.log("Ainda tem espaço");
});