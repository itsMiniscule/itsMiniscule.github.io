// Vraag de gebruiker om zijn naam
const naam = prompt("Voer je naam in:");

// Vraag de gebruiker om de duur in minuten
const duurInMinuten = prompt("Voer de duur in minuten in:");

// Zet de duur om naar uren en minuten
let uren = Math.floor(duurInMinuten / 60);
let minuten = duurInMinuten % 60;

// Gegeven Naam en Duur 
const gegevenNaam = "Hallo " + naam;
const gegevenDuur = uren + " uren en " + minuten + " minuten";

// Geeft naam en duur weer
document.write(gegevenNaam + " uw input was " + duurInMinuten + " minuten. " + "<br>") 
document.write(" Uw output is: " + gegevenDuur)

