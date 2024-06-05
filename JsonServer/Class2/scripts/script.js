import { URL_USER } from "../services/routes.js";
/* SE IMPORTA TODA FUNCION CREADA DEL ARCHIVO.JS */
import { get, post , deleteById, putById} from "../services/services.js";

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const form = document.querySelector("form");
/* Forma buscando desde el padre */
const tableUser = document.querySelector(".tableUser");
const tableBody = tableUser.querySelector("tbody");
/* Buscando elementos en concreto */
const contentTable = document.querySelector(".contentTable");

const btnAdd = document.querySelector(".btnAdd");
const modalTitle =document.querySelector(".modal-title");
// EVENTOS
/* para refrescar la pagina un F5 */
document.addEventListener("DOMContentLoaded", paintUsers)

form.addEventListener("submit",(event) => {
    event.preventDefault();
    insert();
})

btnAdd.addEventListener("click", () => {
   form.reset();
   form.setAttribute("data-status","add");
   modalTitle.textContent = "Agregando un nuevo usuario"
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
        
        if (form.getAttribute("data-status" ) == "add") {
              post (URL_USER, data);
        } else if (form.getAttribute("data-status" ) == "edit"){
            putById(URL_USER, form.getAttribute("data-id"), data);
        }

        form.reset();
        paintUsers();
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
        const tdActions = document.createElement("td");
        const btnDelete = document.createElement("button");
        const btnEdit = document.createElement("button");
        
        btnDelete.classList = "btn btn-danger me-2"    
        btnEdit.classList = "btn btn-warning"    
        
        btnEdit.setAttribute("data-bs-toggle", "modal"),
        btnEdit.setAttribute("data-bs-target", "#exampleModal"),


        btnDelete.textContent = "Delete";
        btnEdit.textContent = "Edit";
        tdId.textContent = user["id"]/* 02 */
        tdName.textContent = user["name"]/* Catalina */
        tdAge.textContent = user["age"]/* 29 */
          
        tdActions.append(btnDelete, btnEdit);
        tr.append(tdId, tdName, tdAge, tdActions);

        /* funcion del boton borrar */
        btnDelete.addEventListener("click", ()=>{
            deleteById(URL_USER, user["id"])
        })

        /* funcion del poton editar */
        btnEdit.addEventListener("click", () => {
            form.setAttribute("data-status","edit");
            form.setAttribute("data-id", user["id"]);
            modalTitle.textContent = "Editando Usuario"

            nameInput.value = user["name"];
            ageInput.value = user["age"];
         })

        
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