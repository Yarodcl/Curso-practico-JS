function mediaAritmetica(lista){
    const sumaLista = lista.reduce( //Reduce es un metodo de los Array que nos permite sumarlos, restarlos, dividirlos, etc. Según necesitemos.
       function (valorAcumulado = 0, nuevoElemento){ //Podemos usar una funcion anonima para hacer funcionar este meotodo, pero necesitamos dos parametros y uno en 0
           return valorAcumulado + nuevoElemento;
        }
    );
    
        const promedioLista = sumaLista / lista.length;
        return promedioLista;
    };
    


const firstList = [
    100,
    200,
    600,
    100000,
    800,
    480
];

function comparacionList(a, b){ //Funcion para comparar numeros de un array desordenado
    return a - b;
};

firstList.sort(comparacionList); //Funcion para crear la lista ordenada 

const halfList = parseInt(firstList.length / 2); //Calcular la mitad de la lista

function esPar(a){
    if(a % 2 === 0){ //Funcion para comparar el par del argumento
        return true;
    }
    else{
        return false;
    }
};

let mediana;

if(esPar(firstList.length)){ //Calcular mediana en caso de que sea par
    const firstElement = firstList[halfList - 1];
    const secondElement = firstList[halfList];

    const finalResult = mediaAritmetica([firstElement, secondElement]);

    mediana = finalResult;
    console.log(mediana);
}
else{
    mediana = firstList[halfList]; //Calcular mediana en caso de que sea impar
    console.log(mediana);
};


