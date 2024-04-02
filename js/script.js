const exercicio1 = () => {
  document.getElementById("resposta").innerHTML =
    "<h2>Resposta da atividade</h2>";
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `#${i}`;
  }
};
//--------------------------------------------------------------------------
const exercicio2 = () => {
  document.getElementById("resultado").innerHTML =
    "<h2>Resposta da atividade</h2>";
  for (let n = 0; n <= document.getElementById("num").value; ) {
    document.getElementById("resultado").innerHTML += `#${n}`;
  }
};
//--------------------------------------------------------------------------
const exercicio3 = () => {
  let num = document.getElementById("num").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  if (num <= 1) {
    document.getElementById(
      "erro"
    ).innerText = ` O número ${num} não é primo!`;
    result.innerText = "";
  } else {
    error.innerText = "";
    result.innerText = "";
    let primo = true; // declarei variavel para primo
    for (let i = 2; i < num; i++) {
      if (num % i == 0) primo = false; // % resto da divisão
    }
    primo
      ? (result.innerText = `O número ${num} é primo!`)
      : (error.innerText = `O número ${num} não é primo`);
  }
};
//--------------------------------------------------------------------------

const exercicio4 = () => {
    let num = document.getElementById("num").value;
    let result = document.getElementById("resultado");
    let resposta = document.getElementById("resposta");
    let error = document.getElementById("erro");
    
    for (let i = 1; i <= 10; i++) {
    resposta.innerHTML = num * i;
   
    if (num <=0) {
    erro.innerText = `esse número não é valido`

}else{
    result.innerText = "";
    error.innerText = "";
    result.innerHTML -= `${num} X ${1} = ${num * 1} </br>`
};
 };
};

//--------------------------------------------------------------------------

const exercicio5 = () => {
   let num = document.getElementById("num").value;
   let result = document.getElementById("resultado");
  
   let contador = 0
   result.innerText = "";

    while (contador <= num ) {
    if (contador % 2 !== 0);
    result.innerText += `${contador}, `
    contador++
 }
}

//--------------------------------------------------------------------------

const exercicio6 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  
}
//--------------------------------------------------------------------------

const exercicio7 = () => {
 let resposta = document.getElementById("resposta");
 let result = document.getElementById("resultado");
let contador = 10;


while (contador > 0) {
 
    resposta.innerText += `${contador}` ;
  contador--;
  
}
}

//--------------------------------------------------------------------------

const exercicio8 = () => {
    
}
//--------------------------------------------------------------------------

const exercicio10 = () => {

}
//--------------------------------------------------------------------------

const exercicio9 = () => {
let somar = 0;

let result = document.getElementById("resultado");

for (let i =1 ; i <= 100; i++) {
    somar += i;
}
result.innerText= somar 

}