
const switchh = document.querySelector('.switch-button');
const button = switchh.querySelector('img');  // Seleciona a imagem
const body = document.querySelector('body');
const Name = document.querySelector('.profile-name')
const container = document.querySelector('.container')

const audio = document.querySelector('.selected')

const listas = document.querySelectorAll('span')
// Caminho correto para a imagem de fundo
const imgWhite = "url('/src/assets/svg/backgroundLight.svg')";  // Caminho da imagem de fundo
const imgBlack = "url('/src/assets/svg/Background.svg')";  // Caminho da imagem de fundo

// Variável 'start' movida para fora para manter seu estado
let start = false;

// Aplica o evento de clique apenas na imagem e impede a propagação imediata
button.addEventListener('click', (e) => {
    e.stopImmediatePropagation(); // Impede a propagação do evento para outros ouvintes

    if (!start) {
        button.style.transform = "translateX(40px)";  // Move a imagem para a direita
        AlterarThemaWhite();  // Alterando o tema ao clicar
    } else {
        button.style.transform = "translateX(0)";  // Retorna a imagem à posição inicial
        AlterarThemaBlack()
    }

    // Alterna o estado de 'start'
    start = !start;
});

console.log('ok');

// Função para alterar o tema de fundo
function AlterarThemaWhite() {
    setTimeout(() => {
        body.style.backgroundImage = imgWhite;
        Name.style.color = "black"

    }, 100);  // Atraso de 100ms para garantir que a animação do botão ocorra primeiro
}

function AlterarThemaBlack() {
    setTimeout(() => {
        body.style.backgroundImage = imgBlack;
        Name.style.color = "White"
    }, 100);  // Atraso de 100ms para garantir que a animação do botão ocorra primeiro
}

let currentIndex = 0
function selectItem(index) {
    // Remover a classe de todos os itens
    listas.forEach(item => item.classList.remove('selected'));
    
    // Adicionar a classe 'selected' ao item atual
    if (listas[index]) {
        listas[index].classList.add('selected');
        // Reproduzir o áudio ao selecionar
        audio.currentTime = 0;
        audio.play();
    }
}
listas.forEach((items, index) => {
    items.addEventListener('mouseover', () => {
        selectItem(index); // Seleciona o item quando o mouse passar sobre ele
    });

    items.addEventListener('mouseout', () => {
        items.classList.remove('selected'); // Remove a classe ao sair do item
    });
});

function movedown(){
    if(currentIndex < listas.length - 1){
        currentIndex++
        selectItem(currentIndex)
        console.log(currentIndex)

    }
}

function moveUp(){
    if(currentIndex > 0){
        currentIndex--
        selectItem(currentIndex)
        console.log(currentIndex)
    }
}

document.addEventListener('keydown', (e)=>{
    if(e.key === "ArrowDown"){
        movedown()
    } else if(e.key ==="ArrowUp"){
        moveUp()
    }
})
