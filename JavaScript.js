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

new constructor is var nameName = new Book(pages, author);

function Circle (radius) 
{
    this.radius = radius;
    this.area = function () 
    {
        return Math.PI * this.radius * this.radius;
        
    };
    // define a perimeter method here
    this.perimeter = function()
    {
        return 2 * Math.PI * this.radius;
    };
};


var bob = 
{
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-777",
    email: "bob.jones@example.com"
};

console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.email); // default constructor, can call bob with all properties 

var contacts = [bob, mary];
console.log(mary.phoneNumber);

var printPerson = function (person)
{
    console.log(person.firstName + " " + person.lastName);
}

 printPerson(contacts[0]);
 printPerson(contacts[1]);
 
 Forgot you could just do
 
var contacts = [bob, mary];

function printPerson(person) 
{
    console.log(person.firstName + " " + person.lastName);
}

function list() 
{
	var contactsLength = contacts.length;
	
	for (var i = 0; i < contactsLength; i++) 
	{
		printPerson(contacts[i]);
	}
}

function search(lastName)
{
    var contactsLength = contacts.length;
    
    for (var i = 0; i < contactsLength; i++) 
	{
		if(contacts[i].lastName === lastName)
		{
		    console.log(printPerson(contacts[i]));
		}
	}
}

function add(firstName, lastName, email, phoneNumber)
{
    contacts[contacts.length] = 
    {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    }
}

console.log(add("paul", "chu", "lordbabypanda@gmail.com", "337-326-3173"));
console.log(list());

////constructor notation.

function Person(job, married, speak) 
{
    this.job = job;
    this.married = married;
    this.speak = function()
    {
        console.log("Hello!");
    };
    // add a "speak" method to Person!
}

////literal notation

var bob ()
{
    var james = 
{
    job: "programmer",
    married: false,
    speak: function(mood) 
    {
        console.log("Hello, I am feeling " + mood);
    }
};

james.speak("great");
james.speak("just okay");
}

var james = 
{
    job: "programmer",
    married: false,
    sayJob: function() 
    {
        // complete this method
        console.log("Hi, I work as a " + this.job)
    }
};

// james' first job

james.sayJob();

// change james' job to "super programmer" here
james.job = "super programmer"

// james' second job
james.sayJob();


var james = 
{
    job: "programmer", // first proptrey
    married: false
};

// set to the first property name of "james"
var aProperty = "job"; // James's job

// print the value of the first property of "james" 
// using the variable "aProperty"
console.log(james[aProperty]);




*/

