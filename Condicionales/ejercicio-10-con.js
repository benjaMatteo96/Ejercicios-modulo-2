/* 10) Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2 
jugadores y muestre en pantalla cuál de los 2 ha ganado o si han empatado. En caso 
de algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho 
trampa. */

let player_1 = prompt("Turno del player 1: piedra, papel o tijera?")
let player_2 = prompt("Turno del player 2: piedra, papel o tijera?")

if (player_1 === "piedra" && player_2 === "tijera"){
  console.log("player 1 gana!")
} else if (player_1 ==="papel" && player_2 === "piedra") {
  console.log("player1 gana")
} else if (player_1 === "tijera" && player_2 ==="papel") {
  console.log("player 1 gana!")
} else if (player_2 === "piedra" && player_2 ==="tijera") {
  console.log("player 2 gana!") 
}else if (player_2 === "papel" && player_1 ==="piedra") {
  console.log("player 2 gana!")
}else if (player_2 === "tijera" && player_1 ==="papel") {
  console.log("player 2 gana!")
}else if (player_1 === "piedra" && player_2 ==="piedra") {
  console.log("Empate!")
}else if (player_1 === "papel" && player_2 ==="papel") {
  console.log("Empate!")
}else if (player_1 === "tijera" && player_2 ==="tijera") {
  console.log("Empate!")
}