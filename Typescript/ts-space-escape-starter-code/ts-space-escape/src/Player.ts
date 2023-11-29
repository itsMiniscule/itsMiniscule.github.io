// import CanvasRenderer from './CanvasRenderer.js';
// import Shield from './Shield.js';
// import Meteor from './Meteor.js';

// export default class Player {
//   private posX: number;

//   private posY: number;

//   private image: HTMLImageElement;

//   private maxX: number;

//   private speed: number = 0.4;

//   private accelerateUp: boolean = false;

//   private accelerateDown: boolean = false;

//   private acceleration: number;

//   public constructor(maxX: number, maxY: number) {
//     this.image = CanvasRenderer.loadNewImage('assets/ship.png');
//     this.posX = maxX / 2;
//     this.posY = maxY - 100;
//     this.maxX = maxX;
//   }

//   public moveUp(): void {
//     this.accelerateDown = true;
//   }

//   public moveDown(): void {
//     this.accelerateUp = true;
//   }

//   /**
//    * test if a meteor collides with the space ship
//    * @param shield the meteor to test for
//    * @returns true if the spider has collided
//    */
//   public shieldCollided(shield: Shield): boolean {
//     return (shield.getPosX() + shield.getWidth() > this.posX
//     && shield.getPosX() < this.posX + this.image.width
//     && shield.getPosY() + shield.getHeight() > this.posY
//     && shield.getPosY() < this.posY + this.image.height);
//   }

//   /**
//    * test if a meteor collides with the space ship
//    * @param meteor the meteor to test for
//    * @returns true if the spider has collided
//    */
//   public meteorCollided(meteor: Meteor): boolean {
//     return (meteor.getPosX() + meteor.getWidth() > this.posX
//     && meteor.getPosX() < this.posX + this.image.width
//     && meteor.getPosY() + meteor.getHeight() > this.posY
//     && meteor.getPosY() < this.posY + this.image.height);
//   }

//   public getPosX(): number {
//   }

//   public getPosY(): number {
//     return 0;
//   }

//   public getWidth(): number {

//   }

//   public getHeight(): number {

//   }

//   /**
//    * Update the position of the player. If the the movingDown or movingUp
//    * flag has been set, the player will move accordingly.
//    * @param elapsed the number of ms that has passed since the last update
//    */
//   public update(elapsed: number): void {
//     if (this.accelerateDown) {
//       this.posX -= this.speed * elapsed;
//       if (this.posX < 0) {
//         this.posX = 0;
//       }
//       this.accelerateDown = false;
//     }
//     if (this.accelerateUp) {
//       this.posX += this.speed * elapsed;
//       if (this.posX + (this.image.width) > this.maxX) {
//         this.posX = this.maxX - (this.image.width);
//       }
//       this.accelerateUp = false;
//     }
//   }

//   /**
//    * Render the GameItem to the canvas
//    *
//    * @param canvas canvas to render the GameItem to
//    */
//   public render(canvas: HTMLCanvasElement): void {
//     CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
//   }
// }
