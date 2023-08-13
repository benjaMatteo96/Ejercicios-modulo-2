/* 1. */

const caja = document.querySelector(".caja")
const button = document.getElementById("button")
const button2 = document.getElementById("button2")
const inputText = document.getElementById("input-text")
const parrafoCaja2 = document.getElementById("parrafo-caja2")

let cambiarColor = true;
button.addEventListener("click", () => {
 if(cambiarColor) {
    caja.style.backgroundColor = "skyblue"
 }else{
  caja.style.backgroundColor = "red"
 }
 cambiarColor = !cambiarColor
})

/* 2 */

inputText.addEventListener("input", () => {
  const contenidoInput = inputText.value
  console.log(contenidoInput)
  parrafoCaja2.innerHTML += contenidoInput
})

button2.addEventListener("click", () => 
{
  parrafoCaja2.innerHTML = ""
})

/* 3 */

const btn_enviar = document.getElementById("btn-enviar-3")
const input_estatura = document.getElementById("input-estatura")
const input_peso = document.getElementById("input-peso")
const input_imc = document.getElementById("input-imc")
console.log(input_estatura)
console.log(input_peso)


btn_enviar.addEventListener("click", () => {
   const imc = parseInt(input_peso.value) / (parseInt(input_estatura.value * input_estatura.value))
   console.log(imc)
   input_imc.value = imc
})

/* 4 */
const valorUsd = document.getElementById("input-usd")
const valorPesoCl = document.getElementById("input-peso-cl")
const boton_divisa = document.getElementById("divisa-button")


boton_divisa.addEventListener("click", () => {
const dolarPorDefecto = valorUsd.value
const pesoChileno = valorPesoCl.value
console.log(dolarPorDefecto, pesoChileno)

})

