// vraagt naar de naam
let person = prompt("Please enter your name", "Harry Potter");

// vraagt naar de hoeveelheid in minuten
let time = prompt("What is the duration in minutes?", "210");

// omrekening van minuten naar uren en minuten
const hours = (time / 60) | 0; // Get the whole hours using bitwise OR
const minutes = time - (hours * 60); // Get the remaining minutes

// geeft input weer
document.write("Hello " + person + ", " + "Your input was " + time + " minutes" + "<br>");

// geeft output weer 
document.write("<br>" +"Output: " + hours + " hours " + minutes + " minutes");