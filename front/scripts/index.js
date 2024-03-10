const createTarget = require("./createTarget")
const axios = require("axios")
// ESTA ES NUESTRA FORMA VIEJA ANTES DE USAR AXIOS
// $.get("https://students-api.2.us-1.fl0.io/movies", (data, status) => {
//   data.forEach(createTarget);
// });
// console.log("estoy probando que tengo que actualizar el bundle, Agustin sos un crack")


// // AHORA VAMOS A USAR PROMESAS USANDO SUS METODOS THEN Y CATCH PARA OBTENER LOS DATOS O UN ERROR
// const promiseMovies = axios.get("https://students-api.2.us-1.fl0.io/movies")
// promiseMovies.then((data)=>{
//   //estamos dentro de la funcion succes handler
//   //IMPORTANTE: si todo sale bien el parametro data de la funcion tiene dentro una propiedad "data" con la información
//   data.data.forEach(createTarget)
// }).catch((error)=>{
//   //estamos dentro de la funcion error handler
//   console.log(error)
// })

// AHORA VAMOS A USAR PROMESAS USANDO ASYNC/AWAIT PARA OBTENER LOS DATOS O UN ERROR
const traerInformacion = async () => {
  try {
    //intentamos traer la información sin errores
  const promesa = await axios.get("https://students-api.2.us-1.fl0.io/movies")
    promesa.data.forEach(createTarget)
  }
  catch(err){
    //si detectó un error el bloque de arriba viene a este bloqué 
    console.log(err)
  }
}

//Y llamo a la funcion async(sino no se ejecuta)
traerInformacion();