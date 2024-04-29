/* let text = "This is testing"
let length = text.length;
console.log(length);

let charPosition = text.charAt(6)
console.log(charPosition);

let indexOfComma = text.indexOf(",");
console.log(indexOfComma);

let lastIndex = text.lastIndexOf("m");
console.log(lastIndex);

let myString = "Hello World" 
let myCopy = myString.replace("World", "Universe")
console.log(myCopy);
 */
/* const string = prompt("Enter a string");
 */
function checkPalindrome(string){
    const stringValue = string.split('');
    console.log(stringValue);

    const reverseStringValues = stringValue.reverse();
    console.log(reverseStringValues);

    const joinedString = reverseStringValues.join('');
    console.log(joinedString);

    if(string == joinedString){
        console.log("It is a palindrome");
    }
    else{
        console.log("It is not a palindrome");
    }
}