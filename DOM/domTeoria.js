// El DOM (Document Object Model) es una interfaz de programación que permite a los desarrolladores interactuar con documentos HTML y XML como si fueran objetos en un lenguaje de programación, como JavaScript. El DOM representa la estructura del documento como un árbol de nodos, donde cada nodo corresponde a una parte del documento, como elementos, atributos y texto.

//Nodos: `Cada componente del documento (elementos, atributos, texto) es    representado como un nodo. Hay diferentes tipos de nodos, como elementos (element nodes), texto (text nodes), y atributos (attribute nodes).`


/* 1. Acceder a Elementos:

// Acceder por ID
    const element = document.getElementById('myElement');  

// Acceder por clase
    const elements = document.getElementsByClassName('myClass');  

// Acceder por etiqueta
    const tags = document.getElementsByTagName('p');  

// Acceder por selector CSS
    const query = document.querySelector('.myClass');  

// Acceder a todos los elementos por selector CSS
    const queries = document.querySelectorAll('.myClass');  
*/


/* 2.Modificar Contenido:

// Cambiar el texto de un elemento
    element.textContent = 'Nuevo contenido';  

// Cambiar el HTML interno de un elemento
    element.innerHTML = '<strong>Texto en negrita</strong>';  

*/


/* 3.Modificar Atributos:

// Establecer un nuevo atributo
    element.setAttribute('data-id', '123');  

// Obtener el valor de un atributo
    const attr = element.getAttribute('data-id');  

// Eliminar un atributo
    element.removeAttribute('data-id');  

*/

/* 4.Manipular Estilos:

// Cambiar el color del texto
    element.style.color = 'red';  

// Ocultar un elemento
    element.style.display = 'none';  

*/


/* 5.Crear y Agregar Elementos:

// Crear un nuevo elemento div
    const newElement = document.createElement('div');  
    newElement.textContent = 'Hola, mundo!';

// Agregar el nuevo elemento al cuerpo del documento
    document.body.appendChild(newElement); 
 

*/
