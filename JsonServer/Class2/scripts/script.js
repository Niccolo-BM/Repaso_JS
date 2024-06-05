import { URL_USER } from "../services/routes.js";
import { get, post } from "../services/services.js";

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const form = document.querySelector("form");
/* Forma buscando desde el padre */
const tableUser = document.querySelector(".tableUser");
const tableBody = tableUser.querySelector("tbody");
/* Buscando elementos en concreto */
const contentTable = document.querySelector(".contentTable");


// EVENTOS
/* para refrescar la pagina un F5 */
document.addEventListener("DOMContentLoaded", paintUsers)

form.addEventListener("submit",(event) => {
    event.preventDefault();
    insert();
})

// FUNCIONES
function insert() {       
        const name = nameInput.value;
        const age = ageInput.value;
        /* EMPTY =  */
        if  (empty(name) || !isAge(age)) {
            return;
        }
        // esto ya permite ingresar datos en la pagina, se vean y se gaurden la BD
        const data = {name,age}
         /* "name": name,
            "age": age,
        } */
        post(URL_USER, data)
}
function empty(valor){
    /* para que no se almacene sin digitan ninguna info */
    if(valor == ""){
     alert("Debe ingresar un valor")
     return true;
    }
   /* para buscar un espacion vacio o un enter */
    if (/^\s/.test(valor)){
     alert("Hay un espacio al inicio del nombre")
     return true;
    }
    return false;
}
function isAge(age){
    if (age > 0 && age < 80){
        return true;
    }
    else if (age>80){
        alert("Esta muy viejo para usar esto o es un bot")
        
    }
        return false;   
}
async function paintUsers() {
    /* info que devuelve la basde de datos */

const users = await get(URL_USER); // Se definen los usuarios y se importa la optencion de la info pedida en archivo services.js y luego se impota en ()los usuarios 
    users.forEach((user) => {   
            /* Forma larga pero sin psobles errores */
        const tr = document.createElement("tr");
        const tdId = document.createElement("td");
        const tdName = document.createElement("td");
        const tdAge = document.createElement("td");
            
        tdId.textContent = user["id"]/* 02 */
        tdName.textContent = user["name"]/* Catalina */
        tdAge.textContent = user["age"]/* 29 */
            
        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdAge);

        contentTable.appendChild(tr);
        });
};


/* Forma corta pero con posibles errores */


// const users = JSON.parse(localStorage.getItem("users")) || [];
// users.forEach((user) => {
    //     const tr = document.createElement("tr");
//     const tdName = document.createElement("td");
//     const tdAge = document.createElement("td");
//     tdName.textContent = user.name;
//     tdAge.textContent = user.age;
//     tr.appendChild(tdName);
//     tr.appendChild(tdAge);
//     tableBody.appendChild(tr);
// };