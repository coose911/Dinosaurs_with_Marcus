const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park
  beforeEach(function () {
    park = new Park ('M&D', 30)
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
    const dinosaur = new Dinosaur ('t-rex', 'carnivore', 50)
    const actual = park.addDinosaur(dinosaur);
    console.log(park.dinosaurCollection)
    assert.deepStrictEqual(park.dinosaurCollection, [dinosaur]);
  });


  it('should be able to remove a dinosaur from its collection', function(){
    const dinosaur = new Dinosaur ('t-rex', 'carnivore', 50)
    park.addDinosaur(dinosaur)
    const expected = []
    park.removeDinosaur();

    const actual = park.dinosaurCollection
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
