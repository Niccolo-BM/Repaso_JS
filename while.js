//SE REPITE MIENSTRAS LA CONDICION SEA VERDADERA

/*
 condition = true (5>2);

 while (condition){
    // code to executewhile the condition is true
 }
 la condicion debe exixstir necesariamente antes de empezar y ser "true"
  
*/



/* pedir un numero par, y no para hasta que se cumpla esa condicion  */

let num =  Number(prompt("Dime un numero par: "))

while (num % 2 != 0) {
    alert ("ese nuemro no es par")
    num =  Number(prompt("Dime un numero par: "))
}

