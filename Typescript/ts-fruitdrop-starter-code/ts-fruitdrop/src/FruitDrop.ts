import { Game } from './GameLoop.js';

import CanvasRenderer from './CanvasRenderer.js';
import KeyListener from './KeyListener.js';
import Player from './Player.js';
import Fruit from './Fruit.js';
import Spider from './Spider.js';

export default class FruitDrop extends Game {
  private canvas: HTMLCanvasElement;

  private fruit: Fruit[];

  private spiders: Spider[];

  private player: Player;

  private keyListener: KeyListener;

  private score: number;

  private timeLeft: number;

  private nextItem: number;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    this.keyListener = new KeyListener();
    this.player = new Player(this.canvas.width, this.canvas.height);

    this.fruit = [];
    this.spiders = [];

    this.score = 0;
    this.nextItem = 300;
    this.timeLeft = 60 * 1000;

    for (let i: number = 0; i < 10; i++) this.makeItem();
  }

  /**
   * Make a new item that falls from the screen.
   */
  private makeItem(): void {
    if (Math.random() > 0.1) this.fruit.push(new Fruit(this.canvas.width));
    else this.spiders.push(new Spider(this.canvas.width));
  }

  /**
   * Process all input. Called from the GameLoop.
   */
  public processInput(): void {
    if (this.keyListener.isKeyDown('ArrowLeft')) {
      this.player.moveLeft();
    }
    if (this.keyListener.isKeyDown('ArrowRight')) {
      this.player.moveRight();
    }
  }

  /**
   * Update game state. Called from the GameLoop
   *
   * @param elapsed time in ms elapsed from the GameLoop
   * @returns true if the game should continue
   */
  public update(elapsed: number): boolean {
    this.timeLeft -= elapsed;

    // loop through all fruit and spiders to update the position
    this.fruit.forEach((fruit) => fruit.update(elapsed));
    this.spiders.forEach((spider) => spider.update(elapsed));

    // update the position of the player
    this.player.update(elapsed);

    // loop through all the fruit and filter out fruit that has either
    // collided with the player, adding points
    // or left the bottom of the screen
    this.fruit = this.fruit.filter((fruit: Fruit) => {
      if (this.player.isCollidingFruit(fruit)) {
        this.score += fruit.getScore();
        return false;
      }
      return (fruit.getPosY() < this.canvas.height);
    });

    // Loop through all spiders and filter out fruit that has either
    // collided with the player, subtracting points from the player
    // or that has left the bottom of the screen.
    this.spiders = this.spiders.filter((spider: Spider) => {
      if (this.player.isColldingSpider(spider)) {
        this.score -= spider.getScore();
        return false;
      }
      return (spider.getPosY() < this.canvas.height);
    });

    // subtracts the elapsed from this time timer to see when
    // a new item should be created
    this.nextItem -= elapsed;
    if (this.nextItem < 0) {
      this.makeItem();
      this.nextItem = Math.random() * 200;
    }

    return !this.isGameOver();
  }

  /**
   * Tests conditions whether game is over. If time left is less than 0
   *
   * @returns True if game is over
   */
  private isGameOver(): boolean {
    return (this.timeLeft < 0);
  }

  /**
   * Render all the elements in the screen.
   */
  public render(): void {
    // Clear the canvas
    CanvasRenderer.clearCanvas(this.canvas);

    // render the fruit, spiders and the player
    this.fruit.forEach((fruit) => fruit.render(this.canvas));
    this.spiders.forEach((spider) => spider.render(this.canvas));

    this.player.render(this.canvas);

    // show text on screen
    CanvasRenderer.writeText(this.canvas, `Score: ${this.score}`, 10, 45, 'left', 'Arial', 32, 'white');
    CanvasRenderer.writeText(this.canvas, `Time: ${Math.round(this.timeLeft / 1000).toString()}`, 10, 85, 'left', 'Arial', 32, 'white');

    if (this.isGameOver()) {
      CanvasRenderer.writeText(this.canvas, 'Game Over', this.canvas.width / 2, this.canvas.height / 2, 'center', 'Arial', 60, 'cyan');
    }
  }
}
