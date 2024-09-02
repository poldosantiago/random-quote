/**
 * @description copia a citação para a área de transferência
 */
function copyQuote() {
    const textPar = document.querySelector('[data-quote-text]');
    const quote = textPar.innerHTML;
    navigator.clipboard.writeText(quote);
}
export default copyQuote;
