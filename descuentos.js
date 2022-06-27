const originPrice = 8000; //En estas dos constantes se habla de porcentajes, este 100 es un 100%
const discount = 23; //Este 15 es un 15%

let coupons = ["Chapa", "La", "Pachala"]

function priceCalculator(price, discount, coupon){
    const perDiscount = (100 - discount) - coupon;
    const realPrice = (price * perDiscount) / 100; //La formula se salta un paso ya que lo hicimos en la variable anterior. Restar porcentajes
    return realPrice;
};

function priceDiscount(){
 const inputP = document.getElementById("originalPrc");
 const inputD = document.getElementById("discountPer");
 const inputC = document.getElementById("discountCoup");
 let valueP = inputP.value;
 let valueD = inputD.value;
 let valueC = inputC.value;

 let discountCoup;

 switch(valueC){
    case coupons[0]:
         discountCoup = 15;
    break;
    case coupons[1]:
        discountCoup = 5;
    break;
    case coupons[2]: 
        discountCoup = 20;
    break;
    default:
        discountCoup = 0;
        alert("Ingresa un cupon valido");
    break;
 }
 
 const finalPrice = priceCalculator(valueP,valueD, discountCoup);

 
 
 const resultPrc = document.getElementById("resultPrc"); //En esta variable guardamos el parrafo del HTML para usarlo en JS
 resultPrc.innerText = `El precio con descuento es: ${finalPrice} [Moneda local]`; //Aqui finalmente ocupamos el atributo innerText para poder escribir HTML desde el JS
};