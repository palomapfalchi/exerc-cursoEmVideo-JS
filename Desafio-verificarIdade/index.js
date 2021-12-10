function verificar() {
var data = new Date();
var anoAtual = data.getFullYear();
var ano = document.getElementById("ano");

var msg = document.getElementById("mensagem");

if (ano.value.length == 0 || ano.value > anoAtual) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
} else {
    var genero = document.getElementsByName("opc");
    var idade = anoAtual - Number(ano.value);
    var generoSelec = "";
    var img = document.createElement("img"); //cria img no html
    img.setAttribute("id", "foto"); //cria atributo <img id="foto">

    if (genero[0].checked) {
        generoSelec = "masculino";
        if (idade >= 0 && idade < 13) {
                //crianca
                img.setAttribute("src", "crianca-m.png");
            } else if (idade >= 13 && idade < 20) {
                //adolescente
                img.setAttribute("src", "adolescente-m.png");
            } else if (idade >= 20 && idade < 60) {
                //adulto
                img.setAttribute("src", "adulto-m.png");
            } else {
                //idoso
                img.setAttribute("src", "idoso-m.png");
            }    

    } else if (genero[1].checked) {
        generoSelec = "feminino";
        if (idade >= 0 && idade < 13) {
            //crianca
            img.setAttribute("src", "crianca-f.png");
        } else if (idade >= 13 && idade < 20) {
            //adolescente
            img.setAttribute("src", "adolescente-f.png");
        } else if (idade >= 20 && idade < 60) {
            //adulto
            img.setAttribute("src", "adulto-f.png");
        } else {
            //idoso
            img.setAttribute("src", "idoso-f.png");
        }    
    }
}

    msg.innerHTML = `Detectamos o gênero ${generoSelec} com ${idade} anos. `
    msg.appendChild(img)
}
