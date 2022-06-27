function mediaAritmetica(lista){
let sumaLista = 0;

for(let i = 0; i < lista.length; i++){
    sumaLista += lista[i];
};

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};


function CalcularPromedio(){
    let data = document.getElementsByClassName("Qdata");
    let saveArray = [];
    for (let i = 0; i < data.length; i++){
        saveArray[i] = data[i].value;
        saveArray[i] = parseInt(saveArray[i]);
    };
    
    const finalResult = mediaAritmetica(saveArray);
    
    const resultHTML = document.getElementById("resultHTML");
    resultHTML.innerText = `El promedio es de ${finalResult}`;
};

