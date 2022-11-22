// Parte 1

const op1 = `Operação A`
const op2 = `Operação B`
const op3 = `Operação C`
const op4 = `Operação D`

const res1 = 5 > 20 && 5 < 2
const res2 = 5 === 5 || 5 === "5"
const res3 = !(20 > 50)
const res4 = !(20 > 50 || 50 > 60)

console.log(`Segue o resultado das operações:\n
${op1} = ${res1}
${op2} = ${res2}
${op3} = ${res3}
${op4} = ${res4}\n
`)


// Parte 2

const filhos = 2
const salario = 2000
const comissao = 0.1

const auxCreche = 4.5 * filhos
const inss = 0.05

const jan = 5784.50
const fev = 3418.41
const mar = 4124.10
const abr = 1874
const maio = 7000
const jun = 9450

//// 1)
const r1 = salario + auxCreche
console.log(`Resultado 1: ${r1}`)

////2)
const r2 = jan * comissao
console.log(`Resultado 2: ${r2}`)

////3)
const r3 = (inss * (salario + (jan * comissao))).toFixed(2)
//const r3 = (inss * (salario + r2)).toFixed(2)
console.log(`Resultado 3: ${r3}`)

////4)
//INSS
const if1 = ((jan * comissao) + salario) * inss
const if2 = ((fev * comissao) + salario) * inss
const if3 = ((mar * comissao) + salario) * inss
const if4 = ((abr * comissao) + salario) * inss
const if5 =((maio * comissao) + salario) * inss
const if6 = ((jun * comissao) + salario) * inss

//Meses
const janFinal = ((((jan * comissao) + salario) - if1) + auxCreche).toFixed(2)
const fevFinal = ((((fev * comissao) + salario) - if2) + auxCreche).toFixed(2)
const marFinal = ((((mar * comissao) + salario) - if3) + auxCreche).toFixed(2)
const abrFinal = ((((abr * comissao) + salario) - if4) + auxCreche).toFixed(2)
const maioFinal = ((((maio * comissao) + salario) - if5) + auxCreche).toFixed(2)
const junFinal = ((((jun * comissao) + salario) - if6) + auxCreche).toFixed(2)

//Mensagem
console.log(`Resultado 4: Salário Final Total\n
Janeiro: ${janFinal}
Fevereiro: ${fevFinal}
Março: ${marFinal}
Abril: ${abrFinal}
Maio: ${maioFinal}
Junho: ${junFinal}
`)

////5)
//Salários
const sf1 = (((jan * comissao) + salario) + auxCreche)
const sf2 = (((fev * comissao) + salario) + auxCreche)
const sf3 = (((mar * comissao) + salario) + auxCreche)
const sf4 = (((abr * comissao) + salario) + auxCreche)
const sf5 = (((maio * comissao) + salario) + auxCreche)
const sf6 = (((jun * comissao) + salario) + auxCreche)

const mediaTotal = ((sf1+sf2+sf3+sf4+sf5+sf6)/6).toFixed(2)

//Mensagem
console.log(`Média Salarial de 6 meses: ${mediaTotal}`)