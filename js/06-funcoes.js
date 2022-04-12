`use strict`; // Modo restrito
/* Funções são blocos de código que podem ser executados e reaproveitados em praticamente qualquer parte da sua aplicação.

Usar funções também é uma forma dde separar a lógica e organizar melhor sua programação.*/ 

// sintaxe tradicional
function linha(){
console.log("-------------");

}

let curso = "Programador Web";
let escola = "Senac";
let ano = 2022;

console.log(`Curso: ${curso}`);
linha();
console.log(`Escola: ${escola}`);
linha();
console.log(`ano:${ano}`);
linha();


function soma( valor1, valor2){
    let total = valor1 + valor2;
    return total;

}
console.log( soma(10, 5) );

