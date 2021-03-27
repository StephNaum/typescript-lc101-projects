export class Rocket {
    massKg: number;
    name:string;
    totalCapacityKg:number;
    cargoItems: Cargo[] = [];
    astronauts : Astronaut[] = [];
    constructor(name:string, totalCapacityKg:number){
        this.name = name;
        this.totalCapacityKg=totalCapacityKg;
    }
    //This method pushes all the massKg properties from the interface into an array
    sumMass(items:Payload[]): number{
        let counter: number = 0;
        for (let i=0; i<items.length; i++){
           
            counter = items[i].massKg;
            counter += counter;
        }
        return counter/2;
    }
    currentMassKg(): number{
        let astronautsMass = this.sumMass(this.astronauts);
        let cargoMass = this.sumMass(this.cargoItems);
        return astronautsMass + cargoMass;
    }
    canAdd(item: Payload): boolean{
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        }
    }
    addCargo(cargo: Cargo): boolean{
        if (this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut): boolean{
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
}

import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import {Payload} from './Payload';
