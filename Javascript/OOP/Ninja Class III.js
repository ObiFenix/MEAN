class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
        sayName(){
            console.log(this.name);
            return this;
        }
        showStats(){
            console.log(this.name,this.strength,this.speed,this.health);
            return this;
        }
        drinkSake(){
            this.health += 10;
            return this;
        }
        punch (ninja) {
            ninja.health -= 10;
            console.log( this.name + ' punched ' + ninja.name + ', they lost 10 health.');
            return this;
        }
        kick (ninja) {
            if (ninja instanceof Ninja) {
                ninja.health -= 15;
                console.log( this.name + ' kicked ' + ninja.name + ', they lost 15 health.');
                return this;
            }
            else{
                return 'this is not another ninja!';
            }

        }
}

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.wisdom = 10;
    }
    showStats() {
        console.log(this.name,this.strength,this.speed,this.health,this.wisdom);
            return this;
      }
    speakWisdom(){
        super.drinkSake()
        console.log('This is a wise message.');
        return this
        
    }
    
}

n1 = new Ninja('Dan');
n2 = new Ninja('Edward');
n3 = new Ninja('Jacob');
s1 = new Sensei('Elizabeth')

n1.drinkSake().showStats().sayName();
n2.showStats();
n1.kick(s1);
n3.showStats();
s1.showStats()
s1.speakWisdom().showStats()
