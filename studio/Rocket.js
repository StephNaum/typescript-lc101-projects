"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    //This method pushes all the massKg properties from the interface into an array
    Rocket.prototype.sumMass = function (items) {
        var weight = 0;
        for (var i = 0; i < items.length; i++) {
            weight += items[i].massKg;
        }
        return weight;
    };
    Rocket.prototype.currentMassKg = function () {
        var astronautsMass = this.sumMass(this.astronauts);
        var cargoMass = this.sumMass(this.cargoItems);
        return astronautsMass + cargoMass;
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
