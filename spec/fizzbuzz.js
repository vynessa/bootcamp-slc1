var fizzBuzz = require('../src/library.js').fizzBuzz;

describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it("should return `Buzz` for number divisible by 55", function() {
    expect(fizzBuzz(55)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 120", function() {
    expect(fizzBuzz(120)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(fizzBuzz(63)).toBe('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(101)).toBe(101);
  });

  it("should return 19 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(19)).toBe(19);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(fizzBuzz(1111)).toBe(1111);
  });

});