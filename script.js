function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var minuto = new Date()
    var minutos = minuto.getMinutes()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}h${minutos}`

    if (hora >= 6 && hora <12) {           //Bom Dia!
        img.src = 'fotomanha.png'
        document.body.style.background = 'rgb(234, 245, 140)'
        saldação.innerHTML = 'Bom dia'
    } else if (hora >= 12 && hora <18) {   //Boa Tarde!
        img.src = 'fototarde.png'
        document.body.style.background = 'rgb(255, 174, 52)'
        saldação.innerHTML = 'Boa tarde'
    } else if (hora >=18 && hora <24) {     //Boa Noite!
        img.src = 'fotonoite.png'
        document.body.style.background = 'rgb(9, 9, 32)'
        saldação.innerHTML = 'Boa noite'
    } else {                               //Boa Madrugada!
        img.src = 'fotonoite.png'
        document.body.style.background = 'rgba(14, 14, 20, 0.897)'
        saldação.innerHTML = 'Boa madrugada'
    }
} 
