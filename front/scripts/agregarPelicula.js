
const limpiarHandler = () => {
    const inputs = document.getElementsByTagName("input")
    for (let input of inputs) {
        input.value = "";
    }
} 

const btnLimpiar = document.getElementById("btnLimpiar")
btnLimpiar.addEventListener("click", limpiarHandler)



const submitHandler = () => {
    const inputs = document.getElementsByTagName("input")
    for (let input of inputs) {
        if(!input.value){
            return alert("no se pudo enviar el formulario, hay campos vacios")
        }
    }
    alert("Formulario enviado")
}

const btnSubir = document.getElementById("btnSubir")

btnSubir.addEventListener("click", submitHandler)