/* Estruturas de Dados no JavaScript 
array (vetor)

Lista de dadosindexados*/

let alunos = ["Tiago", "joão", "Marilia", "vagner"];

console.log(alunos[1]);
console.log(alunos[2]);
console.log(alunos[3]);
console.log(alunos[4]);

console.log(alunos);

/* Exercicio Array:
1) Crie um array contendo os seguintes dados de uma pessoa:
- nome e sobrenome
- idade
- cidade
- estado

2) Mostre uma frase no console conforme o exemplo abaixo:
Fulano da Silva é da cidade de São Paulo e tem 20 anos.*/

let dados = ["Claudio Camargo", 49 ,"Guarulhos", "São Paulo"];

console.log(`${dados[0]} é da cidade de ${dados[2]} e tem ${dados[1]} anos.`);

console.log("------------------------------------------------------------------");

/* OBJETO
Lista de dados não-indexados */

let filme = {
    // propriedade: valor
    titulo: "Homen Aranha",
    ano: 2021,
    genero: "Ação/Ficção",
    classificação: 16
};

console.log(filme.titulo);
console.log(filme.genero)
console.log(`${filme.titulo} foi lançado em ${filme.ano}com classificação de +${filme.classificação}`);

/* Exercicio de Objeto
10 Crie um novo objeto contendo os dados (ficticios) de um pedido de uma loja virtual.exemplo:
- data do pedido
-produto comprado
-preço do pedido
-prazo de enrega */

/* mostre uma frase contendo as seguintes informações:
O produto XYZ foi comprado em 07/04/2022 com entrega em 07dias úteis */

let pedido = {

dia: "07/04/2022",
produto: "tomate",
valor: 400 ,
entrega: "20/04/2022"

};
console.log(
`O produto ${pedido.produto} foi comprado em ${pedido.dia} e sera entregue em ${pedido.entrega}`

)