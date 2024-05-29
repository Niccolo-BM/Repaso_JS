//** FOR **//

// 1. contar de 0 a 4
for (let i=0 ; i <= 4; i++) {
    // console.log(i)
}

// 2. contar de 3 a 0
for (let i=3 ; i>=0; i--) {
    // console.log(i)
}

// 3. tabla multiplicar de 12
    // let num = prompt("de que nuemro quiere la tabla ")
    // num = Number(num);

    // result = "tabal de" +num+"\n";
    // for (let i=1; i<11 ; i++) {
    //     result += ` ${num} * ${i} = ${num+i} \n`
    // }
    // alert(result)

// 4. recorrer lista(OF) u objeto (IN)

const lista = [1,2,3,4];

const objeto ={
    "name": "Nicolas",
    "lastName": "Bernal"
}
for ( numero of lista) {
    console.log(numero);
} 

for (datos in objeto){
    console.log(datos); //imprime solo las llaves, el tipo de obj
    console.log(objeto[datos]); //imprime solo los valores, del tipo de obj
}



