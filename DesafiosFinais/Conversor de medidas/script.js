
function teste() {
    let meters = Number(window.prompt('Digite uma distância em metros (m)'))
    let km, hm, dam, dm, cm, mm
    km = meters / 1000
    hm = meters / 100
    dam = meters / 10
    dm = meters * 10
    cm = meters * 100
    mm = meters * 1000

    let res = document.querySelector('section#result')
    res.innerHTML = `<h1>A distância de ${meters} metros, corresponde a...</h1>`
    res.innerHTML += `<p>${km} quilômetros (Km)</p>`
    res.innerHTML += `<p>${hm} hectômetros (Hm)</p>`
    res.innerHTML += `<p>${dam} decâmetros (Dam)</p>`
    res.innerHTML += `<p>${dm} decímetros (dm)</p>`
    res.innerHTML += `<p>${cm} centímetros (cm)</p>`
    res.innerHTML += `<p>${mm} milímetros (mm)</p>`
}