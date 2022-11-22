let dividendo = prompt(`Insira aqui um número par.`)
const divisor = Number(2)

let resto = Number(dividendo % divisor)

console.log (`Cálculo: ${dividendo} % ${divisor}`)
console.log (`Resto = ${resto}`)

/*
Para os números pares, o resultado era sempre 0
Para os números ímpares, o resultado era sempre 1
No entanto, com números decimais o resultado era, após o sinal, variável.
*/