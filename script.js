//Exercicio 1

var input1 = document.getElementById('input1')
var input2 = document.getElementById('input2')
var input3 = document.getElementById('input3')
var input4 = document.getElementById('input4')
var input5 = document.getElementById('input5')
const menssagem = document.getElementById('menssagem')
const imagem = document.getElementById('imgGato')

function acerto(){
    menssagem.innerHTML=''
    var text = document.createTextNode("Parábens, você ajudou o gatinho a trocar o pneu")
    menssagem.appendChild(text)
    menssagem.style.color="green"
    imagem.setAttribute('src', './img/fase1/gatoFeliz.jpg')
}

function erro(){
   menssagem.innerHTML=''
    var text = document.createTextNode("Parece que não esta certa a sequencia de passos. Tente novamente!")
    menssagem.appendChild(text)
    menssagem.style.color="red"
    imagem.setAttribute('src', './img/fase1/gatoTriste.jpg')
}

function testar(){   
    if(input1.value == 5 && input2.value == 3 && input3.value == 4 && input4.value == 1 && input5.value == 2){
        acerto()
    }else{
        erro()
    }
}


