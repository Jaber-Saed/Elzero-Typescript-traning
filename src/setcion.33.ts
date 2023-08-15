/* 
    class 
    Polymorphism & Method Override
    */
//herors expale to Override th attack methode

class Player33 {
    constructor (public name: string) {} ;
    attack(): void {
        console.log("Iam Attack Noa")
    }
}

// to inherit thinks from super Class i will use 'super' key word
class atlentesPepole extends Player33 {
    constructor (name: string, public spears: number){
        super(name);
    }
    override attack(): void {
        super.attack();
        console.log("Attacking With Spear");
        this.spears -= 1;
    }
}

class kryptonPepole extends Player33 {
    constructor (name: string, public laszerEai: number){
        super(name);
    }
    override attack(): void {
        super.attack();
        console.log("Attacking With superMane");
        this.laszerEai -= 1;
    }
}

class gotham extends Player33 {
    constructor (name: string, public gan: number){
        super(name);
    }
    override attack(): void {
        super.attack();
        console.log("Attacking With batMane");
        this.gan -= 1;
    }
}

let solgerkr1 = new kryptonPepole ("SuperMane", 100);
console.log(solgerkr1.name)
solgerkr1.attack()
console.log(solgerkr1.laszerEai)

let solgerat1 = new atlentesPepole ("Aqweane", 100);
console.log(solgerat1.name)
solgerat1.attack()
console.log(solgerat1.spears)

let solgergh1 = new gotham ("BatMane", 100);
console.log(solgergh1.name)
solgergh1.attack()
console.log(solgergh1.gan)