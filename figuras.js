//Este es el codigo para calcular los datos del cuadrado
console.group("Cuadrado"); //Este comando de console nos sirve para agrupar los console log dentro de un rango

//Const es la palabra reservada que usamos cuando no cambiaremos el valor de una variable

function perimetroCua(lado){
    return `El perimetro de tu cuadrado es: ${lado * 4}`; //Para imprimir el resultado de una funcion siempre es necesario usar "return"
};


function areaCua(lado){
    return `El area de tu cuadrado es: ${lado**2}`;  //Para concatenar variables recordar usar las comillas simples
};


console.groupEnd();//Con este comando le damos fin a la seccion a agrupar


//Este es el codigo para calcular los datos del triangulo
console.group("Triangulo");


function perimetroT(lado1, lado2, base){
    return `El perimetro de tu triangulo es ${lado1 + lado2 + base}`;
};


function areaT(base, altura){
    return `El area de tu triangulo es ${(base * altura) / 2}`;
};


console.groupEnd();

//Este es el codigo para calcular los datos del circulo
console.group("Circulo");

const PI = Math.PI;

function perimetroCir(radio){
    let diametro = radio * 2;

    return diametro * PI;
} 

function areaCir(radio){
    return radio ** 2 * PI;
} 
console.groupEnd();

