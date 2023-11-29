/**
 * Constant that defines the trophies for each level
 */
const trophies = ['🍓', '🌽', '🧱', '🐴', '🏆'];

/**
 * Constant that defines the monsters within this game
 */
const monsterImages = [
  'assets/img/horns_skull.png',
  'assets/img/fire_horns.png',
  'assets/img/green_blob.png',
  'assets/img/pink_monster.png',
  'assets/img/red_zombie.png'
];

let score = 0;

/**
 * a Helper function that returns a random integer number between and 
 * including the lower and upper limits
 * 
 * @param {*} lower the lower limit of the possible result
 * @param {*} upper the upper limit of the possible result
 * @returns a random integer number between and including the lower and upper
 *   limits
 */
function randomIntBetween(lower, upper) {
  return Math.round(lower + (upper - lower) * Math.random());
}

/**
 * Initializes the app when the page is fully loaded.
 * 
 * Instead placing the code outside of a function, this ensures that all expected
 * DOM elements are loaded and available. It is a good practice in Javascript, 
 * and might prevent some funky errors.
 */
window.addEventListener('load', function() {
  console.log("Loaded!");
  const monsters = drawMonsters(monsterImages);
  monsters.forEach(monster => {
    monster.addEventListener('click', monsterClicked);
  });
});

/**
 * Handle the event when a monster is clicked 
 */
function monsterClicked(event) {
  score++;
  relocateMonster(event.target);
  checkTrophies();
}

/**
 * Function checking how many clicks have you exectuted
 * @constructor
 */
function checkTrophies() {
  const trophiesSpan = document.getElementById('trophies');
  if (score <= 250) {
    if (score == 250) {
      trophiesSpan.innerHTML += `<span>${trophies[4]}</span>`;
    }
    else if (score == 150) {
      trophiesSpan.innerHTML += `<span>${trophies[3]}</span>`;
    }
    else if (score == 100) {
      trophiesSpan.innerHTML += `<span>${trophies[2]}</span>`;
    }
    else if (score == 50) {
      trophiesSpan.innerHTML += `<span>${trophies[1]}</span>`;
    }
    else if (score == 10) {
      trophiesSpan.innerHTML += `<span>${trophies[0]}</span>`;
    }
  }
}

/**
 * Draw all the monsters on the screen at a random location
 */
function drawMonsters(monsterImages) {
  const monsters = [];
  for (let i = 0; i < monsterImages.length; i++) {
    const monsterImage = monsterImages[i];
    monsters.push(drawMonster(monsterImage));
  }
  return monsters;
}

/**
 * Draw a single monster on the screen 
 */
function drawMonster(monsterImage) {
  const playfield = document.getElementById('playfield');
  const monster = document.createElement('img');
  monster.setAttribute('src', monsterImage);
  monster.className = 'playfield_item';
  playfield.appendChild(monster);
  relocateMonster(monster);

  return monster;
}

/**
 * Provide a monster with a (new) random location on the screen
 */
function relocateMonster(monster) {
  // Not a very nice solution, but it's OK for programming basiscs
  monster.style.top = `${randomIntBetween(0, (window.innerHeight - window.innerHeight * 0.2))}px`;
  monster.style.left = `${randomIntBetween(0, (window.innerWidth - window.innerHeight * 0.25))}px`;
}