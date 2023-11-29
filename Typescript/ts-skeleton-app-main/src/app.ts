import HelloWorld from './HelloWorld.js';
import Car from './car.js';

const car : Car = new Car();
const num : number = 10;
const colour : string = 'red';

const greeting = new HelloWorld();
console.log(greeting.greet());
window.addEventListener('load', () => {
  document.getElementById('content').innerText = greeting.greet();
});
