const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const form = document.querySelector("form");
/* Forma buscando desde el padre */
const tableUser = document.querySelector(".tableUser");
const tableBody = tableUser.querySelector("tbody");
/* Buscando elementos en concreto */

form.addEventListener("submit",(event) => {
    event.preventDefault();
    insert();
})
function insert() {       
        const name = nameInput.value;
        const age = ageInput.value;
        /* EMPTY =  */
        if  (empty(name) || !isAge(age)) {
            return;
        }

        console.log("nombre: " +name+ " Edad :"+ age);
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