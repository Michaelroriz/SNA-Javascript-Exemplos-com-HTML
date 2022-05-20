
function contar() {
    let saida = document.getElementById('saida')

    saida.innerHTML += `<h2>Contando de 1 até 10</h2>`

    let cont = 1
    while (cont <= 10) {
        
        if (cont == 10) {
            saida.innerHTML += ` ${cont} &#x1F3C1;`
        
        }else{
            saida.innerHTML += ` ${cont} &#x1F449;`
        }
        cont ++ 
    }
    
}