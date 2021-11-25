class Team {
  constructor() {
    this.team = [];
  }

  agregateValidation(character, cb) {
    if (this.team.length >= 6) {
      alert("Team is already full");
      return;
    }
    if (!this._validateAligment(character)) {
      return;
    }
    cb();
  }

  _validateAligment(character) {
    const char = this.team.filter(
      e => e.biography.alignment === character.biography.alignment
    );
    if (char.length >= 3) {
      alert(
        `Already has 3 characters with ${character.biography.alignment} alignment`
      );
      return false;
    }
    return true;
  }

  isOn(character) {
    const chars = this.team.filter(e => e === character);
    if (chars.length) {
      return true;
    }
    return false;
  }
  _getMainAttribute(stats = {}) {
    const sortable = Object.fromEntries(
      Object.entries(stats)
        .sort(([, a], [, b]) => a - b)
        .reverse()
    );
    return Object.keys(sortable)[0];
  }

  getTeamAverage(team) {
    let height = 0;
    let weight = 0;
    let intelligence = 0;
    let strength = 0;
    let speed = 0;
    let durability = 0;
    let power = 0;
    let combat = 0;

    team.forEach(element => {
      height +=
        parseInt(element.appearance.height[1].match(/\d+/)[0]) / team.length;
      weight +=
        parseInt(element.appearance.weight[1].match(/\d+/)[0]) / team.length;
      intelligence += parseInt(element.powerstats.intelligence) / team.length;
      strength += parseInt(element.powerstats.strength) / team.length;
      speed += parseInt(element.powerstats.speed) / team.length;
      durability += parseInt(element.powerstats.durability) / team.length;
      power += parseInt(element.powerstats.power) / team.length;
      combat += parseInt(element.powerstats.combat) / team.length;
    });

    const powerstats = {
      intelligence: Math.trunc(intelligence),
      strength: Math.trunc(strength),
      speed: Math.trunc(speed),
      durability: Math.trunc(durability),
      power: Math.trunc(power),
      combat: Math.trunc(combat),
    };

    return {
      height: Math.trunc(height),
      weight: Math.trunc(weight),
      powerstats,
      mainAttribute: this._getMainAttribute(powerstats),
    };
  }
}

export default new Team();
