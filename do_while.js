

// num = 0 ;
// do {
//     const num = Number(prompt("dime un numero parrr"))
//     if (num % 2 != 0) {
//         alert("ese no par")
//         consition  = true
//     } else {
//         alert("ese tal vez si")
//     };
// } while (num % 2 != 0)
    


/* 2. promedio de notas (lista de notas) */

// let flag = "yes";
// const listaNotas = []

// do {
//     let num = Number(prompt("Nota: "))
//     listaNotas.push(num) 
//     flag = prompt("Desea agregar otra nota? (yes/no) ")
// } while (flag == "yes");

// alert (`${ listaNotas.reduce((acum, value) =>acum+value) / listaNotas.length}`)


/* 3. menu que se repita mientras que el usuario no diga que quiere "SALIR" (
    calculadora con 2 operaciones 
    1. sumar 2 numeros
    2. tabla de multiplicar de x del 1 -10
) */

// let menu = "";

// do{
//     menu = prompt(`
//     Opciones:
//     1. sumar
//     2. multiplicar
//     3. salir  
    
//     opcion:
//     `)
//     switch (menu) {
//         case "1":
//             let num1 = Number(prompt("Ingrese un numero: "))
//             let num2 = Number(prompt("Ingrese otro numero:"))
//             alert (`la suma de ${num1+num2}`)
        
//         break;

//         case "2":
//             let num = prompt("De que numero queires tabla? ")
//             num = Number(num);

//             let result = "tabla del  " + num + "\n";

//             for (let i = 1; i <= 10; i++) {
//                 result  += `${num} x ${i} = ${num * i} \n`  
//             }      
//             alert(result)
//         break;

//         case "3":
//             alert("vemos")
//         break;

//         default:("Opcion invalida")
// }


// } while (menu != "3")







