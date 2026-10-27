//Crea una función que reciba el ID del planeta, haga uso del API Dragon Ball
//y retorne una lista de personajes (name - race - affiliation). Ejemplo: 1
//Piccolo - Namekian - Z Fighter
//Ginyu - Frieza Race - Army of Frieza
//Dende - Namekian - Z Fighter
//...

async function obtenerPlaneta(id) {
  const API_URL = `https://dragonball-api.com/api/planets/${id}`;

  try {
    const respuesta = await fetch(API_URL);

    if (!respuesta.ok) {
      throw new Error(`No jhay comunicación con el servidor`);
    }

    const datos = await respuesta.json();

    const personajes = datos.characters;

    personajes.forEach((character) => {
      console.log(`
      Nombre : ${character.name} ,
      Raza : ${character.race}, 
      Afiliación : ${character.affiliation}
        `);
    });
  } catch (e) {
    console.error(` No se pudo concretar la operación : ${e}`);
  }
}

obtenerPlaneta(1);
