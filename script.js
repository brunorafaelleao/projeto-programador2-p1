/*
Vou comentar aqui o que eu fiz no arquivo script.js

página do professor do curso https://rodrigoserrasqueiro.github.io/Star-Wars-Characters/index.html

alert("Bem-vindo ao meu site!");*/

//variavel criada com a url da api
//let currentPageUrl = "https://swapi.dev/api/people/"; // Página do Star wars -- página com problema
let currentPageUrl = "https://rickandmortyapi.com/api/character"; // Página do Rick and Morty da refatoração

//toda vez que a página carregar
//vamos usar async/await para carregar os cards
window.onload = async () => {
  try {
    await loadCharacters(currentPageUrl);
  } catch (error) {
    console.log(error);
    alert("Erro ao carregar cards");
  }

  const nextButton = document.getElementById("next-button");
  const backButton = document.getElementById("back-button");

  nextButton.addEventListener("click", loadNextPage);
  backButton.addEventListener("click", loadPreviousPage);
};

//função que carrega os cards da api
async function loadCharacters(url) {
  const mainContent = document.getElementById("main-content");
  mainContent.innerHTML = ""; //limpar os resultados anteriores

  try {
    const response = await fetch(url);
    const responseJson = await response.json();

    response.results.forEach((character) => {
      const card = document.createElement("div");
      card.style.backgroundImage = `url(${character.image})`;
      // card.style.backgroundImage = `url('https://starwars-visualguide.com/assets/img/characters/${character.url.replace(/\D/g, "")}.jpg')`;
      card.className = "cards";

      const characterNameBG = document.createElement("div");
      characterNameBG.className = "character-name-bg";

      const characterName = document.createElement("span");
      characterName.className = "character-name";
      characterName.innerText = `${character.name}`;

      characterNameBG.appendChild(characterName);
      card.appendChild(characterNameBG);

      card.onclick = () => {
        const modal = document.getElementById("modal");
        modal.style.visibility = "visible"; //mostrar o modal

        const modalContent = document.getElementById("modal-content");
        modalContent.innerHTML = ""; //limpar o conteúdo anterior

        const characterImage = document.createElement("div");
        characterImage.style.backgroundImage = `url('https://starwars-visualguide.com/assets/img/characters/${character.url.replace(/\D/g, "")}.jpg')`;
        characterImage.className = "character-image";

        const name = document.createElement("span");
        name.className = "character-details";
        name.innerText = `Nome: ${character.name}`;

        const characterHeight = document.createElement("span");
        characterHeight.className = "character-details";
        characterHeight.innerText = `Altura: ${character.heigth}`;

        const mass = document.createElement("span");
        mass.className = "character-details";
        mass.innerText = `Peso: ${character.mass}`;
        3;

        const eyeColor = document.createElement("span");
        eyeColor.className = "character-details";
        eyeColor.innerText = `Cor dos olhos: ${character.eye_color}`;

        const birthYear = document.createElement("span");
        birthYear.className = "character-details";
        birthYear.innerText = `Nascimento: ${character.birth_year}`;

        modalContent.appendChild(characterImage);
        modalContent.appendChild(name);
        modalContent.appendChild(characterHeight);
        modalContent.appendChild(mass);
        modalContent.appendChild(eyeColor);
        modalContent.appendChild(birthYear);
      };

      mainContent.appendChild(card);
    });

    const nextButton = document.getElementById("next-button");
    const backButton = document.getElementById("back-button");

    nextButton.disabled = !responseJson.next; //desabilitar o botão se não houver próxima página
    backButton.disabled = !responseJson.previous; //desabilitar o botão se não houver página anterior

    backButton.style.visibility = responseJson.previous ? "visible" : "hidden"; //esconder o botão se não houver página anterior

    currentPageUrl = url;
  } catch (error) {
    alert("Erro ao carregar os personagens");
    console.log(error);
  }
}

async function loadNextPage() {
  if (!currentPageUrl) return;

  try {
    const response = await fetch(currentPageUrl);
    const responseJson = await response.json();

    await loadCharacters(responseJson.next); //carregar a próxima página
  } catch (error) {
    console.log(error);
    alert("Erro ao carregar a próxima página");
  }
}

async function loadPreviousPage() {
  if (!currentPageUrl) return;

  try {
    const response = await fetch(currentPageUrl);
    const responseJson = await response.json();

    await loadCharacters(responseJson.next); //carregar a próxima página
  } catch (error) {
    console.log(error);
    alert("Erro ao carregar a página anterior");
  }
}

function hideModal() {
  const modal = document.getElementById("modal");
  modal.style.visibility = "hidden"; //esconder o modal
}
