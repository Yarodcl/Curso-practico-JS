function moda(lista){
const countList = {}; //En esta variable se crea el objeto para el map

lista.map(  //Map en este caso nos sirve para recorrer o iterar el array en cuestión, y asignarle las operaciones que deseamos. En este caso, cuenta y suma sus elementos para agregarlos a un objeto final
    function (elemento){
        if(countList[elemento]){
            countList[elemento] += 1;
        }else{
            countList[elemento] = 1;
        };
    }
);

const countListArray = Object.entries(countList).sort(
    function (a, b){ //Funcion para comparar numeros de un array desordenado
        return a[1] - b[1];
    }
); //Object entries nos permite que los objetos se conviertan en arrays


const moda = countListArray[countListArray.length - 1];

return (`El numero que más se repite es el ${moda[0]} y se repite ${moda[1]} veces`)
};


function calcularModa(){
    let data = document.getElementsByClassName("uData");
    let saveArray = [];
    for (let i = 0; i < data.length; i++){
        saveArray[i] = data[i].value;
        saveArray[i] = parseInt(saveArray[i]);
    };

    const finalCalculation = moda(saveArray);
    const resultHtml = document.getElementById("resultFunc");

    resultHtml.innerText = finalCalculation;
};
