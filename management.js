var constants = require('./constants');

var management = {

    /** @description Cleaning creep memories */
    cleanmemories: function() {

        for(var name in Memory.creeps) {
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
                console.log('Clearing non-existing creep memory:', name);
            }
        }        
    },
    showSpawningMessage: function() {
        if(Game.spawns[constants.SPAWN1_NAME].spawning) {
            var spawningCreep = Game.creeps[Game.spawns[constants.SPAWN1_NAME].spawning.name];
            Game.spawns[constants.SPAWN1_NAME].room.visual.text(
                'Building... ' + spawningCreep.memory.role,
                Game.spawns[constants.SPAWN1_NAME].pos.x + 1,
                Game.spawns[constants.SPAWN1_NAME].pos.y,
                {align: 'left', opacity: 0.8});
        }
    },
    executeCreepProcess: function() {
        for(var name in Game.creeps) {
            var creep = Game.creeps[name];
            if(creep.memory.role == constants.ROLE_HARVESTER) {
                roleHarvester.run(creep);
            }
            if(creep.memory.role == constants.ROLE_UPGRADER) {
                roleUpgrader.run(creep);
            }
            if(creep.memory.role == constants.ROLE_BUILDER) {
                roleBuilder.run(creep);
            }
        }
    }

};

module.exports = management;