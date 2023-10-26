class Message {
   constructor(name, commands) {
      this.name = name;
         if (this.name === undefined) {
            throw Error("Message name required.");
   }
      this.commands = commands;
}
}

// let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATS_CHECK')];
// let message = new Message('Test message with two commands', commands);
module.exports = Message;