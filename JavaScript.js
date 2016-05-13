//Code Acadmey
//-----------------------
//"Paul"
//"Paul".length // Length of your name
//3+4 // adding numbers
//10 * 2 // Multiple
//10/2 // Divide

// // Javascript comments like this! FREAKING AWESOME!

/*
What can we use JavaScript for?
 	make websites respond to user interaction
 	build apps and games (e.g. blackjack)
 	access information on the Internet (e.g. find out the top trending words on Twitter by topic)
 	organize and present data (e.g. automate spreadsheet work; data visualization)


confirm("I feel awesome); // Letting the user confirm things.

Prompt, asks user questions and for their input

console.log() // Whatever is in the parenthese will log to console.

Data types

strings (e.g. "dogs go woof!")
numbers (e.g. 4, 10)
booleans (e.g. false, 5 > 4)

Manipulating numbers & strings

comparisons (e.g. >, <=)
modulo (e.g. %)
string length (e.g. "Emily".length;)
substrings (e.g. "hi".substring(0, 1);)

console.log( ) 
Prints into the console whatever we put in the parentheses.

var divideByThree = function (number) 
{
    var val = number / 3;
    console.log(val);
};

// On line 12, we call the function by name
// Here, it is called 'dividebythree'
// We tell the computer what the number input is (i.e. 6)
// The computer then runs the code inside the function!
divideByThree(6);

var = variable

Function is a function name () whatever you pass in this parameter, 
must be enter with correct data type;

Functions may have two parameters

return keyword = back value that comes out of the function

learned for loops, already know it, I'm good! 
for(var i= 1; i < 100; ++i )
{
	console.log(i);
}

=== is equal value and equal type
== equal value

arrays = var names = ["panda", "cookies", "butt", "zorthi", "pandalord"];

while loops

var bool = true;

while(bool)
{
	console.log("Blah me")
	bool = false;
}


var loopCond = false;
do
{
		console.log(" LOOPING YA'll " + loopCond)
};

while(loopCond);

// One thing I notice in Javascript, 

//var youHit = Math.floor(Math.random() * 2);

You can't just call youHit, you have to call the whole define variable;

var youHit = Math.floor(Math.random() * 2); // 0 = false and 1 = true;
var damageThisRound = Math.floor(Math.random() * 5 + 1); // damage between 1 and 5

If you call isNaN on something, it checks to see if that thing is not a number.

switch(color) 
{
  case 'red':
    console.log("Red's a good color!");
    break;
}

// It's pretty interesting that switch statements cases are string.

&&, || , !

-----Objects-----
var answer = 
{
    answer.name: "Blah",
    answer.age: 21
}

or 

var answer = new Object();
answer.name = "Blah";
answer.age = 21;

rectangle.setHeight = function (newHeight) // Method
{
  this.height = newHeight;
}; // everytime we call this function, we can change the height.

this = this game object

after creating method, use rectangle along with the setHeight to change height or width;

like rectangle.width(8);

var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() 
{
  return this.sideLength * 4;
};
// help us define an area method here
var p = square.calcPerimeter();
var a = square.calcArea();


Custom Constructor
function Person(name,age) 
{
  this.name = name;
  this.age = age;
}

var bob = new Person("Bob the Builder", 20);

function Rabbit(adjective) 
{
    this.adjective = adjective;
    this.describeMyself = function() 
    {
        console.log("I am a " + this.adjective + " rabbit");
    };
}

// now we can easily make all of our rabbits
var rabbit1 = new Rabbit("fluffy");
var rabbit2 = new Rabbit("happy");
var rabbit3 = new Rabbit("sleepy");

// Our person constructor
function Person (name, age) 
{
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new person("timmy", 6);
// add the last family member, "timmy", who is 6 years old

Passing Objects into functions 

Object constructor = var bob = new Object();
Literal constructor = var bob { bob.age: 22, bob.name: "bob"};


*/

//var country = "America";

//console.log(country.substring(0,3)); // Takes elements of the string you desire