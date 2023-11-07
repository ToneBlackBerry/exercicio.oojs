class Carro {
  constructor(nome) {
    this.nome = nome
  }
}

class Gol extends Carro {
  constructor(nome, cor) {
    super(nome)
    this.cor = cor
  }
}
class Fox extends Carro {
  constructor(nome, cor) {
    super(nome)
    this.cor = cor
  }
}

// Criando instâncias das classes criadas
const carro1 = new Carro('Carro1')
const gol1 = new Gol('Gol quadrado 1997', 'Azul')
const fox1 = new Fox('Fox', 'Preto')

console.log(gol1)
console.log(fox1)
