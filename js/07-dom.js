/* Funções (ou metodos) de acesso/seleção ao Dom

-getElementById () -> seleciona um elemeto atraves do ID
-querySelecor ()  -> seleciona um elemento através de um seletor
-querySelectorAll () -> seleciona varios elementos através de seletor*/
// Exemplos

/* const titulo = document.getElementById("titulo-principal");
 */

const titulo = document.querySelector("#titulo-principal");
const subtitulos = document.querySelectorAll("h2");

console.log(titulo);
console.log(subtitulos);
console.log(subtitulos[0]);

// Leitura do conteudo
console.log( titulo.textcontent );
console.log( subtitulos[1].textContent );

// Alteração do conteudo
titulo.textContent = "olá Dom, meu velho amigo";
subtitulos[0].innerHTML = "<i>Aprendendo DOM</i>";

// Manipulando CSS via JS

// 1) inline
const pagina = document.querySelector("body");
pagina.style.backgroundColor = "lightblue";
pagina.style.fontFamily = "Verdana";
pagina.style.margin = 0;



// 2) Classe
const primeiroItem = document.querySelector("#lista-editores li:first-child");
console.log(primeiroItem);
primeiroItem.classList.add("destaque-item");
