const result = document.querySelector('.resultado');
const numbers = document.querySelectorAll('li');
const soma = document.querySelector('.soma');
const operadores = document.querySelectorAll('.operadores'); // Para selecionar os operadores

let numberArray = [];  // Array para armazenar os números
let operadorAtual = '+';  // Operador inicial é a soma
let calculoEmAndamento = false;  // Para indicar se o cálculo já foi feito

// Função para realizar as operações com base no operador
function calcular() {
    let resultado = numberArray[0];  // Começa com o primeiro número
    for (let i = 1; i < numberArray.length; i++) {
        if (operadorAtual === '+') {
            resultado += numberArray[i];
        } else if (operadorAtual === '-') {
            resultado -= numberArray[i];
        } else if (operadorAtual === 'x') {
            resultado *= numberArray[i];
        } else if (operadorAtual === '/') {
            if (numberArray[i] === 0) {
                return 'Erro: Divisão por zero'; // Prevenir divisão por zero
            }
            resultado /= numberArray[i];
        }
    }
    return resultado;  // Retorna o resultado final
}

// Eventos para os números
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        const num = parseFloat(number.innerText);

        // Verifica se o valor clicado é um número válido
        if (!isNaN(num)) {
            if (calculoEmAndamento) {
                numberArray = [num];  // Se o cálculo foi feito, começa um novo cálculo
                calculoEmAndamento = false;
            } else {
                numberArray.push(num);  // Adiciona o número ao array
            }

            // Exibe os números com o operador
            soma.innerHTML = numberArray.join(` ${operadorAtual} `);
        }
    });
});

// Adicionando eventos para os operadores
operadores.forEach((operador) => {
    operador.addEventListener('click', () => {
        operadorAtual = operador.innerText;  // Atualiza o operador atual
        console.log('Operador atual: ' + operadorAtual);
    });
});

// Evento de igual para calcular o resultado final
document.querySelector('.igual').addEventListener('click', () => {
    if (numberArray.length > 0) {
        const resultado = calcular();  // Realiza o cálculo
        result.innerHTML = resultado;  // Exibe o resultado final
        numberArray = [resultado];  // Armazena o resultado para novas operações
        operadorAtual = '+';  // Reseta o operador para soma após calcular
        calculoEmAndamento = true;  // Indica que o cálculo foi feito, então começa um novo cálculo
        soma.innerHTML = '';  // Limpa a exibição do operador
    } else {
        result.innerHTML = 'Erro: Nenhum número inserido';
    }
});
