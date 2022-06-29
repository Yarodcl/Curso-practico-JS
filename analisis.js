//Funciones importadas de otros JS
function esPar(number){
    return (number % 2 === 0)
};

function mediaAritmetica(lista){
    const sumaLista = lista.reduce( //Reduce es un metodo de los Array que nos permite sumarlos, restarlos, dividirlos, etc. Según necesitemos.
       function (valorAcumulado = 0, nuevoElemento){ //Podemos usar una funcion anonima para hacer funcionar este meotodo, pero necesitamos dos parametros y uno en 0
           return valorAcumulado + nuevoElemento;
        }
    );
    
        const promedioLista = sumaLista / lista.length;
        return promedioLista;
    };



//Funciones para calcular media salarial

function salaryMedian(lista){ //Calculando mediana salarial
    const halfList = parseInt(lista.length / 2);

    if(esPar(lista.length)){ //Calcular mediana en caso de que sea par
        const firstElement = lista[halfList - 1];
        const secondElement = lista[halfList];
    
        const median = mediaAritmetica([firstElement, secondElement]);
        return median;    
    }
    else{
        const halfPerson = lista[halfList]; //Calcular mediana en caso de que sea impar
        return halfPerson;
    };
};

//Mediana general, operaciones y funciones
const salaryClp = chile.map(
    function (person) { //Esta función anonima nos permitira iterar por cada elemento del array seleccionado
        return person.salary;
    }

);

const salaryClpSort = salaryClp.sort( //Ordenando el Array de objetos
    function (salaryA, salaryB){ //Recordar que en los metodos siempre debemos tener una funcion anonima. Pero en sort siempre necesitamos tener dos parametros para que se comparen y se ordene de forma correcta
        return salaryA - salaryB;
    }
);

const GeneralMedianClp = salaryMedian(salaryClpSort); //Mediana general de salarios

//Mediana top 10% 
const spliceStart = (salaryClpSort.length * 90) / 100;
const spliceCount = salaryClpSort.length - spliceStart;
const topSalaryClp = salaryClpSort.splice(spliceStart,spliceCount); //El metodo splice modifica nuestro array original, recibe dos o tres parametros que serviran para dar un rango desde donde y cuantos elementos borrar de nuestro array

const Top10MedianClp = salaryMedian(topSalaryClp); 
console.log({
    GeneralMedianClp,
    Top10MedianClp,
})
