
function teste() {
    let ano = Number(window.prompt('Digite um número: '))
    let tipo
    if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))) {
        tipo = '<strong><mark class="bi">É BISSEXTO</mark> </strong> &#9989;'
    } else {
        tipo = '<strong><mark class="naoBi">NÃO É BISSEXTO</mark> </strong> &#10060;'
    }

    let res = document.querySelector('section#result')
    res.innerHTML = `<p>O ano de ${ano} ${tipo}</p>`
}