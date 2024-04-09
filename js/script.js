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
    document.getElementById("erro").innerText = ` O número ${num} não é primo!`;
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

    if (num <= 0) {
      erro.innerText = `esse número não é valido`;
    } else {
      result.innerText = "";
      error.innerText = "";
      result.innerHTML -= `${num} X ${1} = ${num * 1} </br>`;
    }
  }
};

//--------------------------------------------------------------------------

const exercicio5 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");

  let contador = 0;
  result.innerText = "";

  while (contador <= num) {
    if (contador % 2 !== 0);
    result.innerText += `${contador}, `;
    contador++;
  }
};

//--------------------------------------------------------------------------

const exercicio6 = () => {
  let result = document.getElementById("resultado");
  let num = document.getElementById("num").value;

  let soma = 0;
  let contador = 0;

  while (contador <= num) {
    if (contador % 2 === 0) {
      soma += contador;
    }
    contador++;
  }
  result.innerHTML += `${soma}`;
};

//--------------------------------------------------------------------------

const exercicio7 = () => {
  let resposta = document.getElementById("resposta");
  let result = document.getElementById("resultado");
  let contador = 10;

  while (contador > 0) {
    resposta.innerHTML += `${contador}, `;
    contador--;
  }
};

//--------------------------------------------------------------------------

const exercicio8 = () => {
  let palavra = document.getElementById("palavra").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";

  let inversa = "";

  if (palavra == "") {
    error.innerText = "Favor informar uma palavra!";
  } else {
  }
  for (let i = 1; i <= palavra.length; i++) {
    inversa += palavra.charAt(palavra.length - i);
  }

  palavra.toLowerCase() == inversa.toLowerCase()
    ? (result.innerText = "A palavra é um palíndromo!")
    : (error.innerText = "A palavra não é um palíndromo!");
};
//--------------------------------------------------------------------------

const exercicio9 = () => {
  let somar = 1;
  result.innerText = "";
  let result = document.getElementById("resultado");

  for (let i = 1; i <= 100; i++) {
    somar += i;
  }
  result.innerHTML = `${somar}`;
};

//--------------------------------------------------------------------------

const exercicio10 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let cont = 0;
  let soma = 0;
  let media = soma / (num + 1);

  while (cont <= num) {
    soma += cont;
    cont++;

    result.innerHTML = `A soma é ${soma}. A média é ${soma / num}`;
  }
};

//-----------------------------------------------------------------------

const exercicio11 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let multiplos = 3;
  result.innerHTML = "";

  for (let i = 1; i <= 100; i += 3) {
    if (i % 3 == 0) result.innerHTML += `${multiplos}`;
  }
};

//------------------------------------------------------------------------

const exercicio12 = () => {
  let calcularSoma = () => {
    let numero = document.getElementById("número").value;

    let soma = 0;

    for (let i = 0; i < numero.lenght; i++) {
      soma += parseInt(numero.charAt(i));
    }

    document.getElementById(
      "resultado"
    ).innerText = `A soma dos digitos é ${soma}`;
  };
};

//-------------------------------------------------------------------------

const exercicio13 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let menor, maior;

  if (num1 < num2) {
    menor = num1;
    maior = num2;
  } else {
    menor = num2;
    maior = num1;
  }

  if (menor <= 0 || maior <= 0) {
    error.innerText = `O número não é válido! Insira um número positivo!`;
    result.innerText = "";
  } else {
    error.innerText = "";
    result.innerHTML = "";
  }

  for (let numPrimo = menor; numPrimo <= maior; numPrimo++) {
    let primo = true;
    for (let i = 2; i < numPrimo; i++) {
      if (numPrimo % i == 0) primo = false;
    }
    primo && (result.innerText += `|${numPrimo}`);
  }
};

//-------------------------------------------------------------------------

const exercicio14 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  if (num1 <= 0 || num2 <= 0) {
    error.innerText = "O número não é válido, favor informar outro número!";
    result.innerHTML = "";
  } else {
    let area = num1 * num2;
    error.innerText = "";
    result.innerHTML = `O lado ${num1} com o ${num2} resultará em: ${area}`;
  }
};

//---------------------------------------------------------------------------

const exercicio15 = () => {
  let frase = document.getElementById("palavra").value;
  let result = document.getElementById("resposta");
  let error = document.getElementById("erro");
  let sim = frase.split("");
  let vogais = ["a", "e", "i", "o", "u"];
  let consoantes = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  result.innerText = "";
  error.innerText = "";
  if (frase == "") {
    error.innerText = "Digite a frase!";
  } else {
    for (let p = 0; p < frase.lenght; p++) {
      for (let i = 0; i < vogais.lenght; i++) {
        if (frase[p] == vogais[i]) {
          result.innerText += vogal = `| ${frase[p]}`;
        }
      }
      for (let s = 0; s < consoantes.length; s++) {
        if (frase[p] == consoantes[s]) {
          error.innerText += consoantes = `| ${frase[p]}`;
        }
      }
    }
  }
};

//---------------------------------------------------------------------------

const exercicio16 = () => {
  let raio = document.getElementById("num1").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  if (raio <= 0) {
    error.innerText = "O número não é válido, favor informar outro número!";
    result.innerHTML = "";
  } else {
    let area = Math.PI * raio * 2;
    error.innerText = "";
    result.innerHTML = `O raio da circunferência ${raio} resultará em: ${area.toFixed(
      2
    )}`;
  }
};

//-------------------------------------------------------------------------

const exercicio17 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  if (num1 <= 0 || num2 <= 0) {
    error.innerText = "O número não é válido, favor informar outro número!";
    result.innerHTML = "";
  } else {
    let area = (num1 * num2) / 2;
    error.innerText = "";
    result.innerHTML = `A base ${num1} com a ${num2} resultará em: ${area}`;
  }
};

//-------------------------------------------------------------------------

const exercicio18 = () => {
  let base1 = document.getElementById("num1").value;
  let base2 = document.getElementById("num2").value;
  let altura = document.getElementById("num3").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");

  if (base1 == 0 || base2 == 0 || altura == 0) {
    error.innerText = "O número não é válido, favor informar outro número!";
    result.innerHTML = "";
  } else {
    let area = (altura * (base1 + base2)) / 2;
    error.innerText = "";
    result.innerHTML = `A base menor: ${base1} com a base maior: ${base2} com a altura: ${altura}, resultará na área ${area}`;
  }
};

//----------------------------------------------------------------------------

const exercicio19 = () => {
  let data1 = document.getElementById("data").value;
  let dataAniversario = new Date(data1);
  let dataAtual = new Date();
  let result = document.getElementById("resultado");

  let idade = dataAtual.getFullYear() - dataAniversario.getFullYear();
  let idadeMes = dataAtual.getMonth() - dataAniversario.getMonth();

  if (idadeMes < 0 || dataAtual.getDate() < dataAniversario.getDate()) {
    idade--;
  }
  result.innerText = `A pessoa possui ${idade} anos`;
};

//----------------------------------------------------------------------------

const exercicio20 = () => {
  let frase = document.getElementById("frase").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");

  let fraseInv = "";

  if (frase === "") {
    error.innerText = "Insira uma frase!";
    result.innerText = "";
  } else {
    for (var i = frase.lenght - 1; i >= 0; i--) {
      fraseInv += frase[1];
    }
    result.innerHTML = `${fraseInv}`;
    error.innerText = "";
  }
};

//----------------------------------------------------------------------------

const exercicio21 = () => {
  let frase = document.getElementById("frase");
  let result = document.getElementById("resultado");
  let fraseSemEspacos = frase.replace(/\s/g, "");

  result.innerHTML = `${fraseSemEspacos}`;
};

//------------------------------------------------------------------------------
var soma22 = 0;
const exercicio22 = () => {
  let num = document.getElementById("num").value;
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  let contador = 0;

  if (num <= 0) {
    error.innerText = `O número ${num} não é válido! Insira um número positivo.`;
    result.innerText = "";
  } else if (soma22 <= 100) {
    soma22 += parseInt(num);
    result.innerText = soma22;
    error.innerHTML = "";
    contador++;
  }
};

//------------------------------------------------------------------------------

const exercicio23 = () => {
  let palavra = document.getElementById("palavra").value.toLowerCase();
  let frase = document.getElementById("frase").value.toLowerCase();
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  error.innerText = "";
  result.innerText = "";

  let palavraFrase = frase.split(" ");
  let contador = 0;

  if (frase == "" || palavra == "") {
    error.innerText = "Preencha os campos!";
  } else {
    for (let i = 0; i < palavraFrase.length; i++) {
      if (palavraFrase[i] === palavra) {
        contador++;
        result.innerText = `A palavra '${palavra}' apareceu ${contador} vezes na frase`;
        error.innerText = "";
      }
    }
  }
};

//--------------------------------------------------------------------------------

const exercicio24 = () => {
  let valor = document.getElementById("frase").value;
  let frase = valor.split(" ");
  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  const letrasMaiusculas = [];
  error.innerText = "";
  result.innerText = "";

  if (valor == "") {
    error.innerText = "Informe uma frase!";
  } else {
    const mudarFrase = frase.map((palavra) => {
      //faz alteração na função
      const primeiraLetraMaiuscula = palavra[0].toUpperCase(); // seleciona a primeira letra da palavra
      letrasMaiusculas.push(primeiraLetraMaiuscula); //A primeira letra irá ficar maiuscula dentro do vetor
      return primeiraLetraMaiuscula + palavra.slice(1); //adicionar letras maiusculas na frase
    });
    resultado.innerHTML = `${mudarFrase.join(" ")}`;
  }
};

//--------------------------------------------------------------------------

const exercicio25 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;

  let result = document.getElementById("resultado");
  let error = document.getElementById("erro");
  const letrasMaiusculas = [];
  error.innerText = "";
  result.innerText = "";

  let numeros = [num1, num2, num3];

  if (num1 > 0 && num2 > 0 && num3 > 0) {
    numeros = numeros.sort((a, b) => a - b);
    for (let i = 0; i < 3; i++) {
      result.innerHTML += `#${numeros[i]}`;
    }
  } else {
    error.innerHTML = "Informe números positivos!";
  }
};
//------------------------------------------------------------------------
