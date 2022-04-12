function calcular() {
    var selectgrau = document.getElementById('grau').value
    var oper = document.getElementById('operação').value
    var res = document.getElementById('res')
    if (selectgrau == 0) {
        window.alert('selecione um grau')
    } if (oper == 0) {
        window.alert('selecione uma operação')
    
    } else if (selectgrau == 30) {
        var img =document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (oper == "Cossecante") {
        img.setAttribute('src', 'imgs/cossecande-30.webp')    
        } else if (oper == "Secante") {
        img.setAttribute('src', 'imgs/secante-30.webp')
        } else if (oper == "Cotangente")
        img.setAttribute('src', 'imgs/cotangente-30.webp')
    
    } else if (selectgrau == 45) {
        var img =document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (oper == "Cossecante") {
        img.setAttribute('src', 'imgs/cossecante-45.webp')
        } else if (oper == "Secante") {
        img.setAttribute('src', 'imgs/cossecante-45.webp')
        } else if (oper == "Cotangente") {
        img.setAttribute('src', 'imgs/cossecante-45.webp')
        }
        
    
    
    } else if (selectgrau == 60){
        var img =document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (oper == "Cossecante") {
        img.setAttribute('src', 'imgs/cossec-60.webp')
        } else if (oper == "Secante") {
        img.setAttribute('src','imgs/secante-60.webp')
        } else (oper == "Cotangente")
        res.innerHTML = ('cotg(60) = (1/2)/(√3/2) cotg(60) = √3/3.')
    }res.appendChild(img)
    
   
}
