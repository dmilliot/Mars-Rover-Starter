const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

  it("constructor sets position and default values for mode and generatorWatts.", function() {
    let testRover = new Rover()
    expect(testRover.mode).toBe('NORMAL');
    expect(testRover.generatorWatts).toBe(110);
  });

  it('response returned by receiveMessage contains the name of the message', function() {
    let testRover = new Rover();
    let testMessage = {name: 'Test Message', commands:[],};
    let response = testRover.receiveMessage(testMessage);
    expect(response.message).toBe('Test Message');
  });

  it('response returned by the receiveMessage includes two results if two commands are sent in the message', function() {
    let testRover = new Rover(0);
    let testMessage = {name: 'Test Message', commands: [{}, {}]};
    let response = testRover.receiveMessage(testMessage);
    expect(response.results).toHaveLength(2);
  });

  it('responds correctly to the status check command', function() {
    let testRover = new Rover(0);
    let testMessage = {name: 'Test Message', commands: [{commandType: 'STATUS_CHECK'}]};
    let response = testRover.receiveMessage(testMessage);
    expect(response.results[0].roverStatus).toEqual({mode: 'NORMAL', generatorWatts: 110, position: 0});
  });

  it('responds correctly to the mode change command', function() {
    let testRover = new Rover(0);
    let testMessage = {name: 'Test Message', commands: [{commandType: 'MODE_CHANGE', value: 'LOW_POWER'}]};
    testRover.receiveMessage(testMessage);
    expect(testRover.mode).toBe('LOW_POWER');
  })

  it('responds with a false completed value when attempting to move in LOW_POWER mode', function() {
    let testRover = new Rover(0);
    testRover.mode = 'LOW_POWER';
    let testMessage = {name: 'Test Message', commands: [{commandType: 'MOVE', value: 5}]};
    let response = testRover.receiveMessage(testMessage);
    expect(response.results[0].completed).toBe(false);
  });

  it('responds with the position for the move command', function() {
    let testRover = new Rover(0);
    let testMessage = {name: 'Test Message', commands: [{commandType: 'MOVE', value: 5}]};
    testRover.receiveMessage(testMessage);
    expect(testRover.position).toBe(5);
  });

  });