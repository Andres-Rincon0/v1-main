interface songs {
    id: number;
    name: string;
    year?: number
} 

const lastResort:songs ={
    id:0,
    name:"lastResort",
    year:2021
}

const metal:songs={
    id: 1,
    name: "Slipknot",
    year:2013
}

console.log(lastResort.name);
console.log(metal.id);
