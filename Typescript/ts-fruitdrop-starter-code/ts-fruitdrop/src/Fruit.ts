import CanvasRenderer from './CanvasRenderer.js';

export default class Fruit {
  private image: HTMLImageElement;

  private score: number;

  private posX: number;

  private posY: number;

  private speed: number = 0.15;

  public constructor(maxX: number) {
    const random: number = Math.random();
    if (random > 0.9) {
      this.image = CanvasRenderer.loadNewImage('assets/fruit-cherries.png');
      this.score = 10;
    } else if (random > 0.7) {
      this.image = CanvasRenderer.loadNewImage('assets/fruit-strawberry.png');
      this.score = 7;
    } else if (random > 0.4) {
      this.image = CanvasRenderer.loadNewImage('assets/fruit-orange.png');
      this.score = 5;
    } else if (random > 0.2) {
      this.image = CanvasRenderer.loadNewImage('assets/fruit-grapes.png');
      this.score = 3;
    } else {
      this.image = CanvasRenderer.loadNewImage('assets/fruit-banana.png');
      this.score = 1;
    }
    this.posX = (Math.random() * maxX);
    this.posY = 0;
  }

  /**
   * @param elapsed update image position on canvas
   */
  public update(elapsed: number): void {
    this.speed *= 1.0003 ** elapsed;
    this.posY += elapsed * this.speed;
  }

  public getPosX(): number {
    return this.posX;
  }

  public getPosY(): number {
    return this.posY;
  }

  public getWidth(): number {
    return this.image.width;
  }

  public getHeight(): number {
    return this.image.height;
  }

  public getScore(): number {
    return this.score;
  }

  /**
   * @param canvas render image position on canvas
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
