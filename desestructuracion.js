//Estructuras = OBJETOS
//Desestructuras = ABRIR OBJETOS

const persona = {
    apellidos: "Francia Minaya",
    nombres: "Jhon Edward",
    edad: 42,
    skills: ["PHP", "Java", "Javascript", "SQL", "Python"]
}

//Guardar apellidos, nombres, edad en variables
/*
const apellidos = persona.apellidos
const nombres = persona.nombres
const edad = persona.edad
*/

//Desestructurar es separar datos provenientes de un objeto
//NOTA: No es necesario recuperar toda la colección
//NOTA: Las variables deben coincidir con las claves

const { nombres, skills } = persona

console.log(nombres, skills)