class Player {
    constructor(name, atk, health) {
        this.name = name;
        this.atk = atk;
        this.healt = health;
    }
    choiceTarget() {
         let choice = parseInt(prompt('choose your target [Look your JS console !]'));
    }
}

class Monster {
    constructor(name,atk, health) {
        this.name = name;
        this.atk = atk;
        this.health = health;
    }
    atkPlayer() {
        Player.healt -= this.atk;
        alert(this.name + 'causes ' + this.atk + ' of damage');
        alert('You still have ' + Player.health + ' of health');
    }
}

function newGame() {
    let youName = prompt('Choose your character name');
    let you = new Player(youName, 50, 30);
    let monster = new Monster('troll', 25, 30);
    return alert('Welcome' + ' ' + you.name + ' ' + 'you start with ' + you.atk + ' ' + 'and ' + you.healt + ' of healt');
}
newGame();
