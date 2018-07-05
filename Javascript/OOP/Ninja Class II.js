function Ninja(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function(){
        console.log(this.name);
        return this;
    }
    this.showStats = function(){
        console.log(this.name,strength,speed,this.health);
        return this;
    }
    this.drinkSake = function(){
        this.health += 10;
        return this;
    }
    this.punch = function (ninja) {
        ninja.health -= 10;
        console.log( this.name + ' punched ' + ninja.name + ', they lost 10 health.');
        return this;
    }
    this.kick = function (ninja) {
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

n1 = new Ninja('Dan');
n2 = new Ninja('Edward');
n3 = new Ninja('Jacob');

n1.drinkSake().showStats().sayName();
n2.showStats();
n1.kick(n3);
n3.showStats();
