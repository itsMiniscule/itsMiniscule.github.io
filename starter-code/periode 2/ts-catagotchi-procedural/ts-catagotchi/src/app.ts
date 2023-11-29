const catScreen: HTMLDivElement = document.querySelector('#screen') as HTMLDivElement;
// catAlive catEnergy catMood catHunger
let catAlive: boolean = true;
let catEnergy: number = 10;
let catMood: number = 10;
let catHunger: number = 0;
let catState: string = 'Happy';

/**
 * Player feeds Catagotchi. Vitals changed according to rules.
 */
function feed(): void {
  if (catHunger >= 0) {
    catHunger -= 1;
  }
  if (catMood <=10) {
    catMood += 1;
  }
}

/**
 * Player plays with Catagotchi. Vitals changed according to rules.
 */
function play(): void {
if (catMood <= 10){
  catMood += 1;
}
if (catEnergy <= 10){
  catEnergy -= 1;
}
}

/**
 * Player pets the Catagotchi. Vitals changed according to rules.
 */
function pet(): void {
 if (catEnergy <= 10){
  catEnergy += 1;
 }
 if (catHunger >= 0){
  catHunger += 1;
 }
}

/**
 * Poor Catagotchi died.
 * Execute code when Catagotchi's vitals have reach critical level
 */
function catDied(): void {
  catAlive = false;
}

/**
 * Update the state of Catagotchi according to rules
 */
function updateCat(): void {
  catHunger += 1;
  catEnergy -= 1;
  catMood -= 1;

  if(catEnergy <= 0 || catHunger >= 10) {
    catDied();
  }
}

/**
 * Update the screen of the Catagotchi
 * TODO: Complete this function.
 */
function updateScreen(): string {
  // Verify if Catagotchi is still alive, and return appropriate string
  if (catAlive) {
    return `Catagotchi!<br>
    Status: ${catState}<br>
    Mood:  ${catMood}<br>
    Energy: ${catEnergy}<br>
    Hunger: ${catHunger} `;
  }
  return 'Catagotchi Dead!';
}

/**
 * Runs the update functions
 */
function gameTick(): void {
  updateCat();
  catScreen.innerHTML = updateScreen();

  // Set a timer that calls this function every 1.5 seconds.
  // A better way to do a gameTick will be introduced later in the course.
  setTimeout(() => gameTick(), 1500);
}

/**
 * General setup
 */
window.addEventListener('load', () => gameTick());

document.querySelector('#btn-feed').addEventListener('click', () => feed());
document.querySelector('#btn-play').addEventListener('click', () => play());
document.querySelector('#btn-pet').addEventListener('click', () => pet())
