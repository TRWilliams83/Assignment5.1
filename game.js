//Craps Assignment 2.1
// create function to roll one dice
function rollDie() {
    return Math.floor(Math.random()*6)+1;
}
// create function to execute roll of two dice
function play() {
    // sets start value to 0 (test how necessary this is later)
    let point = 0;
    // rolls one dice twice and adds them = two dice 
    let sum = rollDie() + rollDie();
    // local result 
    console.log("You rolled: " + sum)
    // #1 if statement 1st rule
    if (sum === 7 || sum === 11) {
        // result is losing number
        console.log("CRAPS - you lose!");
    }
    // #2 else if statement 2nd rule
    else if (sum === 2 || sum === 4 || sum === 6 || sum === 4) {
        // result if winning number
        console.log("You won!");
    }
    // #3 else statement 3rd rule "this rule rolls the dice"
    else {
        // point is set to sum starts at 0 "let point = 0 line 9"
        point = sum;
        // result of dice rolls
        console.log("You pushed! " + point); 
        // #4 while loop if sum is =
        while(true) {
            sum = rollDie() + rollDie();
            // logs sum of both dice
            console.log("you pushed!:" + sum);
            // #5 if statement wins
            if (sum === point) {
                console.log("You Win");
                // stop if you win good choice
                break;
            }
            // #6 else if statement if lose
            else if (sum === 7 || sum === 11) {
                console.log("Craps - you lost");
                // stopped the endless rolling (roll till you lose)
                break;
            }
        }
    }
}
play();
function myFunction(){
    document.getElementById('demo').innerHTML = 'Play Again'
}
function displayResult(){
    const result = play();
    document.getElementById('result').innerHTML= "'{result}'";
}

