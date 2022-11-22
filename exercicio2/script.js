let num1 = `Insira um primeiro número`
let num2 = `Insira um segundo número`

let numEscolhido1 = Number(prompt(num1))
let numEscolhido2 = Number(prompt(num2))

let pergunta1 = `O primeiro número é maior que o segundo?`
let pergunta2 = `O primeiro número é igual ao segundo?`
let pergunta3 = `O primeiro número é divisível pelo segundo?`
let pergunta4 = `O segundo número é divisível pelo primeiro?`

let resposta1 = numEscolhido1 > numEscolhido2
let resposta2 = numEscolhido1 === numEscolhido2
let resposta3 = 0 === (numEscolhido1 % numEscolhido2)
let resposta4 = 0 === (numEscolhido2 % numEscolhido1)

console.log(`Você escolheu os números ${numEscolhido1} e ${numEscolhido2}\n
Agora vamos confirmar algumas coisas:\n
${pergunta1} ${resposta1}\n
${pergunta2} ${resposta2}\n
${pergunta3} ${resposta3}\n
${pergunta4} ${resposta4}\n
`)