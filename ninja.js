class Ninja {
    constructor(name, health, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(`${this.name}`);
    }

    showStats() {
        console.log(`Stats for ${this.name}:`);
        console.log(`health = ${this.health}`);
        console.log(`speed = ${this.speed}`);
        console.log(`strength = ${this.strength}`);
    }

    drinkSake() {
        this.health += 10;
        //console.log(`health is now ${this.health}`);
    }
}

class Sensei extends Ninja {
    constructor(name, wisdom=10) {
        super(name, 200, 10, 10);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        this.drinkSake();
        console.log('What one programmer can do in one month, two programmers can do in two months.');
    }
}

const ninja1 = new Ninja("Hyabusa", 100);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

const superSensei = new Sensei("Master Splinter");
superSensei.showStats();
superSensei.speakWisdom();
superSensei.showStats();
