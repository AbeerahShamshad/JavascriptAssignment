///////////////Chapter no 1///////////////
//Question no 1 
var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
    greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
    greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
    greet = 'Good Evening';
alert(greet);

//Question no 2
alert("Error!Please enter a valid password");

//Question no 3

alert("Welcome to JS Land...\nHappy Coding!");


//Question no 4
alert("Welcome to JS land...");



//Question no 5
console.log("Hello...I can run JS through my web browser's console");



///////////////Chapter no 2///////////////

//question1
var usernme;
//question2
var myname = "Abeerah Shamshad";
//question3
var message = "Hello World";
//question4
var age = "18";
var master = "Web developer";
alert(message);
alert(myname);
alert(age);
alert(master);

//question5
for (var a = 5; a >= 1; a--) {
    for (var b = 1; b <= a; b++) {
        if (b == 1) {
            document.write("P");
        } else if (b == 2) {
            document.write("I");
        } else if (b == 3) {
            document.write("Z");
        } else if (b == 4) {
            document.write("Z");
        } else if (b == 5) {
            document.write("A");
        }
    }
    document.write("<br>");
}



//Question 6
var email = "abeerahshamsahd@gmail.com";
alert("My email address is: " + email);

//Question 7
var book = "A smarter way to learn JavaScript";
alert(book);

//Question 8
document.write("Yah! I can write HTML through Javascript");

//Question 9
var a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(a);




///////////////Chapter no 3///////////////
//1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = 20;
alert("I am " + age + " years old");

//2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
var visitor = 14;
alert("You have visited this site " + visitor + " times");

//3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthYear = 1999;
document.write("My birth year is " + birthYear);
document.write("<br>");
document.write("Data type of my declared variable is number");

//4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information: 
//a. Visitor’s name
//b. Product title 
//c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
alert("Welcome to www.xyzClothing.com");
var visitorName = prompt("Enter your name");
var ProductTitle = prompt("What do you want to order");
var Quantity = prompt("How many Products");
document.write("<br>");
document.write(visitorName + "ordered" + Quantity + ProductTitle + " on XYZ Clothing Store");


///////////////Chapter no 4///////////////
//question1
var a, b, c;

//question2
//legal
var a, b, c, d, e;
//illegal
// var 1n ame;
// var 49 var_a;
// var $nake #1;

// var ?snake;

// var ??hello;







//Question3

document.write("<br>");

document.write("“Rules for naming JS variables”");

document.write("<br>");

document.write("<br>");

document.write("Variable names can only contain numbers, $ and _ . For example $my_1stVariable");

document.write("<br>");

document.write("Variables must begin with a letter, $ or _. For example $name, _name or name");

document.write("<br>");

document.write("Variable names are case sensitive");

document.write("<br>");

document.write("Variable names should not be JS keywords");

document.write("<br>");




///////////////Chapter no 5///////////////
var v1 = prompt("Enter value 1st")
var v2 = prompt("Enter value 2nd")
var sign = prompt("Enter operation")
//Questionno1
if (sign === '+') {
    var ans = ((+v1) + (+v2));
    document.write("Sum of " + v1 + "and " + v2 + " is" + ans);

}
//Questionno2
else if (sign === '-') {
    var ans = (v1 - v2);
    document.write("Subtraction of " + v1 + "and " + v2 + " is" + ans);

} else if (sign === '*') {
    var ans = (v1 * v2);
    document.write("Multiplication of " + v1 + "and " + v2 + " is" + ans);

} else if (sign === '%') {
    var ans = (v1 % v2);
    document.write("Modulus of " + v1 + "and " + v2 + " is" + ans);

} else if (sign === '/') {
    var ans = (v1 / v2);
    document.write("Division of " + v1 + "and " + v2 + " is" + ans);

}
//Question3
var val1;
document.write("<br>");
document.write("Value of Variable is " + v1);
document.write("<br>");
var val2 = 5;
document.write("Initial Value is " + val2);
document.write("<br>");
val2++;
document.write("Value after increament is " + val2);
document.write("<br>");
val2 = (+val2) + 7;
document.write("Value afterr Addition is " + val2);
document.write("<br>");
val2--;
document.write("Value after dicreament is " + val2);
document.write("<br>");
val2 = val2 % 3;
document.write("The remainder is " + val2);

//Qustion 4
var price = 600;
var total = price * 5;
document.write("Total Cost Of 5 Tickets of a Movie is" + total);

//5. Write a script to display multiplication table of any number in your browser.
document.write("<br>");
document.write("Table of 4");
document.write("<br>");
document.write("4" + "x" + "1" + "=" + 4 * 1 + "<br>");
document.write("4" + "x" + "2" + "=" + 4 * 2 + "<br>");
document.write("4" + "x" + "3" + "=" + 4 * 3 + "<br>");
document.write("4" + "x" + "4" + "=" + 4 * 4 + "<br>");
document.write("4" + "x" + "5" + "=" + 4 * 5 + "<br>");
document.write("4" + "x" + "6" + "=" + 4 * 6 + "<br>");
document.write("4" + "x" + "7" + "=" + 4 * 7 + "<br>");
document.write("4" + "x" + "8" + "=" + 4 * 8 + "<br>");
document.write("4" + "x" + "9" + "=" + 4 * 9 + "<br>");
document.write("4" + "x" + "10" + "=" + 4 * 10 + "<br>");
document.write("<br>");
document.write("<br>");

//6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
//a. Store a Celsius temperature into a variable.
//b. Convert it to Fahrenheit & output “NNoC is NNoF”.
//c. Now store a Fahrenheit temperature into a variable.
//d. Convert it to Celsius & output “NNoF is NNoC”.
var Celsius = 25;
Celsius = (Fahrenheit - 32) * 5 / 9;
var Fahrenheit = 70;
Fahrenheit = (Celsius * 9 / 5) + 32;
document.write(Celsius);
document.write("<br>");
document.write(Fahrenheit);
document.write("<br>");

//Quesion 7
document.write("<H1>Shopping Cart</H1> </BR>");
document.write("<br>");
var item1 = 650;
var qitem1 = 3;
var item2 = 100;
var qitem2 = 7;
var shipping = 100;
var total = (item1 * qitem1) + (item2 * qitem2) + shipping;

document.write("Price of item 1 is " + item1);
document.write("<br>");
document.write("Ordered quantity of item 1 is " + qitem1);
document.write("<br>");
document.write("Price of item 2 is " + item2);
document.write("<br>");
document.write("Ordered quantity of item 2 is " + qitem2);
document.write("<br>");
document.write("Shipping Charges " + shipping);
document.write("<br>");
document.write("Total cost of your order is " + total);
document.write("<br>");



//Question 8
document.write("<H1>MarkSheet</H1> </BR>");
var tmarks = 980;
var mobtained = 804;
var percent = (804 / 980) * 100;
document.write("Total marks:" + tmarks);
document.write("</BR>");
document.write("Marks Obtainned:" + mobtained);
document.write("</BR>");
document.write("Percentage :" + percent);

//Question 9
var us = 10;
var saudi = 25;
var tus = us * 104.80;
var tsaudi = 25 * 28;
var total = ((+tus) + (+tsaudi));
document.write("<H1>Currency in PKR</H1> </BR>");
document.write("Total Currency in PKR :" + total);


//Question10
document.write("<br>");
var num1 = 10;
var num2 = (((num1 + 5) * 10) / 2);
document.write(num2);
document.write("<br>");

//Question11
document.write("<br>");
var currYear = 2020;
var birthYear = 1999;
var age = currYear - birthYear;
document.write("Current Year: " + currYear);
document.write("Birth Year: " + birthYear);
document.write("Your age is: " + age);
document.write("<br>");

//Question12
var rad = 20;
var circum = (2 * 3.142 * rad);
var area = (3.142 * (rad * rad));
document.write("<H1>the Geometrizer</H1> </BR>");
document.write("Radius of a circle:" + rad);
document.write("</BR>");
document.write("The Circumference is:" + circum);
document.write("</BR>");
document.write("The Area is :" + area);

//Qustion13
document.write("<br>");
document.write("<H1>The Lifetime Supply Calculator</H1>");
var snacks = "Chocolate Chips";
var currAge = 15;
var maxAge = 65;
var amount = 3;
var total1 = (maxAge - currAge) * amount;
document.write("Favourite Snacks: " + snacks);
document.write("<br>");
document.write("Current Age: " + currAge);
document.write("<br>");
document.write("Estimated Maximum Age: " + maxAge);
document.write("<br>");
document.write("Amount of Snacks per day: " + amount);
document.write("<br>");
document.write("You will need " + total1 + " chocolate chip to last you until the ripe old age of 65");
document.write("<br>");


///////////////////////chapter 6-9//////////////////////////
//question1
var a = 10;
document.write("Result :</BR>");
document.write(".....................</BR>");
document.write("The Value of ++a is:" + (++a) + "</BR>Now the value of a is:" + a + "</BR></BR>The Value of a++ is:" + (a++) + "</BR>Now the value of a is :" + a + "</BR></BR>The value of --a:" + (--a) + "</BR>Now the value of a is:" + a + "</BR></BR>The value of a-- is:" + (a--) + "</BR>Now the Value of a is:" + a);

//Question2
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write("--a");
document.write("</BR>");
document.write("--a - --b");
document.write("</BR>");
document.write("--a - --b + ++b");
document.write("</BR>");
document.write("--a - --b + ++b + b--");
document.write("</BR>");
document.write("a is " + a);
document.write("<BR/>b is " + b);
document.write("</BR>result is " + result);

//Question3
var name = prompt("Enter name");
document.write("</BR>WElcome" + name);

//Questtion4




//Questtion5
var num1 = prompt("Enter any number");
document.write("<br>");
for (var i = 1; i <= 10; i++) {
    if (num1 === "") {
        document.write("<br>" + 5 * i + "<br>");
    } else {
        document.write("<br>" + num1 * i + "<br>");
    }

}


//Questtion6
var total = 100;
var englishMarks = 54;


var mathsMarks = 54;
var urduMarks = 48;


var wholeTotal = total * 3;

var obtainedTotal = englishMarks + mathsMarks + urduMarks;


var percentage = (obtainedTotal / wholeTotal) * 100;

document.write("The percentage of yours is " + percentage);


////////////////////Chapter 9-11///////////////
//Question1
var city = prompt("Enter the name of the city ");

if (city === "Karachi") {

    alert("Welcome To The City of lights");
}

//question2
var gender = prompt("Enter your gender");

if (gender === "male") {
    alert("Welcome Sir");
}
if (gender === "female") {

    alert("Welcome Madam");
}



//question3
var color = prompt("Enter color of current Traffic");

if (color === "red") {
    alert("must Stop");
} else if (color === "yellow") {
    alert("Ready To Move")

} else if (color === "green") {
    alert("Ready to move");
}


//question4
var fuel = prompt("Enter the amount of the fuel");

if (fuel < 0.25) {
    alert("Please refuel");
}

//Question5

document.write("part a is true");
document.write("part b wont run because not true");
document.write("Part c Condition 2 is true");
document.write("part d The Cost is equal in part d");
document.write("part e is true");
document.write("part f is car is smaller than cat");

//Question6
var totalMarks = 300;
var marksObtained = +prompt("Enter the marks Obtained");
var percentage = (marksObtained / totalMarks) * 100


if (percentage >= 80) {
    document.write("You have A+ grade , Excellent Marks!");
} else if (percentage >= 70) {
    document.write("You have A grade , Good!");
} else if (percentage >= 60) {
    document.write("B Grade , You need to improve");

} else if (percentage < 60) {
    document.write("Fail, Sorry");
}

//Question7

var guessNumber = prompt("Enter the secret number range 1-10");

var guessIt = prompt("Enter the secret number range to guess it 1-10");

if (guessNumber === guessIt) {
    alert("Bingo, Correct Answer!");
} else if (guessNumber - guessIt === 1) {
    alert("You were almost close!");
}


//Question8

var b = prompt("Enter any number");

if (b % 3 == 0) {
    alert("The number is divisble by 3");
} else {
    alert("The number is not divisible by 3");
}


//Question9
var b = prompt("Enter any number");

if (b % 2 == 0) {
    alert("The number even Number");
} else {
    alert("The number odd number");
}

//Question10
var t = prompt("Enter temprature");

if (t > 40) {
    prompt("It is too hot outside.")
} else if (t > 30) {
    prompt("The Weather today is Normal.")
} else if (t > 20) {
    prompt("Today’s Weather is cool.")
} else if (t > 10) {
    prompt("Today’s weather is so Cool")
}


//Question11
var firstNumber = prompt("Enter the first Number");
var secondNumber = prompt("Enter the second Number");
var sign = prompt("Enter the operator");

if (sign === "+") {
    var total = firstNumber + secondNumber;
    document.write("<br>")
    document.write("The addition of 2 numbers is " + total);
} else if (sign === "-") {
    var total = firstNumber - secondNumber;
    document.write("<br>")
    document.write("The Subtraction of 2 numbers is " + total);
} else if (sign === "*") {
    var total = firstNumber * secondNumber;
    document.write("<br>")
    document.write("The Multiplication of 2 numbers is " + total);
} else if (sign === "/") {
    var total = firstNumber / secondNumber;
    document.write("<br>")
    document.write("The Divsion of 2 numbers is " + total);
} else if (sign === "%") {
    var total = firstNumber * secondNumber;
    document.write("<br>")
    document.write("The Modulus of 2 numbers is " + total);
}


/////////////////Chapter 12-13////////////////////
//Question1
var a = prompt("enter any kind of variable");

if (a >= "A" && a <= "Z") {
    document.write("The letter is Capital");

} else if (a >= "a" && a <= "z") {
    document.write("The letter is lowerCase");


} else {
    document.write("The variable is not string");
}

//Question2
var a = +prompt("Enter the value of A");
var B = +prompt("Enter the value of B");

if (a === b) {
    document.write("The two numbers are equal <br>");
} else if (a = b) {
    document.write("a is greater than b");
} else if (b > a) {
    document.write("b is greater than a");
}

//Question3
var a = +prompt("enter the number");

if (a < 0) {
    document.write("The number is in negative");
} else if (a === 0) {
    document.write("The number is equal to zero");
} else {
    document.write("The number is positive");
}

//Question4
var ch = prompt("Enter any character");

if (ch === "a") {
    document.write("The character is vowel");
} else if (ch === "e") {
    document.write("The character is vowel");
} else if (ch === "i") {
    document.write("The character is vowel");
} else if (ch === "o") {
    document.write("The character is vowel");
} else if (ch === "u") {
    document.write("The character is vowel");
} else {
    document.write("The character is not vowel");
}

//Question5
var password = prompt("Enter your passowrd");

var verifyPassword = prompt("Re-enter your passowrd");

if (password === verifyPassword) {
    alert("The password is character");
} else {
    alert("The password is not character, re-enter please!");
}

//Question6
var greeting;
var hour = 13;
if (hour <= 13) {


    greeting = "Good day";
    document.write(greeting)
} else {

    greeting = "Good evening";

}

//Question7
var time = +prompt("Enter time in whole numbers 24 hours");

if (time >= 00 && time < 12) {
    document.write("Good Morning!");
} else if (time >= 12 && time < 17) {
    document.write("Good Evening!");
} else if (time >= 12 && time < 17) {
    document.write("Good Afternoon!");
} else if (time >= 17 && time < 21) {
    document.write("Good Evening!");
} else {
    document.write("Good Night!");
}


/////////////////Chapter 14-16/////////////////////
var list = [];
var arrayB = new Array();

list = ["Tabah", "Abeerah", "Sharique"];

var numbers = [1, 3, 4, 5, 6];

var bolArr = [true, false];

var mixedArray = ["Abeerah", 0.46, true, "Sharique", 5];

var qualifications = ["school", "college", "gradutaion", "job"];

for (var i = 0; i < 4; i++) {
    document.write(qualification[i] + "<br>");
}

/* qualifcations printing in array */
var qualifications = ["SSC", "HSC", "BCS", "BS", "B.COM", "MS", "M.PHILL", "PHD"];

var b = 5;

for (var i = 0; i < 8; i++) {
    document.write(i + (1) + " " + qualifications[i] + "<br>");
}

/* calculating scores through array */
var names = ["Tabah", "Abeerah", "Sharique"];

var marks = [320, 230, 480];

for (var i = 0; i < 3; i++) {
    var percentage = [(marks[i] / 500) * 100, (marks[i] / 500) * 100, (marks[i] / 500) * 100];
}

for (var i = 0; i < 3; i++) {

    document.write("Score of " + names[i] + " is " + marks[i] + ". Percentage: " + percentage[i] + "<br>");
}

/* colors from array */
var colors = ["yellow", "green", "blue"];

var askColor = prompt("what color do you want to add in the beginning");

colors.unshift(askColor);


var addAtEnd = prompt("What color do you want to insert at the end of Array");

colors.push(addAtEnd);


colors.push("black", "dark Blue");


colors.shift();

for (var i = 0; i < colors.length; i++) {
    document.write(" " + colors[i] + "<br>");
}


/* cities list */

var city = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

city.slice(2, 4);



/* Joining Arrays */

var arr = ["This", "is", "my", "cat"];

var newArr = arr.join();

document.write(newArr);


////////////Chapter 17-20/////////////////////
for (var i = 1; i < 11; i++) {
    document.write(i + "<br>");
}

/* table of length */

var a = +prompt("enter the table");

var length = +prompt("Enter the length of the table");


var total;
for (var i = 1; i <= length; i++) {

    total = a * i;

    document.write(a + "x" + i + "=" + total + "<br>");

}


/* frutis of array through loop */
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

/*   counting */

for (var i = 0; i < 5; i++) {
    document.write(fruits[i] + "<br>");
}


/*  backward counting */

for (var i = 10; i >= 1; i--) {
    document.write(i + "<br>");
}

/*  even counting */



for (var i = 1; i <= 20; i++) {

    if (i % 2 == 0) {
        document.write(i + "<br>");

    }



}

/*  Odd counting */



for (var i = 1; i <= 20; i++) {

    if (i % 2 == 1) {
        document.write(i + "<br>");

    }



}

/* series counting */


for (var i = 1; i <= 20; i++) {

    if (i % 2 == 0) {
        document.write(i + "k<br>");

    }



}

/* finding element in the array */
var A = ["cake", "apple Pie", "cookie", "chips", "patties"];


var search = prompt("Ënter the element you want to search")

for (var i = 0; i < 5; i++) {


    if (A[i] === search) {
        document.write("The element is in the array");
        break;
    } else {
        document.write("Not in the array");
        break;
    }
}