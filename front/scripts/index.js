const createTarget = require("./createTarget")
const axios = require("axios")
// ESTA ES NUESTRA FORMA VIEJA ANTES DE USAR AXIOS
// $.get("https://students-api.2.us-1.fl0.io/movies", (data, status) => {
//   data.forEach(createTarget);
// });
// console.log("estoy probando que tengo que actualizar el bundle, Agustin sos un crack")


// AHORA VAMOS A USAR PROMESAS PARA OBTENER LOS DATOS O UN ERROR
const promiseMovies = axios.get("https://students-api.2.us-1.fl0.io/movies")
promiseMovies.then((data)=>{
  //estamos dentro de la funcion succes handler
  //IMPORTANTE: si todo sale bien el parametro data de la funcion tiene dentro una propiedad "data" con la información
  data.data.forEach(createTarget)
}).catch((error)=>{
  //estamos dentro de la funcion error handler
  console.log(error)
})