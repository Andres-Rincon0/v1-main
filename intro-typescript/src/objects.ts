//objetos arrays

//los corchetes solo se ponen en array

let goleadores:string[] = ['deiby', 'Amed', 'yohan']

let goles:number[] = [0,5,-2]

let tirosdeesquina:number[] = []

console.log(`goleadores: ${goleadores}`);
console.log(`goles: ${goles}`);

//metodo alternativo 

let penaltis: Array<boolean> = [false]
console.log(`hubieron penaltis?: ${penaltis}`);


//typescript infiere los metodos aplicables segun el tipo de dato
console.log(goles.map(ele=> ele.toString()));
 

let goleadoresId = [10,7,9,11]

goleadoresId.push(1)
console.log(goleadoresId);


goleadoresId.push(+ '13', +  '29')
console.log(typeof goleadoresId);


//objetos 

/* const songs={
    id: 1,
    name: "Diying song",
    
} */
/* 
console.log(songs); */



const objeto:{
   readonly id:number,
    nombre: string,
    edad: number,
    sueldo?:number
} = {
    id:8,
    nombre: "Andres",
    edad: 10
}

objeto.edad = 11
/* objeto.id = 99  */
console.log(objeto.id);
