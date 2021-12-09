const { writeHeapSnapshot } = require("v8");

function carregar() {
    var ola = window.document.getElementById("ola");
    var msg = window.document.getElementById("msg");
    var img = window.document.getElementById("imagem");
    var data = new Date();
    var hora = data.getHours();
    var minutos = data.getMinutes();
    msg.innerHTML = `Agora são ${hora}:${minutos}.`;

    if (hora >= 0 && hora < 12) {
        ola.innerHTML = "Bom Dia!";
        img.src = "/Desafio-horaAtual/imagens/manha.png";
        document.body.style.background = "#9CA869";
    } else if (hora >= 12 && hora < 18) {
        ola.innerHTML = "Boa Tarde!";
        img.src = "/Desafio-horaAtual/imagens/tarde.png";
        document.body.style.background = "#9B6240";
    } else {
        ola.innerHTML = "Boa Noite!";
        img.src = "/Desafio-horaAtual/imagens/noite.png";
        document.body.style.background = "#404D5B";
    }
}
