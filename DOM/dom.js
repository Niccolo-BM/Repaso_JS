// TagName (etiqueta)

const div =document.getElementsByTagName("div") // todas las coincidencias
const div3 = document.querySelector(`div`)
const p =   document.querySelector(`p`)

// className (clase)

const divHijo = document.getElementsByClassName("hijo") 
const divPapa = document.querySelector(`.papa`)

// ID (id)

const div1 = document.getElementById("uno")
const div2 = document.querySelector("#dos")

// console.log(div)
// console.log(div3)
// console.log(p)
// console.log(divHijo)
// console.log(divPapa)
// console.log(div2)
// console.log(div1)

p.style =" color: blue"

const h1 = document.createElement("h1")
h1.textContent = "Hola Mundo"

document.body.prepend(h1)
h1.classList.add("title")
// h1.setAttribute("data-color", "red")

h1.addEventListener("click", () => {
    // h1.style = "color: red"
    h1.classList.toggle("change")
})


Document.querySelector("button").addEventListener("submit", (e) => {
    e.preventDefault()
});










