/*
Proposta:
Criar uma variável salario
Criar uma variável aumento (porcentagem)
Criar uma variável novo salario e calcular o salário com aumento
Mostrar no console o texto:
Salário antigo: VALOR e Novo salário: VALOR*/

const salarioAntigo = 2000// Criando Salário incicial 
const aumento = 0.5 // Criando Aumento de 50% no salário

const salarioNovo = salarioAntigo*(1+aumento) // Calculando o novo salário com o aumento

console.log(`Salário Antigo: ${salarioAntigo} \nSalário Novo: ${salarioNovo}`) //Exibindo o resultado