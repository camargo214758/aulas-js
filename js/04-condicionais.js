/* Estrutura Condicional
if (se), else (senão), else if (senão se)

Operadores relacionais (usados com condicionais)
> maior que
> menor que
>= maior ou igual
<= menor ou igual
== igualdade
!= diferente */

// Exemplo 1: condicional simples ( usa so o IF)

let numero = 10;

if( numero > 0 ) {
    console.log(`${numero} é maior que zero`);
}

// Exemplo 2: condicional composta (IF/ELSE)

let aluno = "João";
let nota1 = 10;
let nota2 = 10;
let media = (nota1 + nota2) /2;

console.log(`aluno: ${aluno}`);
console.log(`notas: ${nota1} e ${nota2}`);
console.log(`media: ${media}`);

let faltas = 10;

if( media >= 7 && faltas < 15 ){
    console.log("aprovado");
}  else{
        console.log("reprovado");
   
}

// Exemplo 3: condicional ENCADEADA (IF, ELSE IF, ELSE)

let desempenho;
if( media < 3){
desempenho = "pessimo";
} else if(media < 5){
    desempenho = "ruim";
}else if(media <7){
    desempenho = "regular";
}else if(media <9){
    desempenho = "bom";
}else {
    desempenho = "otimo";
}
console.log(desempenho);
