//pegar o imput
//Se for Sim, mostra as categorias disponiveis, e pergunta qual categoria ela escolhe
//Se escolher não, mostra todos os livros, em ordem crescente, pela quantidade de paginas

const livros = require("./database")

const readline = require("readline-sync")

const entradaInicial = readline.question("Deseja buscar um livro? S/N: ")

if(entradaInicial.toLocaleUpperCase() === "S"){
    console.log("Essas são as categoria disponiveis")
    console.log("Produtividade", "/História brasileira", "/Américas", "/Tecnologia", "Estilo de vida", "/Tecnologia")

    const entradaCategoria = readline.question("Qual categoria voce escolhe? ")

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
}else{
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log("Esses são todos os livros disponíveis")
    console.table(livrosOrdenados)
}
