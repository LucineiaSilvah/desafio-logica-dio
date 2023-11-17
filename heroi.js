class heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }
  atacar() {
    let ataque = ""
    if (this.tipo === "Mago") {
      ataque = "magia"
    
    }else if (this.tipo === "guerreiro") {
      ataque = "espada"
    
    }else if (this.tipo === "Monge") {
      ataque = "Artes Marciais"
    
    }else if (this.tipo === "Ninja") {
      ataque = "shuriken"
    };
   console.log(`O ${this.tipo} atacou usando ${ataque} `);
  }
}
let guerreiro = new heroi("Arthur", 20, "guerreiro");
let mago = new heroi("Paula", 25, "Mago");
let monge = new heroi("Ana", 15, "Monge");
let ninja = new heroi("João", 18, "Ninja");



mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();

