const carro = {
  ligado: false,
  velocidade: 0,
  devolveStatusCarro: function () {
    return this.ligado ? "ligado" : "desligado";
  },
  imprimeStatusCarro: function () {
    console.log(`Carro ${this.devolveStatusCarro()}. Velocidade: ${this.velocidade}.`);
  },
  ligar: function () {
    if (this.ligado) {
      console.log("Este carro já está ligado.");
    } else {
      this.ligado = true;
      this.imprimeStatusCarro();
    }
  },
  desligar: function () {
    if (!this.ligado) {
      console.log("Este carro já está desligado.");
    } else {
      if (this.velocidade > 0) {
        console.log("Não é possível desligar um carro em movimento.");
      } else {
        this.ligado = false;
        this.velocidade = 0;
        this.imprimeStatusCarro();
      }
    }
  },
  acelerar: function () {
    if (!this.ligado) {
      this.ligado = true;
    }
    this.velocidade += 10;
    this.imprimeStatusCarro();
  },
  desacelerar: function () {
    if (!this.ligado) {
      console.log("Não é possível desacelerar um carro desligado.");
    } else {
      this.velocidade -= 10;
      if (this.velocidade === 0) {
        this.ligado = false;
      }
      this.imprimeStatusCarro();
    }
  }
}

// carro.desligar();
// carro.ligar();
// carro.ligar();
// carro.acelerar();
// carro.acelerar();
// carro.desacelerar();
// carro.desligar();
carro.acelerar();
carro.desacelerar();