class Player {
    constructor(name, atk, health) {
        this.name = name;
        this.atk = atk;
        this.health = health;
    }
}

class Monster {
    constructor(name,atk, health) {
        this.name = name;
        this.atk = atk;
        this.health = health;
    }
}

function newGame() {
    let youName = prompt('Choose your character name');
    const you = new Player(youName, 50, 50);
    const monster = new Monster('troll', 25, 100);
    alert('Welcome' + ' ' + you.name + ' ' + 'you start with ' + you.atk + ' ' + 'and ' + you.health + ' of health');
    alert('Oh !\n a monster has just appeared in front of you !');
    alert('You have to face it');
    while (monster.health > 0) {
        let choice = parseInt(prompt('What do you want to do ?\n 1: Attack him\n 2: Run Away (experimental)'));
        switch (choice) {
            case 1:
                if (isNaN(choice)) {
                    console.error('You must enter a number :(');
                    return false;
                } else {
                    alert('You attack the ' + monster.name);
                    monster.health -= you.atk;
                    alert('You have inflicted ' + you.atk + ' on ' + monster.name);
                }
                break;
            case 2:
                continue;
            default:
                alert('you have chosen nothing, the ' + monster.name + ' attacks you');
                you.health -= monster.atk;
                alert(monster.name + ' inflict you ' + monster.atk + ' of damage');
        }
        if (you.health <= 0) {
            alert('Game Over\n your life fell to 0');
            break;
        } else if (monster.health <= 0) {
            alert('GG, you defeated the troll ^^');
            break;
        }
    }
    alert('Thanks for playing: p\n Developed by kwalix <3');
    return "thx for playing";
}
