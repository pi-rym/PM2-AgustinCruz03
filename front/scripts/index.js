const createTarget = require("./createTarget")
$.get("https://students-api.2.us-1.fl0.io/movies", (data, status) => {
  data.forEach(createTarget);
});
console.log("estoy probando que tengo que actualizar el bundle")