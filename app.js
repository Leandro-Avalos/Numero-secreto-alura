let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
const rangoNumeros = 10;
const rondasMaxima = 3;

function asignarTextoElemento(elemento, texto){
    let elementosHTML = document.querySelector(elemento);
    elementosHTML.innerHTML = texto;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
 }
 
function generarNumeroSecreto(){
    numeroSecreto = Math.floor(Math.random()*rangoNumeros) + 1;
    if (listaNumerosSorteados.length == rondasMaxima){
        asignarTextoElemento('p', 'Se termino el juego');
    } else {
        if (listaNumerosSorteados.includes(numeroSecreto)){
        return generarNumeroSecreto();
        } else {
        listaNumerosSorteados.push(numeroSecreto);
        return numeroSecreto;
        }
    }
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroSecreto === numeroDeUsuario){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.querySelector('#reiniciar').removeAttribute('disabled'); 
    } else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número es menor');
        } else {
            asignarTextoElemento('p', 'El número es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", `Indica un numero del 1 al ${rangoNumeros}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();



