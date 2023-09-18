/*
Utilizando forEach percorra o seguinte array imprimindo apenas os valores que são maiores que 10:
*/
const arrayPrint = [
    [5, 10, 12],
    [2, 9, 11],
    [15, 8, 6]
]

arrayPrint.forEach(function(vetor){
    vetor.forEach(function(num){
        if (num > 10) {
            console.log(num)
        }
    })  
})