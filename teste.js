import PromptSync from 'prompt-sync'
const prompt = PromptSync()

/*
function maiorValor(a,b,c){
    let maiorValor = a


    if(b > a && b > c){
        maiorValor = b
    } else if(c > a && c > b){
        maiorValor = c
    }


    return maiorValor
}

console.log(maiorValor(4,3,15))

function tabuada(num,limite){
    for (let i = 1; i <= limite; i++) {
        console.log(`${i}X${num} = ${i*num}`)
    }
}

tabuada(3,5)

const listaValores = [2,9,7,1,10]

let maiorValorLista = listaValores[0]
let menorValorLista = listaValores[0]

for (let i = 1; i < listaValores.length; i++) {
    if(listaValores[i] > maiorValorLista){
        maiorValorLista = listaValores[i]
    }
    if(listaValores[i] < menorValorLista){
        menorValorLista = listaValores[i]
    }
}

function compareNumbers(a, b) {
    return a - b;
}
console.log(listaValores.sort(compareNumbers))
console.log(maiorValorLista,menorValorLista)

let nomePessoa = prompt("Digite o nome da pessoa: ")
let textoPessoa = ''
while(nomePessoa != ''){
    textoPessoa += `${nomePessoa} | `
    let hobbyPessoa = prompt("Digite um hobby da pessoa: ")
    while(hobbyPessoa != ''){
        textoPessoa += `${hobbyPessoa},`
        hobbyPessoa = prompt("Digite outro hobby da pessoa (ou vazio para sair): ")
    }
    textoPessoa = textoPessoa.slice(0,-1)
    textoPessoa += '\n' // quebra de linha
    nomePessoa = prompt("Digite o nome de outra pessoa (vazio para sair): ")
}
console.log(textoPessoa)

// Nome | Hobby1, Hobby2
// const arrayPessoas = [
//     ['nome',['a','b','c']],
//     ['nome2', ['a','f','g']]
// ]
// arrayPessoas[1][1][2]
// hobbies = []
// hobbies.push('a')
// hobbies.push('f')
// hobbies.push('g')
// arrayPessoas.push(['nome2',hobbies])
// while(){
//     while(){
//     }
// }
// console.log(array)

*/

function somar(a,b,callback){
    const resultado = a+b
    callback(resultado)
}

function imprimir(texto){
    console.log(texto)
}

function dobrar(valor){
    return valor * 2
}

somar(10,15,imprimir)
console.log(somar(20,10,dobrar))
somar(10,20,(texto,a)=>{
    console.log(texto * 10)
})
somar(10,5,function(resultado){
    console.log(resultado * 10)
})


const arrayPessoas = [
    ['nome',['a','b','c']],
    ['nome2', ['a','f','g']]
]

console.table(arrayPessoas)
arrayPessoas.forEach((item,i)=>{
    console.log(i)
    console.log(item)
})