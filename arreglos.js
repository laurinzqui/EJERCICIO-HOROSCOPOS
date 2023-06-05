/*

Arreglos (arrays, matrices, colecciones de datos)


En JavaScript, un array es un objeto. Esto porque es un elemento especial que tiene propiedades y métodos propios de los objetos. Además, al ser un objeto, puede ser accedido principalmente mediante índices numéricos (claves). 

Es importante mencionar que aunque los arrays sean un objeto, éstos están diseñados específicamente para almacenar y manipular conjuntos ordenados de datos. Los arrays ofrecen características y funcionalidades específicas para trabajar con elementos indexados numéricamente, lo que los distingue de los objetos regulares en JavaScript.




*/
 var miArray = [1, 2, 3, 4, 5, 6];
 //variable sin inicializar 
 var colores;
 //arreglo sin asignar a una variable
{"azul", "rojo", "naranja", "verde"};
//variable colores declarados e incializada 
var colores =["azul", "rojo", "naranja", "verde" ["verde pastel", "amarillo pastel", "rosa pastel" ]];

//distintos tipos de datos en  un mismo arreglo (array)
var datosFelipe =["Felipe", 31, "Guadalajara", "Nikky", true, undefined]


//Cada asignatura esta asociada a una variable individual

var asignatura1 = "Matematicas";
var asignatura2 = "Literatura";
var asignatura3= "Fisica";


//Array
var asignaturas = ["Matematicas", "Literatura", "Fisica"];
console.log(typeof(asignaturas));
//acceso a un elemento de un arreglo
console.log("El elemento en en la posicion 2 de mis asignaatura es:  ", 
asignaturas[2]);
 
//mostrar longitud de mi arrglo
console.log(asignaturas.leght);
//ejemplos de arrays
var  carrito =["pantalon", "camisa", "corbata"];
var publicacion = ["felipe", 137, "29/05/2023"];
console.log(publicacion);

//modificar los elementos dentro del arrays
//reasignamos el valor a un elemento de nuestro arreglo por medio de su index
publicacion[1] = 138;

console.log(publicacion);
publicacion[4] = 150;

//metodos para agregar metodos al finala
asignaturas.push("biologia");
console.log(asignaturas);

asignaturas.push("Ingles");
console.log(asignaturas);


//metodo para eliminar e ultimo elemento de un arreglo
asignaturas.pop();
console.log(asignaturas);

//metodo para agregar elementos al principio de una rreglo
asignaturas.unshift("ingles", "quimica");
console.log(asignaturas);

asignaturas.shift();
console.log(asignaturas);

//metodo para saber si mi arreglo incluye un metodo especifico
let carritoBodega = ["gansito", "coca", "galletas","mazapan"];
regalo = carritoBodega.includes("coca");
if (regalo = true){
    console.log("te regalo una coquita");
} 


//metodo para concatenar arreglos
var listaDeGolosinas =["gansitos", "coca", "galletas", "mazapan"];
var listaDeFrutitasYVerduras = ["manzanas", "mangos", "platanos", "fresas"];
var listaDeCompras = listaDeGolosinas.concat(listaDeFrutitasYVerduras);
console.log(listaDeCompras);
console.log(listaDeGolosinas, listaDeFrutitasYVerduras);

//metodo para buscar un elemento en un arreglo y devolver el indice de su primera aparicion. si el element no se encuentra. reorna -1

console.log(listaDeCompras.indexOf("chicharrones"));

console.log("resumen de compra");
// metodo para unir elementos de un arreglo en una cadena de texto.
console.log(listaDeCompras.join());

//splice para borrar elementos
var abecedario =["a", "b", "c", "d", "e"];
abecedario.splice(2,2);

console.log(abecedario); 

//splice para insertar elementos
abecedario.splice(3,0, "c", "e");
console.log(abecedario)