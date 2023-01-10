const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park
  let dinosaur
  let dinosaur1

  beforeEach(function () {
    park = new Park ('M&D', 30),
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50)
    dinosaur1 = new Dinosaur('velociraptor', 'carnivore', 100)
  })

  it('should have a name', function(){
    const actual = park.name
    assert.strictEqual(actual, 'M&D')
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice
    assert.strictEqual(actual, 30)
  });

  it('should have a collection of dinosaurs', function(){
    const actual = park.dinosaurCollection
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function() {
    const actual = park.addDinosaur(dinosaur);
    assert.deepStrictEqual(park.dinosaurCollection, [dinosaur]);
  });


  it('should be able to remove a dinosaur from its collection', function(){
    const expected = []
    park.removeDinosaur(dinosaur);
    const actual = park.dinosaurCollection
    assert.deepStrictEqual(actual, expected);
  });

  xit('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur1)
    const expected = park.mostVisited(park.dinosaurCollection)
    assert.strictEqual(expected, 'velociraptor')
    console.log(park.dinosaurCollection)
  });

  xit('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur1)
    const expected = park.particularSpecies(dinosaur.species)
    assert.strictEqual(expected, 't-rex')
  });

  it('should be able to calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur1)
    const expected = park.totalVisitors()
    assert.strictEqual(expected, 150)
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur1)
    const expected = park.totalVisitorsPerYear()
    assert.strictEqual(expected, 54750)
});

  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaur(dinosaur)
    park.addDinosaur(dinosaur1)
    const expected = park.totalRevenuePerYear()
    assert.strictEqual(expected, 1642500)
});

});
