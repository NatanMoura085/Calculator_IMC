let altura = document.getElementById('altura').value
let peso =document.getElementById('peso').value
let img = document.getElementById('img').value
let imc = peso / (altura * altura).toFixed(2);
function calcularImc(){


if(imc >= 0 && imc < 18.5){


}else if(imc >= 18.5 && imc < 24.9){
    img.src = 'img/gigahad.png'

}else if(imc >= 25 && imc < 30){
    img.src = 'img/acima_peso.png'

}else if(imc >= 30.1 && imc < 35){
    img.src = 'img/faustao.jpg'

}else if(imc >= 35.1 && imc < 99){
    img.src = 'img/obeso.jpg'

}
}
let button = document.getElementById('button')
button.addEventListener('click',calcularImc)

calcularImc()

console.log(peso.value)