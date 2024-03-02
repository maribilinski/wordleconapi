let intentos = 6
let lista =["CARRO", "PLAZA", "LAPIZ", "LLAVE", "REGLA", "ANGEL", "VERDE", ]

const button = document.getElementById("guess-button")
button.addEventListener("click", intentar)
const input = document.getElementById("guess-input")
const valor = input.value
const GRID = document.getElementById("grid")


fetch("https://random-word-api.herokuapp.com/word?length=5&lang=es")
    .then(response => response.json())
    .then(response =>{
        console.log(response)
        palabra = response [0].toUpperCase()
    })
    .catch(err =>{ 
        console.log ("error")
    })

function intentar(){
 
    const ROW = document.createElement('div')
    ROW.className = 'row'

    const INTENTO = leerIntento()
    console.log(INTENTO)
    if (document.getElementById("guess-input").value.length !=5){
        alert("Introducir 5 letras") 
    }
    else if (INTENTO === palabra ) {
        terminar ("<h1> YOU WIN!! </h1>")
        return
    }
    for (let i in palabra){
        const SPAN = document.createElement('span')
        SPAN.className = "letter"
    
        if (INTENTO[i]===palabra[i]){
            console.log (INTENTO[i], "verde")
            SPAN.innerHTML = INTENTO[i]
            SPAN.style.backgroundColor = 'green'
            console.log("span")

        } else if( palabra.includes(INTENTO[i]) ) {
            console.log (INTENTO[i], "amarillo")
            SPAN.innerHTML = INTENTO[i]
            SPAN.style.backgroundColor = "yellow"
            console.log("span")
        } else {
            console.log (INTENTO[i], "gris")
            SPAN.innerHTML = INTENTO[i]
            SPAN.style.backgroundColor = 'gray'
            console.log("span")
        }
        ROW.appendChild (SPAN)
    }
    GRID.appendChild(ROW)
        intentos --
    if (intentos==0){
        terminar ("<h1> YOU LOST!! </h1>")
    }
}

function leerIntento(){
    let intento = document.getElementById("guess-input")
    intento = intento.value
    intento = intento.toUpperCase()
    return intento
}

function terminar(mensaje){
    const INPUT = document.getElementById("guess-input")
    INPUT.disabled = true
    button.disabled = true
    let contenedor = document.getElementById('guesses')
    contenedor.innerHTML = mensaje
}