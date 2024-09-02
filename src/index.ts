import loadQuote from "./components/loadQuote.js";
import hidePopover from "./components/popover.js";
import copyQuote from "./components/copyQuote.js";

const bodyPage: HTMLBodyElement = document.querySelector('[data-body]');
const btnRegroup: HTMLButtonElement = document.querySelector('[data-btn-regroup]');
const btnCopy: HTMLButtonElement = document.querySelector('[data-btn-copy]');
const popover: HTMLElement = document.getElementById('info');

bodyPage.onload = () => loadQuote(); //carregando a citação ao carrgar a pagina
btnRegroup.onclick = ()=> loadQuote(); //altera a citação ao clique do botão
btnCopy.onclick = ()=> copyQuote();
popover.addEventListener("beforetoggle", hidePopover); //oculta o popover (mensagem de copiado) depois de um tempo

