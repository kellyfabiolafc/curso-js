//https://dragonball-api.com/api/characters/19

//PASO 1 : Función asincrona (tiempos distintos / diferidos) - Latencia

async function obtenerPersonaje(id) {
  //PASO 2 : URL (endpoint
  const API_URL = `https://dragonball-api.com/api/characters/${id}`;

  // PASO 3: App es propensa a errores

  try {
    // PASO 4 : Realizar la petición
    const respuesta = await fetch(API_URL);

    //PASO 5 : ¿Existe una respuesta?
    if (!respuesta.ok) {
      throw new Error(`No jhay comunicación con el servidor`); //¡Stop!
    }
    //PASO 6 : Si llegamos aqui, entonces hemos recibido los datos(JSON)
    const datos = await respuesta.json();
    // //PASO 7 : Mostrar  todo el json
    // console.log(datos);

    //Mostrar solo el nombre de las transformaciones
    const transformaciones = datos.transformations;
    transformaciones.forEach((transformacion) => {
      console.log(transformacion.name);
    });
  } catch (e) {
    console.error(` No se pudo concretar la operación : ${e}`);
  }
}

//test
//Debemos pasar el id del personaje
obtenerPersonaje(4);



