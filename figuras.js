//Este es el codigo para calcular los datos del cuadrado

//Const es la palabra reservada que usamos cuando no cambiaremos el valor de una variable

function perimetroCua(lado){
    return `El perimetro de tu cuadrado es: ${lado * 4}`; //Para imprimir el resultado de una funcion siempre es necesario usar "return"
};


function areaCua(lado){
    return `El area de tu cuadrado es: ${lado**2}`;  //Para concatenar variables recordar usar las comillas simples
};



//Este es el codigo para calcular los datos del triangulo


function perimetroT(lado1, lado2, base){
    return `El perimetro de tu triangulo es ${lado1 + lado2 + base}`;
};


function areaT(base, altura){
    return `El area de tu triangulo es ${(base * altura) / 2}`;
};

//Este es el codigo para calcular los datos del circulo
const PI = Math.PI;

function perimetroCir(radio){
    let diametro = radio * 2;

    return diametro * PI;
} 

function areaCir(radio){
    return radio ** 2 * PI;
} 

//Interactuando con HTML

function CalcularPerimetroS(){
    const input = document.getElementById("SquareC"); //Gracias al get podemos traer la etiqueta asociada al JS
    let value = input.value; //Y de como si un objeto se tratase, traemos solamente el atributo value de nuestro input

    const perimetro = perimetroCua(value);
    alert(perimetro);
}; //Gracias al onclick, cada vez que hagamos click al boton se activaran las funciones indicadas
