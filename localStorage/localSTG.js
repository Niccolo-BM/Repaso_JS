// localStorage (Almacenamiento local en Navegador, sera permanente siempre y cuando no lo borre o desinstale el programa)

const numero = 28
const lista =["hola", true, 3]
const objeto = {
    "name": "Nicolas",
    1:"hola",
    "edad": 31,    
    "clan": "bezoz"
}

/* Insertar*/
/*Gurardad nueva info o editarla */
/*localStorage.setItem("key"(llave) , "value"(valor))*/

localStorage.setItem("name", "Nicolas")
localStorage.setItem("lastName", "Bernal")

localStorage.setItem("numero", numero)
localStorage.setItem("lista", lista)
localStorage.setItem("objeto",JSON.stringify(objeto))//PARSEAR:transformar un tipo de dato a otro

// localStorage.setItem("lastName", "Morales")//sobre escribe

/*OBTENER*/
/*localStorage.setItem("key")*/  

const nombre = localStorage.getItem("name")
const apellido = localStorage.getItem("lastName")

let objetoLs = localStorage.getItem("objeto")
objetoLs = JSON.parse(objetoLs)
console.log(objetoLs[1])

console.log(JSON.parse(`
    [12, 12]
`))

console.log(typeof objetoLs)
// console.log(nombre)
// console.log(apellido)

/*ELIMINAR*/

localStorage.removeItem("name")
// localStorage.removeItem("naem")
// localStorage.clear()//borra todo lo almacenado










