//Hacer una consulta a la API y obtener una lista de los planetas
//Mostrar únicamente los planetas que NO hayan sido destruidos (isDestroyed)
//Los datos a mostrar son: name (id) Ejemplo: Monar (6)

async function obtenerPlanetaSD() {
  const API_URL = `https://dragonball-api.com/api/planets`;
  try {
    const respuesta = await fetch(API_URL);
    if (!respuesta.ok) {
      throw new Error(`No jhay comunicación con el servidor`); //¡Stop!
    }

    const datos = await respuesta.json();

    const planetas = datos.items;

    planetas.forEach((planeta) => {
      // console.log(planeta.name)

      if (!planeta.isDestroyed) {
        console.log(`${planeta.name} - ${planeta.id}`);
      }
    });
  } catch (e) {
    console.log(`No se pudo realizar la operación ${e}`);
  }
}

obtenerPlanetaSD();
