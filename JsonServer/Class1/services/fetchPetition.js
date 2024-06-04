//PETICION ... ESPERAR(promesas)

/* GET */
export async function get(URL){
    const response = await fetch(URL);
    return await response.json();
    
}


/* POST */
export async function post(URL, data) {
    const response = await fetch( URL , {
        method: 'POST',
        headers: {  
            "Content-type": "application/json"
        },
        body : JSON.stringify(data)
    });
}

/* PROMISES */


/* ASYNC AWAIT */
// async function get(URL){
//     const response = await fetch(URL_USER);
//     return await response.json();
//     return data
// }

// console.log( await get(URL_USER)); 