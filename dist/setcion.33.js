"use strict";
class Player33 {
    constructor(name) {
        this.name = name;
    }
    ;
    attack() {
        console.log("Iam Attack Noa");
    }
}
class atlentesPepole extends Player33 {
    constructor(name, spears) {
        super(name);
        this.spears = spears;
    }
    attack() {
        super.attack();
        console.log("Attacking With Spear");
        this.spears -= 1;
    }
}
class kryptonPepole extends Player33 {
    constructor(name, laszerEai) {
        super(name);
        this.laszerEai = laszerEai;
    }
    attack() {
        super.attack();
        console.log("Attacking With superMane");
        this.laszerEai -= 1;
    }
}
class gotham extends Player33 {
    constructor(name, gan) {
        super(name);
        this.gan = gan;
    }
    attack() {
        super.attack();
        console.log("Attacking With batMane");
        this.gan -= 1;
    }
}
let solgerkr1 = new kryptonPepole("SuperMane", 100);
console.log(solgerkr1.name);
solgerkr1.attack();
console.log(solgerkr1.laszerEai);
let solgerat1 = new atlentesPepole("Aqweane", 100);
console.log(solgerat1.name);
solgerat1.attack();
console.log(solgerat1.spears);
let solgergh1 = new gotham("BatMane", 100);
console.log(solgergh1.name);
solgergh1.attack();
console.log(solgergh1.gan);
//# sourceMappingURL=setcion.33.js.map