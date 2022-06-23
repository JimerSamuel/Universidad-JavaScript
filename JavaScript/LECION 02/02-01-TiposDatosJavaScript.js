/*
Ejemplos de 
Tipos de datos
en JavaScript
*/

//Tipo de dato string
var nombre = "Samuel";
console.log(nombre);

//Ver el tipo de dato de una variable
nombre = 10;
console.log(typeof nombre);

//Tipo de dato number

var numero = 1000;
console.log(numero);

//Tipo de dato Objeto
var objeto = {
  nombre: "Jimer",
  apellido: "Espinoza",
  edad: 23,
  telefono: "123456789",
};
console.log(objeto);
console.log(typeof objeto);

//Tipo de dato Bolean(True, False)

var bandera = true;

console.log(typeof bandera);

var banderita = false;

console.log(banderita);

//Tipo de dato Function

function miFuncion() {
  console.log(miFuncion);
}

//Tipo de dato Symbol

var simbolo = Symbol("Mi simbolo");
console.log(simbolo);

//Tipo clase es una funcion

class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
console.log(Persona);
