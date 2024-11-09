// Seleção dos elementos DOM
const campeaos = document.querySelectorAll('.champions');
const container = document.querySelector('.champs');

// Array de campeões
const Champions = [
  { nome: "Darius", img: "/src/img/Darius.jpg" },
  { nome: "Fiora", img: "/src/img/Fiora_0.jpg" },
  { nome: "Fiora", img: "/src/img/Fiora_0.jpg" },
  { nome: "Morgana", img: "/src/img/Fiora_0.jpg" },
  { nome: "Morgana", img: "/src/img/Fiora_0.jpg" },
  { nome: "Morgana", img: "/src/img/Fiora_0.jpg" }
];

// Preencher o container com campeões
Champions.forEach((champion, index) => {
  // Primeiro, tentamos encontrar o elemento no DOM que corresponde ao campeão
  let championsElement = campeaos[index]; // Procuramos pelo índice no array de campeões já presentes

  // Se o elemento não existir (não foi encontrado no DOM), criamos um novo
  if (!championsElement) {
    championsElement = document.createElement('div');
    championsElement.classList.add('champions');
    
    // Criação da imagem e adição ao elemento
    const img = document.createElement('img');
    img.src = champion.img;
    championsElement.appendChild(img);

    // Adiciona o novo 'champions' ao container
    container.appendChild(championsElement);
  } else {
    // Se o elemento já existe, apenas atualizamos a imagem do campeão
    const img = championsElement.querySelector('img');
    if (img) {
      img.src = champion.img;
    }
  }

  // Atualiza o nome do campeão (se houver um elemento para o nome)
  let nameElement = championsElement.querySelector('.nameChampion');
  if (!nameElement) {
    nameElement = document.createElement('div');
    nameElement.classList.add('nameChampion');
    championsElement.appendChild(nameElement);
  }
  nameElement.textContent = champion.nome; // Atualiza o nome do campeão
});

// Seleção da imagem e nome do campeão para exibição
const championImage = document.querySelector('img'); // Imagem do campeão
const championName = document.querySelector('.nameChampion'); // Nome do campeão

// Seleção do botão
const button = document.querySelector('.button');

// Função para exibir detalhes do campeão
function displayChampions(nome) {
  const campeao = Champions.find(champ => champ.nome === nome); // Corrige a busca pelo nome correto

  if (campeao) {
    championImage.src = campeao.img;
    championName.textContent = campeao.nome; // Atualiza o nome do campeão
  }
}

// Adiciona o listener ao botão
button.addEventListener('click', () => {
  const nome = button.getAttribute('data-nome'); // Pega o nome do campeão a partir do atributo 'data-nome'
  displayChampions(nome); // Exibe os detalhes do campeão
});
