var comprarRefrigerante = false;
var comprarCerveja = false;
var comprarSucoNatural = false;

var convidado = {
    nome: 'Anderson',
    idade: 17,
    bebeCerveja: true,
    bebeRefrigerante : false
    
}

if (convidado.bebeRefrigerante){
    comprarRefrigerante = true;
} else if (convidado.bebeCerveja && convidado.idade >= 18){
    comprarCerveja = true;
} else {
    comprarSucoNatural = true;
}
// Vimos que i convidado não tem idade para tomar cerveja porém não bebe refrigerante então ele caiu na ultima condicional.
console.log(`O ${convidado.nome} ele tem ${convidado.idade} anos de idade e gosta das seguintes bebidas: Refrigerante = ${convidado.bebeRefrigerante}, Cerveja = ${convidado.bebeCerveja} e Suco Natural = ${convidado.comprarSucoNatural}. E na Festa ele pode consumir? Refrigerante: ${comprarRefrigerante}, Cerveja: ${comprarCerveja} e Suco Natural: ${comprarSucoNatural}.`);