const containerMensagems = document.querySelector(".show-mensagem");
const SendButton = document.querySelector('.sendButton');
const meensagemuser1 = document.querySelector('.mensagemUser1');
const meensagemuser2 = document.querySelector('.mensagemUser2');
const mensagemInfo = document.querySelector('b')

const anexaImage = document.querySelector('.anexaImage')
const imageInput = document.querySelector(".imageInput")

const inputText = document.querySelector('input');
const animationDigitaçao = document.querySelectorAll('.dot')

const newAudio = new Audio('/src/assets/audio/digitaçao.mp3')
const deleteAudio = new Audio('/src/assets/audio/delete.mp3')
let mensagensUser1 = []; // Array para armazenar as mensagens do usuário 1
let mensagensUser2 = []; // Array para armazenar as mensagens do usuário 2

let mensagemUser1 = false; // Alterna entre os usuários


let imageMessage = ''

const time = new Date()

const horas = time.getHours().toString().padStart(2, '0')
const minutos = time.getMinutes().toString().padStart(2, '0')


SendButton.addEventListener('click', () => {
    if (inputText.value.trim() === '') return;

    const textInput = inputText.value;
    const newMensagem = document.createElement('div');
    const img = document.createElement('img');
    const horario = document.createElement('li')
    img.src = "/src/assets/svg/profile.svg";
    const newMensagems = document.createElement('p');
    newMensagems.innerHTML = textInput;

    const deleteButton = document.createElement('img');
    deleteButton.src = "/src/assets/img/image.png"

    // Adiciona evento para excluir a mensagem
    deleteButton.addEventListener('click', () => {
        apagarMensagem(newMensagem, mensagemUser1);
    });

    if (!mensagemUser1) {
        newMensagem.classList.add("mensagem");
        newMensagem.appendChild(img);
        newMensagem.appendChild(newMensagems);
        newMensagem.appendChild(deleteButton);
        newMensagem.appendChild(horario)
        meensagemuser1.appendChild(newMensagem);
    deleteButton.classList.add('deleteButton');
    horario.classList.add('horario')
    horario.innerHTML = `${horas}:${minutos}`
    
     animationDigitaçao.forEach(anim =>{
        anim.classList.add('activedot')
     })
        
        // Adiciona a mensagem ao array de mensagens do usuário 1
        mensagensUser1.push({ id: Date.now(), texto: textInput });
    } else {
        newMensagem.classList.add("mensagem2");
        newMensagem.appendChild(newMensagems);
        newMensagem.appendChild(img);
        newMensagem.appendChild(deleteButton);
        newMensagem.appendChild(horario)
        meensagemuser2.appendChild(newMensagem);
        horario.classList.add('horario2')
        horario.innerHTML = `${horas}:${minutos}`
         deleteButton.classList.add('deleteButton2');
        animationDigitaçao.forEach(anim =>{
        anim.classList.remove('activedot')
     })
        
        // Adiciona a mensagem ao array de mensagens do usuário 2
        mensagensUser2.push({ id: Date.now(), texto: textInput });
    }
    EnvioAtualizaçao()
    mensagemUser1 = !mensagemUser1;
    inputText.value = '';
});

// Função para apagar mensagem específica
function apagarMensagem(element, isUser1) {
    if (isUser1) {
        mensagensUser1 = mensagensUser1.filter(msg => msg.texto !== element.querySelector('p').innerHTML);
        deleteAudio.currentTime = 0
        deleteAudio.play()
    } else {
        mensagensUser2 = mensagensUser2.filter(msg => msg.texto !== element.querySelector('p').innerHTML);
        deleteAudio.play()
        deleteAudio.currentTime = 0


    }
    element.remove();
}
inputText.addEventListener('input', ()=>{
    if(inputText.value.trim() !== ''){
        newAudio.play()
        newAudio.currentTime = 0

    }

    animationDigitaçao.forEach(animation =>{
        animation.classList.remove('disabled')
    })
})
inputText.addEventListener('blur', () => {
    newAudio.pause();
    newAudio.currentTime = 0;    
    animationDigitaçao.forEach(animation =>{
        animation.classList.add('disabled')
    })      // Reinicia o áudio para a próxima digitação
});

function EnvioAtualizaçao(){
    mensagemInfo.innerText = "Mensagem enviada com sucesso"

     setTimeout(() => {
        mensagemInfo.innerText = ""
     }, 600);
}
anexaImage.addEventListener('click', ()=>{
    imageInput.click()
})
imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];
    
    if (file) {
        const reader = new FileReader();

        reader.onload = function(event) {
            // Armazena a imagem em Base64 na variável `imageMessage`
            imageMessage = event.target.result;
            
            // Exibe a imagem na pré-visualização
            previewImage.src = imageMessage;
            previewImage.style.display = 'block';
        };

        // Converte a imagem para Base64
        reader.readAsDataURL(file);
    } 
    const newMensagem = document.createElement('div')
    newMensagem.classList.add('mensagem')
    const newImage = document.createElement('img')
    newImage.src = imageMessage

    newMensagem.appendChild(newImage)


});