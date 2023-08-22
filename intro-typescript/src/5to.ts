// 5. Construir el algoritmo que lea por teclado dos números,
// si el primero es mayor al segundo informar su suma y
// diferencia, en caso contrario, informar el producto y la
// división del primero respecto al segundo.

let numeroF:number = 0;
let numero1:number =  3;
let numero2:number= 4;

if (numero1 > numero2){
    numeroF = numero1 + numero2
   let diferencia:number = numero1 - numero2

    console.log(`el numero ${numero1} es mayor que ${numero2} asi que se suman y el resultado es ${numeroF}`);

    console.log(`la diferenecia entre ${numero1} y ${numero2} es de ${diferencia}`);
}
else{
    let división:number = numero1 / numero2
    console.log(`El numero es ${numero1}`);
    console.log(`El segundo numero es ${numero2}`);
    console.log(`la division entre estos es ${división}`);
    
}