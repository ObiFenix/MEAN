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
}

n1 = new Ninja('Dan');
n2 = new Ninja('Edward');
n3 = new Ninja('Jacob');

n1.drinkSake().showStats().sayName();
n2.showStats();
