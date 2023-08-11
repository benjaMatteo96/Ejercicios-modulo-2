/* 1. */

const body = document.getElementById("body")
const caja = document.getElementById("caja")
const button = document.getElementById("button")
const inputText = document.getElementById("input-text")


function darColores(evento){
  caja.style.backgroundColor = "#19E5E8";
  console.log(evento)
}


button.addEventListener("click", darColores)

/* 2 */
function cambiarTexto (evento) {
  caja.textContent = evento.target.addEventListener
}

inputText.addEventListener(oninput, cambiarTexto)