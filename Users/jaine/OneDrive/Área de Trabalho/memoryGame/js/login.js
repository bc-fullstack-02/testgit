//Habilitar o botão após a digitação e realizar login

const input = document.querySelector(".login-input");
const button = document.querySelector(".login-button");
const form = document.querySelector(".login-form");

//função de validação de input
const validateInput = ({ target }) => {
  if (target.value.length > 3) {
    button.removeAttribute("disabled"); //habilita o play
    return;
  }

  button.setAttribute("disabled", ""); //desailita novamente o botão,caso o input seja apagado
};

//salvar input
const saveValue = (event) => {
  event.preventDefault(); //desailita recarregamento da página
  localStorage.setItem("player", input.value); //salva inforações no local storage
  window.location = "pages/game.html";
};

input.addEventListener("input", validateInput);
form.addEventListener("submit", saveValue);
