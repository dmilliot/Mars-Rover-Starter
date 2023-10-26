class Rover {
   constructor(position, generatorWatts = 110) {
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = generatorWatts;
   }

   receiveMessage(message) {
      let output = {};
      let commandResult = [];
      for(const command of message.commands) {
         let result = {};
         if(command.commandType === 'MOVE') {
            if(this.mode === 'LOW_POWER') {
               result.completed = false;
               result.message = `Cannot move in ${this.mode} mode`;
            } else {
               this.position = command.value;
               result.completed = true;
            }
         } else if(command.commandType === 'STATUS_CHECK') {
               result.completed = true,
               result.roverStatus = {
                  mode: this.mode,
                  generatorWatts: this.generatorWatts,
                  position: this.position,
               };
         } else if(command.commandType === 'MODE_CHANGE') {
            this.mode = command.value;
            result.completed = true;
         }
         commandResult.push(result);
      }
      output.message = message.name;
      output.results = commandResult;
      return output;
   }
}

module.exports = Rover;