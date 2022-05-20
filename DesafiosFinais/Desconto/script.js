function teste() {
    let product = window.prompt('Qual é o produto que você está comprndo?')
    let productPrice = Number(window.prompt(`Qual é o preço de ${product}?`))
    let descont = productPrice * 0.1
    let res = document.querySelector('section#result')
    res.innerHTML = `<h1>Calculando desconto de 10% para ${product}</h1>`
    res.innerHTML += `<p>O preço original era R$ ${productPrice.toFixed(2)}.</p>`
    res.innerHTML += `<p>Você acaba de ganhar R$ ${descont.toFixed(2)} de desconto (-10%).</p>`
    res.innerHTML += `<p>No fim, você vai pagar R$ ${(productPrice - descont).toFixed(2)} no produto ${product}.</p>`  
}