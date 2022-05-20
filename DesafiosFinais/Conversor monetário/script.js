function teste() {
    let moneyReal = Number(window.prompt('Quantos R$ você tem na carteira?'))
    let moneyDollars = moneyReal / cotDollars
    let res = document.querySelector('section#result')
    res.innerHTML = `<p>Convertendo a quantia de R$ ${moneyReal.toFixed(2)}, você tem $ ${moneyDollars.toFixed(2)} dólares</p>`
}