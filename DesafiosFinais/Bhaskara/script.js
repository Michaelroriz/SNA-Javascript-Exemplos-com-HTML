
function teste() {
    let a = Number(window.prompt('Qual é o valor de a? '))
    let b = Number(window.prompt('Qual é o valor de b? '))
    let c = Number(window.prompt('Qual é o valor de c? '))
    let delta = (b * b) - 4 * a * c;

    let res = document.querySelector('section#result')
    res.innerHTML = `<h1>Resolvendo Bhaskara</h1>`
    res.innerHTML += `<p>A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong></p>`
    res.innerHTML += `<p>O cálculo realizado será <strong>Δ = ${b}² - 4 . ${a} . ${c}</strong></p>`
    res.innerHTML += `<p>O valor calculado foi <strong><mark>Δ = ${delta}</mark></strong></p>`

}