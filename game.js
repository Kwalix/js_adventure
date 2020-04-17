class Player {
    constructor (name, atk, health) {
        this.name = name;
        this.atk = atk;
        this.health = health;
    }
}

class Monster {
    constructor (name, atk, health) {
        this.name = name;
        this.atk = atk;
        this.health = health;
    }
}

function newGame () {
    let youName = prompt('Choose your character name');
    const you = new Player(youName, 50, 50);
    const monster = new Monster('troll', 25, 100);
    alert('Welcome' + ' ' + you.name + ' ' + 'you start with ' + you.atk + ' ' + 'and ' + you.health + ' of health');
    alert('Oh !\n a monster has just appeared in front of you !');
    alert('You have to face it');
    while (monster.health > 0) {
        let choice = parseInt(prompt('What do you want to do ?\n 1: Attack him\n 2: increase your attack of 5'));
        switch (choice) {
            case 1:
                alert('You attack the ' + monster.name);
                monster.health -= you.atk;
                alert('You have inflicted ' + you.atk + ' on ' + monster.name);
                break;
            case 2:
                you.atk += 5;
                alert('you increased your power\n your power: ' + you.atk);
                break;
            default:
                alert('you have chosen nothing, the ' + monster.name + ' attacks you');
                you.health -= monster.atk;
                alert(monster.name + ' inflict you ' + monster.atk + ' of damage');
        }
        // Monster attack you after attacked him
        alert(monster.name + ' attack you');
        you.health -= monster.atk;
        alert(monster.name + ' inflict you ' + monster.atk + ' of damage');
        // if your life drops to 0
        if (you.health <= 0) {
            alert('Game Over\n your life fell to 0');
            break;
        } else if (monster.health <= 0) {
            alert('GG, you defeated the troll ^^');
            break;
        }
    }
    if (window.confirm('play again ?')) {
        newGame();
    }
    alert('Thanks for playing: p\n Developed by kwalix <3');
    return "thx for playing";
}
