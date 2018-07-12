var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = '9'; 
// The myString variable was assigned as a string. It can not be assigned to a number.

//////////////////////////////////////////////////////

function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 console.log(sayHello('9')); 
 // The name argument was set as a string. A number can not be passed for it.

 //////////////////////////////////////////////////////

function fullName(firstName: string, lastName: string, middleName = ''){
   let fullName = `${firstName} ${middleName} ${lastName}`;
   return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones"));
// A ? behind an argument means it is an optional  or use "=" instead of ":" and set it to empty string ""

//////////////////////////////////////////////////////

interface Student {
   firstName: string;
   lastName: string;
   belts: number;
}
function graduate(ninja: Student){
   return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
   firstName: "Christine",
   lastName: "Yang",
   belts: 2
}
const jay = {
   firstName: "Jay",
   lastName: "Patel",
   belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));
// Jay was missing an 's' to match the interface Student

//////////////////////////////////////////////////////

class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string)
       {
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 const shane = new Ninja('dan','brown');
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
 }
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 console.log(study(turing));
 // To create a Ninja, you needed "new" keyword and 2 arguments.
 // "turing" is not of the class Ninja. 

 //////////////////////////////////////////////////////

 var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => {return x * x}; // Needed (), not {}
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x,y) => {x * y}; // Needs () around arguments if there is more than 1 
// Nor is this working:
var math = (x, y) => {let sum = x + y;
   let product = x * y;
   let difference = Math.abs(x-y);
   return [sum, product, difference];
}
// Needed {} around the function

//////////////////////////////////////////////////////

class Elephant {
    constructor(public age: number){}
    birthday = () => {
       this.age++;
    }
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
 
