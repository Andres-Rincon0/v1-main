import axios from 'axios'
import { ApispacexResponse } from './interfaces/apispacex-response.interface.js';

class Astronauta{
    /* public id: number;
    public nombre: string;
    public record: string; */


    constructor(
       public readonly id:number,
       public nombre:string,
       private _record:string,
       private _recompensa:number,
       public mission:string[]=[]
        )
        { }
        
        async getLaunches(){
            const url = 'https://api.spacexdata.com/v3/launches';
            const {data} = await axios.get<ApispacexResponse[]>(url);

            let cont = 0
            data.forEach((datos:any)=>{
                const {mission_name} = datos
                this.mission[cont] = mission_name;
                cont += 1;
            }
            )
            console.log(this.mission);
            return this.mission
            
        }

        
        set record(record:string){
            this._record = record
        }

        get record():string{
           return this._record;
        }

        set recompensa(recompensa:number){
            this._recompensa = recompensa
        }

        get recompensa():number{
           return this._recompensa;
        }
        
    }

    //via constructor

const astro1 = new Astronauta(1, "sofia", "andromeda", 50000);


console.log(astro1.nombre);
console.log(`record: ${astro1.record}`);

//via setter

astro1.record = "kepler"
console.log(`record via setter de Sofia: ${astro1.record}`);



class Detalles {
    constructor(
        public nombre: string,
        public descripcion: string,
        public fecha_creacion: Date,
    ){}
    get year(){
        return this.fecha_creacion.getFullYear()
    }
}

class Cohete extends Detalles{
    constructor(
        public orbita: string,
        nombre: string,
        descripcion: string,
        fecha_creacion: Date,
    ){
        super(nombre, descripcion, fecha_creacion)
    }
}

let falcon1 = new Cohete('luz', 'falcon1', 'superCohete', new Date())
falcon1.year

console.log(falcon1.year);

class TiposCohetes extends Detalles{
    public cohetes:Cohete[] = []
    constructor(
        nombre:string,
        descripcion: string,
        fecha_creacion: Date,
    ){
        super (nombre, descripcion, fecha_creacion)
    }
    agregarCohete(cohete:Cohete){
        this.cohetes.push(cohete)
    }
}

let tiposCohetes = new TiposCohetes('falcons', 'felcons space X', new Date())

tiposCohetes.agregarCohete(falcon1)
console.log(falcon1, tiposCohetes);

astro1.getLaunches();

astro1.getLaunches()