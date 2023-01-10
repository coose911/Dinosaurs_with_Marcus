const Park = function (name, ticketPrice) {
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurCollection = []
}

module.exports = Park;

Park.prototype.addDinosaur = function (dinosaur) {
    return this.dinosaurCollection.push(dinosaur)
}

Park.prototype.removeDinosaur = function () {
    return this.dinosaurCollection.pop()
}

