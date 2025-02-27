const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });
});

describe("constructor sets command type", function() {

  it("constructor should set a commandType property in new object" ,function() {
    let testObject = new Command('move', 1);
    expect(testObject.commandType).toBe('move');
  });
});

describe("constructor sets a value passed in as the 2nd argument", function() {

  it("constructor should set a value property in new objects", function() {
    let testObject = new Command('move', 1);
    expect(testObject.value).toBe(1);
  });
});
