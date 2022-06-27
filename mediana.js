function mediaAritmetica(lista){
    const sumaLista = lista.reduce( //Reduce es un metodo de los Array que nos permite sumarlos, restarlos, dividirlos, etc. Según necesitemos.
       function (valorAcumulado = 0, nuevoElemento){ //Podemos usar una funcion anonima para hacer funcionar este meotodo, pero necesitamos dos parametros y uno en 0
           return valorAcumulado + nuevoElemento;
        }
    );
    
        const promedioLista = sumaLista / lista.length;
        return promedioLista;
    };

function comparacionList(a, b){ //Funcion para comparar numeros de un array desordenado
    return a - b;
};


function mediana(lista){


    lista.sort(comparacionList); //Funcion para crear la lista ordenada 

    const halfList = parseInt(lista.length / 2); //Calcular la mitad de la lista
    
    function esPar(a){
        if(a % 2 === 0){ //Funcion para comparar el par del argumento
            return true;
        }
        else{
            return false;
        }
    };
    
    let mediana;
    
    if(esPar(lista.length)){ //Calcular mediana en caso de que sea par
        const firstElement = lista[halfList - 1];
        const secondElement = lista[halfList];
    
        const finalResult = mediaAritmetica([firstElement, secondElement]);
    
        mediana = finalResult;
        return mediana    
    }
    else{
        mediana = lista[halfList]; //Calcular mediana en caso de que sea impar
        return mediana
    };
    
};

function calcularMediana(){
    let data = document.getElementsByClassName("uData");
    let saveArray = [];
    for (let i = 0; i < data.length; i++){
        saveArray[i] = data[i].value;
        saveArray[i] = parseInt(saveArray[i]);
    };

    const finalCalculation = mediana(saveArray); 

    const resultHTML = document.getElementById("resultHTML");
    resultHTML.innerText = `La mediana de esta lista es: ${finalCalculation}`;
};



