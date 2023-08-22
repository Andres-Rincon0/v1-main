"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class Astronauta {
    /* public id: number;
    public nombre: string;
    public record: string; */
    constructor(id, nombre, _record, _recompensa, mission = []) {
        this.id = id;
        this.nombre = nombre;
        this._record = _record;
        this._recompensa = _recompensa;
        this.mission = mission;
    }
    getLaunches() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'https://api.spacexdata.com/v3/launches';
            const { data } = yield axios_1.default.get(url);
            let cont = 0;
            data.forEach((datos) => {
                const { mission_name } = datos;
                this.mission[cont] = mission_name;
                cont += 1;
            });
            console.log(this.mission);
            return this.mission;
        });
    }
    set record(record) {
        this._record = record;
    }
    get record() {
        return this._record;
    }
    set recompensa(recompensa) {
        this._recompensa = recompensa;
    }
    get recompensa() {
        return this._recompensa;
    }
}
//via constructor
const astro1 = new Astronauta(1, "sofia", "andromeda", 50000);
console.log(astro1.nombre);
console.log(`record: ${astro1.record}`);
//via setter
astro1.record = "kepler";
console.log(`record via setter de Sofia: ${astro1.record}`);
class Detalles {
    constructor(nombre, descripcion, fecha_creacion) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.fecha_creacion = fecha_creacion;
    }
    get year() {
        return this.fecha_creacion.getFullYear();
    }
}
class Cohete extends Detalles {
    constructor(orbita, nombre, descripcion, fecha_creacion) {
        super(nombre, descripcion, fecha_creacion);
        this.orbita = orbita;
    }
}
let falcon1 = new Cohete('luz', 'falcon1', 'superCohete', new Date());
falcon1.year;
console.log(falcon1.year);
class TiposCohetes extends Detalles {
    constructor(nombre, descripcion, fecha_creacion) {
        super(nombre, descripcion, fecha_creacion);
        this.cohetes = [];
    }
    agregarCohete(cohete) {
        this.cohetes.push(cohete);
    }
}
let tiposCohetes = new TiposCohetes('falcons', 'felcons space X', new Date());
tiposCohetes.agregarCohete(falcon1);
console.log(falcon1, tiposCohetes);
astro1.getLaunches();
astro1.getLaunches();
