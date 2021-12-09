function verificar() {
var ano = document.getElementById("ano");
var ano = Number(ano);
var masc = document.getElementById("mas");
var fem = document.getElementById("fem");
var verificar = document.getElementById("verificar");

    if (ano >= 0 && ano < 13) {
        //crianca
    } else if (ano >= 13 && ano < 20) {
    //adolescente
    } else if (ano >= 20 && ano < 60) {
        //adulto
    } else {
        //idoso
    }
}