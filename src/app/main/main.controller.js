'use strict';

class MainCtrl {
  constructor($scope) {
    $scope.tabs = [{
      title: 'Other',
      buildings: [{
        title: 'Town Hall',
        name: 'TownHall',
        currentLevel: 1,
        maxLevel: 10
      }, {
        title: 'Clan Castle',
        name: 'ClanCastle',
        currentLevel: 1,
        maxLevel: 6
      }, {
        title: 'Builder\'s Hut',
        name: 'BuilderHut',
        currentLevel: 1,
        maxLevel: 1
      }]
    }, {
      title: 'Army',
      buildings: [{
        title: 'Army Camp',
        name: 'ArmyCamp',
        currentLevel: 1,
        maxLevel: 8
      }, {
        title: 'Barracks',
        name: 'Barracks',
        currentLevel: 1,
        maxLevel: 10
      }, {
        title: 'Dark Barracks',
        name: 'DarkBarracks',
        currentLevel: 1,
        maxLevel: 6
      }, {
        title: 'Laboratory',
        name: 'Laboratory',
        currentLevel: 1,
        maxLevel: 8
      }, {
        title: 'Spell Factory',
        name: 'SpellFactory',
        currentLevel: 1,
        maxLevel: 5
      }, {
        title: 'Barbarian King Altar',
        name: 'BarbarianKingAltar',
        currentLevel: 1,
        maxLevel: 1
      }, {
        title: 'Archer Queen Altar',
        name: 'ArcherQueenAltar',
        currentLevel: 1,
        maxLevel: 1
      }, ]
    }, {
      title: 'Resource',
      buildings: [{
        title: 'Gold Mine',
        name: 'GoldMine',
        currentLevel: 1,
        maxLevel: 12
      }, {
        title: 'Elixir Collector',
        name: 'ElixirCollector',
        currentLevel: 1,
        maxLevel: 12
      }, {
        title: 'Dark Elixir Drill',
        name: 'DarkElixirDrill',
        currentLevel: 1,
        maxLevel: 6
      }, {
        title: 'Gold Storage',
        name: 'GoldStorage',
        currentLevel: 1,
        maxLevel: 11
      }, {
        title: 'Elixir Storage',
        name: 'ElixirStorage',
        currentLevel: 1,
        maxLevel: 11
      }, {
        title: 'Dark Elixir Storage',
        name: 'DarkElixirStorage',
        currentLevel: 1,
        maxLevel: 6
      }, ]
    }, {
      title: 'Defensive',
      buildings: [{
        title: 'Cannon',
        name: 'Cannon',
        currentLevel: 1,
        maxLevel: 13
      }, {
        title: 'Archer Tower',
        name: 'ArcherTower',
        currentLevel: 1,
        maxLevel: 13
      }, {
        title: 'Mortar',
        name: 'Mortar',
        currentLevel: 1,
        maxLevel: 8
      }, {
        title: 'Air Defence',
        name: 'AirDefence',
        currentLevel: 1,
        maxLevel: 8
      }, {
        title: 'Wizard Tower',
        name: 'WizardTower',
        currentLevel: 1,
        maxLevel: 8
      }, {
        title: 'Air Sweeper',
        name: 'AirSweeper',
        currentLevel: 1,
        maxLevel: 6
      }, {
        title: 'Hidden Tesla',
        name: 'HiddenTesla',
        currentLevel: 1,
        maxLevel: 8
      }, {
        title: 'X-Bow',
        name: 'X-Bow',
        currentLevel: 1,
        maxLevel: 4
      }, {
        title: 'Inferno Tower',
        name: 'InfernoTower',
        currentLevel: 1,
        maxLevel: 3
      }]
    }, {
      title: 'Traps',
      buildings: [{
        title: 'Bomb',
        name: 'Bomb',
        currentLevel: 1,
        maxLevel: 6
      }, {
        title: 'Spring Trap',
        name: 'SpringTrap',
        currentLevel: 1,
        maxLevel: 1
      }, {
        title: 'Giant Bomb',
        name: 'GiantBomb',
        currentLevel: 1,
        maxLevel: 4
      }, {
        title: 'Air Bomb',
        name: 'AirBomb',
        currentLevel: 1,
        maxLevel: 4
      }, {
        title: 'Seeking Air Mine',
        name: 'SeekingAirMine',
        currentLevel: 1,
        maxLevel: 3
      }, {
        title: 'Skeleton Trap',
        name: 'SkeletonTrap',
        currentLevel: 1,
        maxLevel: 3
      }]
    }, {
      title: 'Walls',
      buildings: [{
        title: 'Wall',
        name: 'Wall',
        currentLevel: 1,
        maxLevel: 11
      }]
    }];

    this.incrementLevel = building => {
      if (building.currentLevel < building.maxLevel) {
        building.currentLevel++;
      }
    };

    this.decrementLevel = building => {
      if (building.currentLevel > 0) {
        building.currentLevel--;
      }
    };
  }

}

MainCtrl.$inject = ['$scope'];

export default MainCtrl;