var num1;
var num2;
var num3;
var largestNum;
var island;
var hour;
var mins;
var time;
var ranLetter;

function ranNum() {
    num1 = Math.floor(Math.random() * 21);
    console.log("num1 = " + num1);
  
    num2 = Math.floor(Math.random() * 21);
    console.log("num2 = " + num2);
  
    num3 = Math.floor(Math.random() * 21);
    console.log("num3 = " + num3);
}

function bigNum() {
    if (num1 >= num2 && num1 >= num3) {
        largestNum = num1;  
        island = "Lantawan Isla";
    } else if (num2 >= num1 && num2 >= num3) {
        largestNum = num2;
        island = "Siklod Isla";
    } else {
        largestNum = num3;
        island = "Hapao Isla";
    }
    console.log("largest = " + largestNum);
}

function generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet.charAt(num1);
}

function timeThing() {
    time = num2 * num3;
    mins = time % 60;
    hour = (time - mins) / 60;
    console.log("hour = " + hour + ", min/s = " + mins);
}

ranNum();
bigNum();
nthLetter = generateRandomLetter();
timeThing();

document.write("<hr><p id='text'>Lantawan Isla: " + num1 + "<br>Siklod Isla: " + num2 + "<br>Hapao Isla: " + num3);
document.write("<p id='text'>Largest Number: " + largestNum);
document.write("<p id='text'>Letter: " + nthLetter);
document.write("<p id='text'>Time: " + hour + " Hour/s " + mins + " Minute/s<hr></p>");

function whichIsland() {
    if (num1,num2 === largestNum) {
        document.write("<p id='text'>Hola! Soy Dora! Boots and I need help locating some islands. Can you see them? Where?</p>");
        document.write("<p id='text'>Oh, that's right! The islands behind me are considered the three least populated islands in the Philippines.</p>");
        document.write("<p id='text'>But currently, the most populated among the three islands are Lantawan Isla and Siklod Isla with " + largestNum + " inhabitants.</p>");
    } else if (num1,num3 === largestNum) {
        document.write("<p id='text'>Hola! Soy Dora! Boots and I need help locating some islands. Can you see them? Where?</p>");
        document.write("<p id='text'>Oh, that's right! The islands behind me are considered the three least populated islands in the Philippines.</p>");
        document.write("<p id='text'>But currently, the most populated among the three islands are Lantawan Isla and Hapao Isla with " + largestNum + " inhabitants.</p>");
    } else if (num2,num3 === largestNum) {
        document.write("<p id='text'>Hola! Soy Dora! Boots and I need help locating some islands. Can you see them? Where?</p>");
        document.write("<p id='text'>Oh, that's right! The islands behind me are considered the three least populated islands in the Philippines.</p>");
        document.write("<p id='text'>But currently, the most populated among the three islands are Siklod Isla and Hapao Isla with " + largestNum + " inhabitants.</p>");
    } else if (num1 === num2 && num1 === num3 && num2 === num3) {
        document.write("<p id='text'>Hola! Soy Dora! Boots and I need help locating some islands. Can you see them? Where?</p>");
        document.write("<p id='text'>Oh, that's right! The islands behind me are considered the three least populated islands in the Philippines.</p>");
        document.write("<p id='text'>Currently, the three islands have an equal population with " + largestNum + " inhabitants.</p>");
    } else {
        document.write("<p id='text'>Hola! Soy Dora! Boots and I need help locating some islands. Can you see them? Where?</p>");
        document.write("<p id='text'>Oh, that's right! The islands behind me are considered the three least populated islands in the Philippines.</p>");
        document.write("<p id='text'>But currently, the most populated among the three islands is " + island + " with " + largestNum + " inhabitants.</p>");
    }

    document.write("<p id='text'>These three islands are under one ruler named Datu " + nthLetter + "asigbunon.</p>");
    document.write("<p id='text'>It takes around " + hour + " hour(s) and " + mins + " min(s) to reach the general area of these islands traveling from Samal.</p>");
}

whichIsland();


	


