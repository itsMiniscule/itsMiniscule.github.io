import CanvasRenderer from './CanvasRenderer.js';

export default class Spider {
  private image: HTMLImageElement;

  private score: number;

  private posX: number;

  private posY: number;

  public constructor(maxX: number) {
    const random: number = Math.random();
    if (random > 0.9) {
      this.image = CanvasRenderer.loadNewImage('assets/spider01.png');
      this.score = 5;
    } else if (random > 0.8) {
      this.image = CanvasRenderer.loadNewImage('assets/spider02.png');
      this.score = 3;
    } else if (random > 0.5) {
      this.image = CanvasRenderer.loadNewImage('assets/spider03.png');
      this.score = 2;
    } else {
      this.image = CanvasRenderer.loadNewImage('assets/spider04.png');
      this.score = 1;
    }
    this.posX = (Math.random() * maxX);
    this.posY = 0;
  }

  /**
   * @param elapsed update image position on canvas
   */
  public update(elapsed: number): void {
    this.posY += elapsed * 0.1;
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
   *
   * @param canvas render image position on canvas
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }
}
