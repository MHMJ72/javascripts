console.log("  ");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~ Assignment 1   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("  ");

/*function stringBasic() {
    console.log('My dream Companyis : " TCS "');
}
stringBasic();*/

function stringBasic(thatstring){
console.log(thatstring);
}
stringBasic('My dream Company is : " TCS "');
console.log("  ");


var hobby1="Swimming";
var hobby2="Jogging";
var hobby3="watching IPL Cricket";
console.log("     My Hobbies are : ",hobby1,hobby2,hobby3);
var h1lenth = hobby1.length;
console.log("Hobby 1 total chacter : ",h1lenth);
var h2lenth = hobby2.length;
console.log("Hobby 2 total chacter : ",h2lenth);
var h3lenth = hobby3.length;
console.log("Hobby 3 total chacter : ",h3lenth);
var totalCharHobby= hobby1.length + hobby2.length + hobby3.length;
console.log("total no of characters are ", totalCharHobby);
console.log("  ");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~ Assignment 2   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("  ");

/*function stringHandsOn(givenstring){
    console.log("Given string is =",givenstring);
    }
    stringHandsOn("  Hey you are doing good, keep it up   ");
*/


function stringHandsOn(){
 var givenString ="  Hey you are doing good, keep it up   ";
 console.log("Given String is =", givenString);

var lengthOfString = givenString.length;
console.log("Length of String is =", lengthOfString);


console.log("---------- Remove the leading and trailing extra spaces ----------");

var trimmedgivenString = givenString.trim();
console.log("After Trim givenString is = ",trimmedgivenString);
console.log("Lenght Trim givenString is = ",trimmedgivenString.length );

console.log("----------count extra spaces in given string ----------");
console.log("Total number extra spaces : ", givenString.length - trimmedgivenString.length );


console.log("---------- first  character in string ----------");
//trimmedgivenString.charAt(0);
console.log("first  character  : ", trimmedgivenString.charAt(0));


console.log("---------- last  character in string ----------");
var last = trimmedgivenString.charAt (trimmedgivenString.length - 1);
console.log("Last  character  = ", last)
}
stringHandsOn();  
