console.log("Camargo");
/* Estruturas tradisionais:
while -      enquanto
do/while -   faça/enquanto
for -        para
*/

// Exemplo Camargo while (enquanto)
console.log("while"); 
let i = 1;


while( i <= 3 ){
    console.log(`Valor de contador: ${i}`);
    i++;
}
console.log("----------");
console.log("do/while");

let j = 1; // variavel de controle
do {
    console.log(`j vale ${j}`);
    j++;
}while( j <= 3 )

console.log("---------------");

console.log("for");

for( let i = 1; i <= 5; i++){
    console.log(`I vale: ${i}`);
}
console.log("-----------------");

console.log("Loop E Estrutura de Dados");

// aray (vetor)
let alunos = ["Eduardo", "Vagner", "Thalia", "Claudio", "Jessica"];

for( let i = 0; i < 5; i++){
    console.log( alunos[i]);
}
/* sort () função para ordenar arrays*/
// console.lo( alunos.sort());

console.log("---------------------------");

console.log("Loops exclusivos de JS");

// for/of: otimo para arrays

for( let aluno of alunos){
    console.log(aluno);
}

let livro = {
    titulo: "Senhor dos Aneis",
    ano: 1954,
    volumes: 3
};

// for/in
for( let dados in livro){
    console.log( livro[dados]);
}
