/* 13) Crear un programa que permita ingresar todos los datos de tu documento nacional de 
identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y 
pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado dni 
con todos los datos ingresados y mostrarlos por consola con console.table() más un 
mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos, 
mostrar un mensaje que diga: vuelva a intentarlo en 1 mes. */

let nombre = "Benjamin";
let apellido = "Matteo";
let nacionalidad = "Chilena";
let sexo = "Masculino";
let fecha_nacimiento = " 08-OCT-1996";
let numero_documento = "521.560.263"
let fecha_emision = "13 FEB 2020";
let fecha_vencimiento = "08 OCT 2026";
let rut = "19.355.988-3";

console.log(`${nombre}\n${apellido}\n${nacionalidad}\n${sexo}\n${fecha_nacimiento}\n${numero_documento}\n${fecha_emision}\n${fecha_vencimiento}\n${rut}`)

pregunta_datos = prompt("Los datos ingresados son correcto?")
const dni = {};
if (pregunta_datos === "si"){
  dni.nombre = nombre;
  dni.apellido= apellido; 
  dni.nacionalidad = nacionalidad;
  dni.sexo = sexo; 
  dni.fecha_nacimiento = fecha_nacimiento;
  dni.numero_documento = numero_documento;
  dni.fecha_emision = fecha_emision;
  dni.fecha_vencimiento = fecha_vencimiento;
  dni.rut = rut;
  console.table(dni)
  console.log("Registro exitoso!")
  } else {
    console.log ("Vuelva intentarlo en 1 mes")
  }
  

