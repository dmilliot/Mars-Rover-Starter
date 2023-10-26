const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {

    it("throws error if a name is NOT passed into the constructor as the first parameter.", function() {
        expect( function() {new Message();}).toThrow(new Error("Message name required."));
        });

    it('should set name property in a new message object', function() {
        let testObject = new Message("Greetings");
        expect(testObject.name).toBe("Greetings");
        })

    it('should contain a command array passed in as 2nd argument.', function() {
        let commands = ['Move', 'Stop', 'Flip'];
        let testObject = new Message("Greetings", commands);
        expect(testObject.commands).toBe(commands);
    })
});
