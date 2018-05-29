//import
var roleHarvester = require('./role.harvester');
var roleUpgrader = require('./role.upgrader');
var roleBuilder = require('./role.builder');
var managementModule = require('./management');
var defenseModule = require('./defense');
var constants = require('./constants');

var _ = require("lodash");

module.exports.loop = function () {    
    managementModule.cleanmemories();
    
    defenseModule.manage();

    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == constants.ROLE_HARVESTER);
    var builders = _.filter(Game.creeps, (creep) => creep.memory.role == constants.ROLE_BUILDER);
    var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == constants.ROLE_UPGRADER);

    console.log('Harvesters: ' + harvesters.length + ' - Builders: ' + builders.length + ' - Upgraders: ' + upgraders.length);

    if(harvesters.length < 2) {
        roleHarvester.create();
    }

    if(builders.length < 1) {
        roleBuilder.create();
    }

    if(upgraders.length < 1) {
        roleUpgrader.create();
    }

    
    managementModule.showSpawningMessage();
    managementModule.executeCreepProcess();
}