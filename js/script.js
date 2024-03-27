const exercicio1 = () => {
    document.getElementById("resposta").innerHTML = 
    "<h2>Resposta da atividade</h2>";
 for (let i = 1 ; i <= 10; i++) {

    document.getElementById("resposta").innerHTML += `#${i}`
}
}

const exercicio2 = () => {
    document.getElementById("resultado").innerHTML =
    "<h2>Resposta da atividade</h2>"
    for (let n = 0; n <= document.getElementById("num").value;) {
    document.getElementById("resultado").innerHTML += `#${n}`
        ;
        
    }
}

