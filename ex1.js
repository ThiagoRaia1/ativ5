/*
Crie uma função chamada calcularPrecoComDesconto, essa função vai receber 3 parâmetros - (valor do produto, quantidade de 
produto e uma função callback que aplica o desconto e devolve o valor atualizado) e implementar ao menos uma chamada para a 
função calcularPrecoComDesconto
*/

function calcularPrecoComDesconto (valorProduto, quantidadeProduto, callback) {
  const descontoCompra = valorProduto * quantidadeProduto * 0.10
  callback(valorProduto * quantidadeProduto - descontoCompra)
}

calcularPrecoComDesconto(100, 1, (res) => {
  console.log(res)
})
