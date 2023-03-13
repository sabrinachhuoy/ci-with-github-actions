const chai = require("chai");
const expect = chai.expect;
const asserttype = require('chai-asserttype');
chai.use(asserttype);


const assert = require("assert");


var Calculator = require("../Calculator");
var calc = new Calculator();

describe("Calculator Tests",function(){
 
  it("add: Adds 1 and 2",function(){
    expect(calc.add(1)).to.be.equal(1);
  });

   it("Add Allows no parameters",function(){
   expect(calc.add()).to.be.equal(0);
 });

  it("Add turns strings to zeros",function(){
   expect(calc.add("frog","toad")).to.be.number();
 });


  it("subtract: Six - Three",function(){
    expect(calc.subtract(6,3)).to.be.equal(3);
  });

  it("multiply: Three times Seven",function(){
    expect(calc.multiply(7,3)).to.be.equal(21);
  });

  it("divide: Four divided Two",function(){
    expect(calc.divide(4,2)).to.be.equal(2);
  });

});


