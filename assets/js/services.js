/**
 * @description faz a consulta na API e retona uma citação aleatória
 * @returns {Object[]} citação aleatória
 */
async function getQuote(){
    const response =  await fetch('https://api.api-ninjas.com/v1/quotes',  {
        method: 'GET',
        headers: {
        'X-Api-Key': 'pBx6+Tpa2UyKHmhOO4GgAA==ZaFzG5ruKozZlVKK',
        },
    });

    return await response.json();
}

export default getQuote;