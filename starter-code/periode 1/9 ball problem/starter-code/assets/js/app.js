// This array represents the weights of the 9 balls
const ballArray = [1, 1, 1, 1, 1, 1, 1, 1, 1];

// vraagt welke ball the odd-ball wordt
ballArray[prompt('Select the oddball [0-8]', 3)] = 1.2;

// visuele ball list thingy
  const ballList = document.getElementById('ball-list');
for (let i = 0; i < ballArray.length; i++){
  const ball = document.createElement('div');
  let background = 'has-background-primary-light';
  if (ballArray[i] > 1) {
    background = 'has-background-primary';
  }
  ball.className = 'ball column box m-4 ' + background;
  ball.innerHTML = '' + i;
  ballList.appendChild(ball);
}

// Solve the problem. First define a variable that will hold the index of what our algoritm defines as the oddball
let foundIndex = -1;
// First step compare [0, 1, 2] to [3, 4, 5]; not using [6, 7, 8]
document.getElementById('left-1').innerHTML = '[0, 1, 2]';
let left = ballArray[0] + ballArray[1] + ballArray[2];
document.getElementById('right-1').innerHTML = '[3, 4, 5]';
let right = ballArray[3] + ballArray[4] + ballArray[5];

if (left > right) {
  // Left goes down => heavier
  document.getElementById('result-1').innerHTML = 'left is heavier';
  document.getElementById('conclusion-1').innerHTML = 'oddball must be in [0, 1, 2]';
  // Do 2nd test in this case
  document.getElementById('left-2').innerHTML = '[0]';
  left = ballArray[0];
  document.getElementById('right-2').innerHTML = '[1]';
  right = ballArray[1];
  if (left > right) {
    // Left goes down => heavier
    document.getElementById('result-2').innerHTML = 'left is heavier';
    foundIndex = 0;
  } else if (left < right) {
    // Right goes down => heavier
    document.getElementById('result-2').innerHTML = 'right is heavier';
    foundIndex = 1;
  } else {
    // Balanced
    document.getElementById('result-2').innerHTML = 'balanced';
    foundIndex = 2;
  }
} else if (left < right) {
  // Right goes down => heavier
  document.getElementById('result-1').innerHTML = 'right is heavier';
  document.getElementById('conclusion-1').innerHTML = 'oddball must be in [3, 4, 5]';
  // Do 2nd test in this case
  document.getElementById('left-2').innerHTML = '[3]';
  left = ballArray[3];
  document.getElementById('right-2').innerHTML = '[4]';
  right = ballArray[4];
  if (left > right) {
    // Left goes down => heavier
    document.getElementById('result-2').innerHTML = 'left is heavier';
    foundIndex = 3;
  } else if (left < right) {
    // Right goes down => heavier
    document.getElementById('result-2').innerHTML = 'right is heavier';
    foundIndex = 4;
  } else {
    // Balanced
    document.getElementById('result-2').innerHTML = 'balanced';
    foundIndex = 5;
  }
} else {
  // Balanced
  document.getElementById('result-1').innerHTML = 'balanced';
  document.getElementById('conclusion-1').innerHTML = 'oddball must be in [6, 7, 8]';
  // Do 2nd test in this case
  document.getElementById('left-2').innerHTML = '[6]';
  left = ballArray[6];
  document.getElementById('right-2').innerHTML = '[7]';
  right = ballArray[7];
  if (left > right) {
    // Left goes down => heavier
    document.getElementById('result-2').innerHTML = 'left is heavier';
    foundIndex = 6;
  } else if (left < right) {
    // Right goes down => heavier
    document.getElementById('result-2').innerHTML = 'right is heavier';
    foundIndex = 7;
  } else {
    // Balanced
    document.getElementById('result-2').innerHTML = 'balanced';
    foundIndex = 8;
  }
}
document.getElementById('conclusion-2').innerHTML = `oddball is [${foundIndex}]`;

// Emphasize the found index
const els = Array.from(document.getElementsByClassName('ball'));
els[foundIndex].classList.add('has-border-primary-dark');