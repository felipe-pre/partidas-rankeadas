
let resultado = calculateRank(10, 5)//RETORNO DA FUNÇÃO

//CRIANDO A LOGICA PARA ANALISE DE RANK
let nameHero = "Goku"
let vitorias = 10

if (vitorias <= 10){
    console.log("O heroi tem o saldo de " + vitorias + " vitorias " + " e está no nivel de " + resultado + " Ferro")
}else if (vitorias <= 20) {
    console.log("O heroi tem o saldo de " + vitorias + " vitorias " +" e está no nivel de " + resultado + " Bronze")
}else if (vitorias <= 50) {
    console.log("O heroi tem o saldo de " + vitorias + " vitorias " + " e está no nivel de " + resultado + " Prata")
}else if (vitorias <= 80) {
    console.log("O heroi tem o saldo de " + vitorias + " vitorias " +" e está no nivel de " + resultado + " Ouro")

}else if (vitorias <= 90){
    console.log("O heroi tem o saldo de " + vitorias + " vitorias " + " e está no nivel de " + resultado + " Diamante")
}else if (vitorias <= 100) {
    console.log("O heroi tem o saldo de " + vitorias + " vitorias " + " e está no nivel de " + resultado + " Lendário")
}else {
    console.log("O heroi tem o saldo de " + vitorias + " vitorias " +" e está no nivel de " + resultado + " Imortal")
}



function calculateRank( vitorias, derrotas) {
    let rank = vitorias - derrotas
    return rank                
}