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


// Versão 1: sintaxe tradicional
/* function soma( valor1, valor2){
    let total = valor1 + valor2;
    return total;
}
 */

    
    // Versão 2: sintaxe ARROW FUNCTION ( FUNÇÂO Seta/flecha)
    const soma = (valor1, valor2) => {
        let total = valor1 + valor2;
        return total;
    }
    
    
    // arrow function com retorno implicito
    const soma1 = (valor1, valor2) => valor1 + valor2;

console.log( soma1(150, 55) );



linha();


/* function dobra(numero){
    let resultado = numero * 2;
    return resultado;
} */
// Versão 2: arrow function
/* const dobra = (numero) => {
let resultado = numero *2;
return resultado;
}; */

/* const dobra = (numero) => {
    return numero * 2
} */

// retorno Implicito  remove {} e return)
// Obs.: como só temos um parametro (numero), pode tirar os ()
const dobra = numero => numero * 2;


console.log( dobra(10) )
console.log(dobra(150) );

linha();

let nota1 = 8.5;
let nota2 = 7.4;

const calculamedia = (n1, n2) => (n1 + n2) / 2;

// Obs.: se não tem parametros, tambemprecisa usar ()
const linha2 = () => console.log("*************");