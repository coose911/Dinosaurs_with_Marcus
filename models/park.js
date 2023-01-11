const Dinosaur = require('../models/dinosaur.js');

const Park = function (name, ticketPrice) {
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurCollection = []
}

Park.prototype.addDinosaur = function (dinosaur) {
    return this.dinosaurCollection.push(dinosaur)
}

Park.prototype.removeDinosaur = function () {
    return this.dinosaurCollection.shift()
}

Park.prototype.mostVisited = function (input) {
    let mostPopular = {guestsAttractedPerDay:0,species:''};
    for (let i = 0; i < input.length; i++) {
            if (input[i].guestsAttractedPerDay > mostPopular.guestsAttractedPerDay){
                mostPopular = input[i];
            }
    }
    return mostPopular.species
}

Park.prototype.particularSpecies = function (param) {
    for(let i = 0; i < this.dinosaurCollection.length; i++) {
        if (this.dinosaurCollection[i].species === param.species){
            return param.species  
        }
    }
}

Park.prototype.totalVisitors = function () {
    totalGuests = 0
    for (let i = 0; i < this.dinosaurCollection.length; i++){
        totalGuests += this.dinosaurCollection[i].guestsAttractedPerDay;
    }
    return totalGuests
}

Park.prototype.totalVisitorsPerYear = function () {
    return this.totalVisitors()  * 365;
}

Park.prototype.totalRevenuePerYear = function () {
    return this.totalVisitorsPerYear()  * this.ticketPrice;
}

module.exports = Park;
