class Carro {
  modelo: string;
  cor: string;

  constructor(modelo: string, cor: string) {
    this.modelo = modelo;
    this.cor = cor;
  }

  info() {
    return `Carro modelo: ${this.modelo}, cor: ${this.cor}`;
  }
}

class CarroBuilder {
  private modelo: string = "Padrão";
  private cor: string = "Branco";

  setModelo(modelo: string): CarroBuilder {
    this.modelo = modelo;
    return this;
  }

  setCor(cor: string): CarroBuilder {
    this.cor = cor;
    return this;
  }

  build(): Carro {
    return new Carro(this.modelo, this.cor);
  }
}

const carro1 = new CarroBuilder()
  .setModelo("Sedan")
  .setCor("Vermelho")
  .build();

const carro2 = new CarroBuilder()
  .setModelo("SUV")
  .setCor("Preto")
  .build();

console.log(carro1.info());
console.log(carro2.info());
