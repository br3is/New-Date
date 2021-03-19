function carregar(){
    let agora = new Date()
    let hora = agora.getHours()
    let caixaCentralContent = window.document.querySelector('p#caixaCentralContent')
    let img = window.document.querySelector('img#imagem')
    let caixaCentral = window.document.querySelector('div#caixaCentral')
    if(hora >= 0 && hora < 12){
        caixaCentralContent.innerHTML = `Agora são ${hora}h. Outro dia, outra chance de recomeçar.`
        img.src = "./assets/amanhecer.png"
        document.body.style.background = 'rgb(236, 217, 181)'
    }else if(hora >= 12 && hora < 18){
        caixaCentralContent.innerHTML = `Agora são ${hora}h. Continue tentando!`
        img.src = "./assets/entardecer.png"
        document.body.style.background = 'rgb(204, 130, 95)'
    } else if(hora >= 18 && hora < 24){
        caixaCentralContent.innerHTML = `Agora são ${hora}h. Hora do descanço, amanhã haverão novas batalhas!`
        img.src = "./assets/anoitecer.png"
        document.body.style.background = 'rgb(93, 107, 184)'
    }
}