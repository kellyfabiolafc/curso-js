//Almacenar un texto en una variable y luego mostrarlo en orden inverso en la consola
//Ejemplo: "senati" → "itanes"
const texto = "senati";
let textoInverso = " ";

function invertir(texto) {
  console.log(texto);
  for (let i = texto.length - 1; i >= 0; i--) {
    textoInverso += texto[i];
  }
  return textoInverso;
}
console.log("Texto inverso : ", invertir(texto));

//Crear una variable donde almacene una dirección de correo electrónico
//Verificar si el correo es válido cuando tiene un solo @
//Ejemplo:
// jhon@gmail.com    [correcto]
// luis@@gmail.com    [incorrecto]
// mariagmail.com   [incorrecto]

let correo = "Kelly@@gmail.com";

let partes = correo.split("@");

if (partes.length === 2) {
  console.log("Correo correcto");
} else {
  console.log("Correo incorrecto");
}
