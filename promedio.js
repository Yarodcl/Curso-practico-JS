const lista1 = [
    100,
    200,
    300,
    500
];

function mediaAritmetica(lista){
const sumaLista = lista.reduce( //Reduce es un metodo de los Array que nos permite sumarlos, restarlos, dividirlos, etc. Según necesitemos.
   function (valorAcumulado = 0, nuevoElemento){ //Podemos usar una funcion anonima para hacer funcionar este meotodo, pero necesitamos dos parametros y uno en 0
       return valorAcumulado + nuevoElemento;
    }
);

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};


