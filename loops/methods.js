/*  forEach (function(interator, index, lista)) */ //no retorna nada

lista = ["hola", "nose"]
personas = [
    {
        "name": "Nicolas",
        "phone": 12345
    },
    {
        "name": "Catalina",
        "edad": 67890
    }
];

personas.forEach((persona, index) => {  //index: posicion de la iteracion
    if (index == 0){
        personas[index]["phone"] = 0
    }
    
});

    // lista.forEach((iterador, w, lista2) => {
    //     if (iterador == "hola") {
    //         lista[w] = "x"
    //     }
    // });

personas.forEach(person => {console.log(person);});
console.log(lista);


/*  map (function(iterator, index, lista*/ //retorna una nueva lista que dependera de lo que este dentro de los parentesis

listNum = [0,1,2,3,4,5,6]

listDoble = listNum.map((num) => {
    if (num%2 == 0 ){
        return 0
    }
    else {
        return num
    }
});
console.log(listDoble);
console.log(listNum);


/*  .filter (function(interator))*/ //retorna una nueva lista que dependera de la n que este dentro de los parentesis
 
listPar = listNum.filter((num) =>{
    return num % 2 == 0
});
console.log(listPar);
console.log(listNum);


/* .reduce (function (acum, iterator*/ //retorna una nueva lista

result = listNum.reduce((acum, iterador) => {
    return acum+(iterador*2)
});

console.log(result);

