//Crear un objeto que almacena datos de una mascota
const mascota = {
  nombre: "Firulais",
  especie: "Perro",
  edad: 3,
  color: "Marrón",
  raza: "Labrador",
};

//desestructurar utilizando un mínimo de 4 variables
const { nombre, especie, edad, color } = mascota;

console.log(nombre, especie, edad, color);
