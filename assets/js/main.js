// Datos
let puntosJugador = 0;
let puntosPC = 0;

// Marcador
let msjGanador = document.querySelector("#msjGanador");
let contenedorPuntosJugador = document.querySelector("#puntosJugador");
let contenedorPuntosPC = document.querySelector("#puntosPC");

// Mensaje de cada jugada
let mensaje = document.querySelector("#mensaje");
let contenedorEleccionJugador = document.querySelector("#eleccionJugador");
let contenedorEleccionPC = document.querySelector("#eleccionPC");
let contenedorPuntos = document.querySelector("#puntos");

// Selección de la opción a jugar
let seleccionOpcion = document.querySelector("#seleccionOpcion");
let seleccionArmas = document.querySelectorAll(".arma");


//Solicitar cantidad de partidas
var miBtn = document.getElementById("boton");
miBtn.addEventListener('click',function(){
    var veces = document.querySelector(".input-a-buscar");
    document.querySelector(".resultado").innerHTML = "¡Jugarás " + veces.value + " partidas!";
    document.querySelector(".totales").innerHTML = veces.value;
});

// Iniciar Turno
seleccionArmas.forEach(boton =>{
    boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e){
    let eleccionPC = Math.floor(Math.random()*3);    // Para probar Math console.log(eleccionPC);
    let eleccionJugador = e.currentTarget.id;     // Nos devuelve el id donde hicimos click

    // piedra => 0
    // papel => 1
    // tijera => 2
    if(eleccionPC === 0){       
        eleccionPC = "piedra🪨";
    } else if (eleccionPC === 1){
        eleccionPC = "papel📋";
    } else if (eleccionPC === 2){
        eleccionPC = "tijera✂️";
    }
    
    // piedra>tijera
    // papel>piedra
    // tijera>papel
    // iguales=empate
    if (
        (eleccionJugador === "piedra🪨" && eleccionPC === "tijera✂️") ||
        (eleccionJugador === "papel📋"  && eleccionPC === "piedra🪨") ||
        (eleccionJugador === "tijera✂️" && eleccionPC === "papel📋")
    ){
        ganaJugador();
    } else if(
        (eleccionPC === "piedra🪨" && eleccionJugador === "tijera✂️") ||
        (eleccionPC === "papel📋" &&  eleccionJugador === "piedra🪨") ||
        (eleccionPC === "tijera✂️" && eleccionJugador === "papel📋")
    ){
        ganaPC();
    } else {
        puntos();
    }  

    mensaje.classList.remove("disabled");
    contenedorEleccionJugador.innerText = eleccionJugador;
    contenedorEleccionPC.innerText = eleccionPC;

    var numeroPartidas = document.getElementById("partidasTotales");
    var partidas = parseInt(numeroPartidas.innerHTML);
    console.log(partidas);
    
    if (puntosJugador + puntosPC == partidas){
        console.log(partidas);
        console.log(puntosJugador);
        console.log(puntosPC);

        if (puntosJugador > puntosPC) {
            msjGanador.innerText = "🔥 ¡Ganaste el juego! 🔥"
        }
        if (puntosJugador < puntosPC) {
            msjGanador.innerText = "😭 ¡La computadora ganó el juego! 😭"
        }
        if (puntosJugador == puntosPC) {
            msjGanador.innerText = "¡Esto es un empate!"
        }

        seleccionOpcion.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    }
}

function ganaJugador(){
    puntosJugador++;
    contenedorPuntosJugador.innerText = puntosJugador;
    contenedorPuntos.innerText = "¡Has ganado un punto!";
}

function ganaPC(){
    puntosPC++;
    contenedorPuntosPC.innerText = puntosPC;
    contenedorPuntos.innerText = "¡La PC ha ganado un punto!";
}

function puntos(){
    contenedorPuntos.innerText = "¡Empate!";
}

function reiniciarJuego() {
    window.location.href = window.location.href;
}