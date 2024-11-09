
const switchh = document.querySelector('.switch-button');
const button = switchh.querySelector('img');  // Seleciona a imagem
const body = document.querySelector('body');
const Name = document.querySelector('.profile-name')
const container = document.querySelector('.container')
const as = document.querySelectorAll('li')
const iconElements = document.querySelectorAll('.social-medias ul li img'); // Seleciona todos os ícones
const buttonVoltar = document.querySelector('.voltar')

const switchhh = document.querySelector('.switch')
const sectionLinks = document.querySelector('.section-links')


const audio = document.querySelector('.selected')

const listas = document.querySelectorAll('span')
// Caminho correto para a imagem de fundo
const imgWhite = "url('/src/assets/svg/backgroundLight.svg')";  // Caminho da imagem de fundo
const imgBlack = "url('/src/assets/svg/Background.svg')";  // Caminho da imagem de fundo

const audio2 = document.createElement('audio')


audio2.src = "/src/assets/audio/click-button-140881.mp3"
document.body.appendChild(audio2)


// Variável 'start' movida para fora para manter seu estado
let start = false;

const IconsBlack = [
    "/src/assets/svg/githubBlack.svg",
    "/src/assets/svg/youtubeBlack.svg",
    "/src/assets/svg/instagramBlack.svg",
    "/src/assets/svg/linkedinBlack.svg",
]
const icnonsWhite = [
    "/src/assets/svg/github.svg",
    "/src/assets/svg/youtube.svg",
    "/src/assets/svg/instagram.svg",
    "/src/assets/svg/linkdin.svg",


]
// Aplica o evento de clique apenas na imagem e impede a propagação imediata
button.addEventListener('click', (e) => {
 
    e.stopImmediatePropagation(); // Impede a propagação do evento para outros ouvintes

    if (!start) {
        button.style.transform = "translateX(40px)";  // Move a imagem para a direita
        AlterarThemaWhite();  // Alterando o tema ao clicar
        audio2.play()
    } else {
        button.style.transform = "translateX(0)";  // Retorna a imagem à posição inicial
        AlterarThemaBlack()
        audio2.play()

    }

    // Alterna o estado de 'start'
    start = !start;
});

console.log('ok');

// Função para alterar o tema de fundo
function AlterarThemaWhite() {
    setTimeout(() => {
        const containerMensagems = document.querySelector('.section-mensagens')
       containerMensagems.style.backgroundColor = "orange"
        body.style.backgroundImage = imgWhite;
        Name.style.color = "black"
         
        listas.forEach(items =>{
           items.style.color = "black"
        })

         
        // Para cada ícone, alteramos o src
        iconElements.forEach((icon, index) => {
            icon.src = IconsBlack[index]; // Atribuímos o novo ícone baseado no array
        });
    

    }, 100);  // Atraso de 100ms para garantir que a animação do botão ocorra primeiro
}

function AlterarThemaBlack() {

    setTimeout(() => {
        const containerMensagems = document.querySelector('.section-mensagens')
       containerMensagems.style.backgroundColor = "white"

        body.style.backgroundImage = imgBlack;
        Name.style.color = "White" 
        listas.forEach(items =>{
            items.style.color = "White"
         })


         iconElements.forEach((icon, index)=>[
            icon.src = icnonsWhite[index]
         ])
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
listas.forEach(list =>{
    list.addEventListener('click', ()=>{
        audio2.play()
    })
})
listas.forEach((item )=>{
   if(item.hasAttribute('data-section')){

    item.addEventListener('click', ()=>{
        const containerMensagems = document.querySelector('.container-mensagems')
        sectionLinks.classList.add('disabled')
        containerMensagems.classList.remove('disabled')

    })

   }
})
buttonVoltar.addEventListener('click',()=>{
    const containerMensagems = document.querySelector('.container-mensagems')
    sectionLinks.classList.remove('disabled')
    containerMensagems.classList.add('disabled')
    audio2.play()
})
