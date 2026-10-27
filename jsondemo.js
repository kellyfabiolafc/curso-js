//Se requieren tenga las claves :
// 2 cadena
// 2 numerico (entero , decimal)
//1 null
//1 lógica (false / true)
//1 array (cadenas)
//1 array (objetos)
//1 objeto (arrays)

const libro = {
  titulo: "El señor de los anillos",
  autor: "J. R. R. Tolkien",
  anioPublicacion: 1954,
  precio: 49.99,
  editorial: null,
  disponible: true,
  personajes: ["Frodo Bolsón", "Samwise (Sam) Gamyi", "Gandalf", "Aragorn"],
  premios: [
    {
      nombre: "International Fantasy Award",
      anio: 1957,
    },
    {
      nombre: "Prometheus Hall of Fame Award",
      anio: 2009,
    },
  ],
  contenido: {
    capitulos: [
      "Una reunión muy esperada",
      "La sombra del pasado",
      "Tres es compañía",
    ],
    generos: ["Fantasía", "Aventura", "Épica"],
  },
};

const pelicula = {
  titulo: "Avengers I",
  sinopsis: "Los vengadores se unen para derrotar a Loki",
  presupuesto: 220000000,
  recaudacion: 1520000000,
  paisEstreno: null,
  preEstreno: false,
  idiomas: ["Español", "Inglés", "Portugués", "Chino", "Italiano"],
  elenco: [
    {
      actor: "Robert Downey Jr.",
      personaje: "Iron Man",
      rol: "Protagonista",
    },
    {
      actor: "Chris Evans",
      personaje: "Capitán América",
      rol: "Protagonista",
    },
    {
      actor: "Tom Hiddleston",
      personaje: "Loki",
      rol: "Antagonista",
    },
  ],
  mcu: {
    peliculas: ["Capitán América"],
    series: ["Wanda Vision"],
  },
};

//¿Cuál es el último elemento?
console.log(pelicula.idiomas[pelicula.idiomas.length - 1]);

//¿Cuál es el personaje del primer actor?
console.log(pelicula.elenco[0].personaje) // Iron Man

//¿Cuál es el rol del último actor de la lista?

console.log(pelicula.elenco[pelicula.elenco.length - 1].rol)// Antagonista

//Mostrar todas las series de MCU

const series = pelicula.mcu.series
series.forEach(serie => {
    console.log(serie)
});
