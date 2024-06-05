// Contiene toda la logica de peticiones a la base de datos(.Json) 

/* aca se importa la info del archivo JSAON */
import { URL_USER } from "./routes.js";

/* aca se exporta los datos o la funcion de busqueda creada */
// FUNCION PARA OBTENER DE UN ENDPOINT(URL QUE QUEIRO OBTENER)
export async function get(URL) {

    const response = await fetch(URL);
    /* promesa realizada */
    return await response.json();
}

//Funcion para enviar Post /* se envia info a la base de datos  */
export async function post(URL, data){
    
    await fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return await response.json();
}


