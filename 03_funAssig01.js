console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~ 1 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("  ");
function showw1 () {
    console.log("  Your teaching is very Good.");

}

function showw2() {
    console.log("  Assignments are easy.");
    
}

console.log("  How is your Teaching..?")
console.log("          After function call ");
showw1();
showw2();
console.log("  ");

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~ 2 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("                   Personal Details");


var firstName = "MANOJ";
var lastName = "MHETRE";
var collgeName = "Sangolla College Sangola.";
//function arguments
function personalDetails(firstName,lastName,collgeName) {
    console.log("     Console inside function ");
    console.log("Name : ",firstName, lastName);
    console.log("College Name : ",collgeName); 
}
//function call
personalDetails(firstName,lastName,collgeName);


console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~ 3 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("  ");

var aaa = "Virat";
var bbb = "Anushka";

function swapValuesDude (aaa,bbb){ 
    console.log("Before Swap: ", aaa,bbb);
    var temp = aaa;
    aaa = bbb; 
    bbb = temp;
    console.log("After Swap: ", aaa, bbb);
}
swapValuesDude (aaa,bbb); 
console.log("  ");

var aaa = 1000;
var bbb = 2000;
swapValuesDude (aaa,bbb); 
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~ 4 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("  ");
var x = 10.23;
var y = 600;
var z = 40;
function addThreeValues(x,y,z) {
    console.log("Befor Addition value is : ", x,y,z);
    var temp = x+y+z;
    console.log("After Addition value is :", temp );
} 
addThreeValues(x,y,z);

var x = "Hello";
var y = "Good";
var z = "Morning";
addThreeValues(x,y,z);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");




