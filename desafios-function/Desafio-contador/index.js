function contar() {
    let inicio = document.getElementById("i").value;
    let fim = document.querySelector("#f").value;
    let passo = document.querySelector("#p").value;
    let msg = document.getElementById("mensagem");


    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        window.alert("[ERRO] Faltam dados!");
    } else {
        msg.innerHTML = "Contando: "

        let resultado = inicio + passo;
        for (let i=inicio; resultado>fim; i+=passo) {
            msg.innerHTML += `${resultado}`
            console.log(resultado);
            
        }
    }

    if (passo == 0) {
        window.alert(msg.innerHTML = "Passo Inválido! Considerando PASSO 1");
        
    } else {
        if(inicio <= fim) {
            do {
                resultado = inicio + passo;
            } while (resultado <= fim);
            msg.innerHTML = `${resultado} > `;    
        } else if (inicio >= fim) {
            do {
                resultado = inicio - passo;
            } while (resultado <= fim);
            msg.innerHTML = `${resultado} > `;
        } else {
            msg.innerHTML = "0";
        }

    }

}