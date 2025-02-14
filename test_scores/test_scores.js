"use strict";

//ORIGINAL VERSION
/*// initialize total variable
let total = 0;

//get 3 scores from user and add them together
const score1 = parseInt(prompt("Enter test score"));
total += score1;

const score2 = parseInt(prompt("Enter test score"));
total += score2;

const score3 = parseInt(prompt("Enter test score"));
total += score3;

//calculate the average
const average = parseInt(total/3);

// display the scores
const html = "<p>Score 1 = " + score1 + "</p>" +
    "<p>Score 2 = " + score2 + "</p>" +
    "<p>Score 3 = " + score3 + "</p>" +
    "<p>Average score = " + average + "</p>";
document.write(html);
*/

//FOR IN VERSION
// declare and initialize an array to hold test scores from user
/*const scores = [];
 
// use do-while loop to get scores from the user and store in array
let score = 0;
do {
    score = parseInt(prompt(
        "Enter a test score, or enter -1 to end scores", -1));
 
    if (score >= 0 && score <= 100) {
        scores[scores.length] = score;
    }
    else if (score != -1){
        alert("Score must by a valid number from 0 through 100");
    }
}
while(score != -1);
 
if (scores.length > 0) {
    // use a for-in loop to add each score to total and display it
    let total = 0;
    for (let i in scores) {
        total = total + scores[i];
        document.write(
            `<p>Score ${parseInt(i) + 1}: ${scores[i]}</p>`);
    }
 
    //calculate and display the average
    const average = parseInt(total/scores.length);
    document.write(`<p>Average score is ${average}</p>`);
}
*/

// FOR OF VERSION
const scores = [];


let score = 0;
do {
    score = parseInt(prompt(
        "Enter a test score, or enter -1 to end scores", -1));
    if (score >= 0 && score <= 100) {
        scores[scores.length] = score;
    }
    else if (score != -1){
        alert("Score must be a valid number from 0 through 100");
    }
}
while(score != -1);

if (scores.length > 0) {
    let total = 0;
    let index = 1;
    for (let score of scores) {
        total = total + score;
        document.write(
            `<p>Score ${index}: ${score}</p>`);
        index++;
    }
    // calculate and display the average
    const average = parseInt(total / scores.length);
    document.write(`<p>Average score is ${average}</p>`);
}
