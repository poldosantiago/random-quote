import loadQuote from "./assets/js/loadQuote.js";
import hidePopover from "./assets/js/popover.js";
import copyQuote from "./assets/js/copyQuote.js";

const bodyPage = document.querySelector('[data-body]');
const btnRegroup = document.querySelector('[data-btn-regroup]');
const btnCopy = document.querySelector('[data-btn-copy]');
const popover = document.getElementById('info');


bodyPage.onload = loadQuote(); //carregando a citação ao carrgar a pagina
btnRegroup.onclick = ()=> loadQuote(); //altera a citação ao clique do botão
btnCopy.onclick = ()=> copyQuote();
popover.addEventListener("beforetoggle", hidePopover); //oculta o popover (mensagem de copiado) depois de um tempo

console.log(process.env );
console.log(process.env.TESTE);


