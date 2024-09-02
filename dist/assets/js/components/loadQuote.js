import getQuote from "./services.js";
/**
 * @description recebe a citação da API externa e insere o coneúdo dela no HTML
 */
async function loadQuote() {
    const [response] = await getQuote();
    const { quote, author, category } = response;
    const textPar = document.querySelector('[data-quote-text]');
    const authorH3 = document.querySelector('[data-quote-author]');
    const tagSpan = document.querySelector('[data-quote-tag]');
    textPar.innerHTML = quote;
    authorH3.innerHTML = author;
    tagSpan.innerHTML = category;
}
export default loadQuote;
