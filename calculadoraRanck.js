function calcularRank(vitorias, derrotas) {
  return vitorias - derrotas;
}
function classificar(nVitorias) {
  let nivel = "";
  if (nVitorias < 10) {
    return (nivel = "Ferro");
  } else if (nVitorias >= 11 && nVitorias <= 20) {
    return (nivel = "Bronze");
  } else if (nVitorias >= 21 && nVitorias <= 50) {
    return (nivel = "Prata");
  } else if (nVitorias >= 51 && nVitorias <= 80) {
    return (nivel = "Ouro");
  } else if (nVitorias >= 81 && nVitorias <= 90) {
    return (nivel = "Diamante");
  } else if (nVitorias >= 91 && nVitorias <= 100) {
    return (nivel = "Lendário");
  } else if (nVitorias > 100) {
    return (nivel = "Imortal");
  } else {
    return "Numero de vitorias não se aplica no rank";
  }
}
let saldoVitorias = calcularRank(10, 5);
let nivel = classificar(81);

console.log(`O Herói tem o Saldo de ${saldoVitorias} Vitórias, e 
seu Nível é  ${nivel}!`);
