let nivel = "" //Nivel do jogador
let saldoVitorias = rank(79, 3) // Vitórias e derrotas

function rank(win, lose){
    return win - lose
}

while (nivel === "") {
    if (saldoVitorias <= 10) {nivel = "ferro"}
    else if (saldoVitorias <= 20) {nivel = "bronze"}
    else if (saldoVitorias <= 50) {nivel = "prata"}
    else if (saldoVitorias <= 80) {nivel = "ouro"}
    else if (saldoVitorias <= 90) {nivel = "diamante"}
    else if (saldoVitorias <= 100) {nivel = "lendário"}
    else if (saldoVitorias >= 101) {nivel = "imortal"}
    saldoVitorias--
}

console.log("O Héroi tem de saldo de", saldoVitorias, "está no nivel de",nivel)