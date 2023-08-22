
// 9. N atletas han pasado a finales en salto triple en los juegos
// olímpicos femenino de 2022. Diseñe un programa que pida por
// teclado los nombres de cada atleta finalista y a su vez, sus
// marcas del salto en metros. Informar el nombre de la atleta
// campeona que se quede con la medalla de oro y si rompió
// récord, reportar el pago que será de 500 millones. El récord
// esta en 15,50 metros.

let pago:string = "no"
let record:number = 16.23;
let nombreP: string= "";
let marcas:number= 2;
let Marcas:number=0;
let Nombre:string = "";
let atletasFinaliztas:number = 2;

for (let n:number = 0; n < atletasFinaliztas; n++){
    Nombre= "sherman";
    Marcas= 12;
    
    for(let f= 0; f < Marcas; f++ ){
        marcas=90;
        
        if(marcas > record){
            record = marcas;
            nombreP = Nombre;
            pago = "si";
        }
    }
}

console.log(`El ganador de la medalla de oro fue ${nombreP} con una marca de salto ${record} y ${pago} se le da el pago de 500millones`);
