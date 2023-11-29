import { Game } from './GameLoop.js';

import CanvasRenderer from './CanvasRenderer.js';
// import KeyListener from './KeyListener.js';
import Meteor from './Meteor.js';
import Shield from './Shield.js';
// import Player from './Player.js';

export default class SpaceEscape extends Game {
  // private keyListener: KeyListener;

  private canvas: HTMLCanvasElement;

  private meteors: Meteor[];

  private shields: Shield[];

  // private player: Player;

  private score: number;

  private nextItem: number;

  private time: number;

  public constructor(canvas: HTMLCanvasElement) {
    super();
    this.canvas = canvas;
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;
    // this.keyListener = new KeyListener();

    this.score = 0;

    this.time = 0; // FIXEN

    this.nextItem = Math.random() * 500;

    this.meteors = [];
    this.shields = [];

    for (let i: number = 0; i < 10; i++) {
      this.makeItem();
    }
    // this.player = new Player(this.canvas.width, this.canvas.height);
  }

  /**
   * Create a new item to fly through space.
   *
   * It can either be a new power up or a new meteor, depending on random chance.
   */
  private makeItem(): void {
    if (Math.random() > 0.1) {
      this.shields.push(new Shield(this.canvas.height));
    } else {
      this.meteors.push(new Meteor(this.canvas.height));
    }
  }

  /**
   * Process all input. Called from the GameLoop.
   */
  // public processInput(): void {
  //   if (this.keyListener.isKeyDown(KeyListener.KEY_UP)) {
  //     this.player.moveUp();
  //   }
  //   if (this.keyListener.isKeyDown(KeyListener.KEY_DOWN)) {
  //     this.player.moveDown();
  //   }
  // }

  /**
   * Update game state. Called from the GameLoop
   *
   * @param elapsed time elapsed from the GameLoop
   * @returns true if the game should continue
   */
  public update(elapsed: number): boolean {
    // add time to elapsed time
    this.time += elapsed;

    // loop through all meteors and shields to update the position
    this.meteors.forEach((meteors) => meteors.update(elapsed));
    this.shields.forEach((shields) => shields.update(elapsed));

    // update the position of the player
    // this.player.update(elapsed);

    // Loop through all shields and filter out shields that has either
    // collided with the player, adding points to the score
    // or that has left the bottom of the screen.
    // this.shields = this.shields.filter((shield: Shield) => {
    //   if (this.player.shieldCollided(shield)) {
    //     this.score += shields.getScore();
    //     return false;
    //   }
    //   return (shields.getPosY() < this.canvas.height); // CHECK THIS
    // });

    // // Loop through all meteors and filter out meteors that has either
    // // collided with the player, adding points to the score
    // // or that has left the bottom of the screen.
    // this.meteors = this.meteors.filter((meteor: Meteor) => {
    //   if (this.player.meteorCollided(meteor)) {
    //     this.score += meteor.getScore();
    //     return false;
    //   }
    // return (meteor.getPosY() < this.canvas.height); // CHECK THIS
    // });

    // adds time to the elapsed timer to see when a new item should be spawned
    this.nextItem += elapsed;
    // check this !!!
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
    return (this.time < 0); // CHECK THIS
  }

  /**
   * Render all the elements in the screen. Called from GameLoop
   */
  public render(): void {
    CanvasRenderer.clearCanvas(this.canvas);

    // Render the shields, meteors, and the player
    this.shields.forEach((shield) => shield.render(this.canvas));
    this.meteors.forEach((meteor) => meteor.render(this.canvas));
    // this.player.render(this.canvas);

    // Show text on the screen
    CanvasRenderer.writeText(this.canvas, `Score: ${this.score}`, 10, 45, 'left', 'Arial', 32, 'white');
    CanvasRenderer.writeText(this.canvas, `Time: ${Math.round(this.time / 1000).toString()}`, 10, 85, 'left', 'Arial', 32, 'white');

    if (this.isGameOver()) {
      CanvasRenderer.writeText(this.canvas, 'Game Over', this.canvas.width / 2, this.canvas.height / 2, 'center', 'Arial', 60, 'cyan');
    }
  }
}
