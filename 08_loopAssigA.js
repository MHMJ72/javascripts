

console.log("  ");
// a e i o u == A E I O U

console.log("1)- from below string Count the total number vowels including small and capital");
var word = "I am very good IT Developer";
console.log(word);
var count = 0;
for (let index = 0; index < word.length; index++) {
    var char = word.charAt(index); 

    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
       // console.log(char);
        count++;
    }
    
}
console.log(`given string total number vowels is : ${count}`);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("  ");
console.log("2)- Cube of numbers from 1 to 5 ");
var sum = 0;
for (let index = 1; index <= 5; index=index+1){
      var total= (index * index * index);
    console.log(total);
    sum = sum + total;
    }
console.log(`Sum of cube of number from 1 to 5 is : ${sum}`);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(" ");

function oddPositionedChars(stringss) {
    var printString = " ";
  
    for (let index = 0; index < stringss.length; index++) {
      var char = stringss.charAt(index);
  
      if ((index % 2 != 0) & (char != " ")) {
        printString = printString.concat(char);
      }
    }
    console.log(`Given String is : "${stringss}"`);
    console.log(`odd position characters are : ${printString}`);
  }
  
  oddPositionedChars("Hard work always pays back");
  console.log(" ");
  oddPositionedChars("Soon I will be Angular IT Champ");
  


