/* eslint-disable jsdoc/require-returns */
import Fruit from './Fruit.js';
import Spider from './Spider.js';
import CanvasRenderer from './CanvasRenderer.js';

export default class Player {
  private image: HTMLImageElement;

  private speed: number = 0.4;

  private posX: number;

  private posY: number;

  private maxX: number;

  private movingLeft: boolean = false;

  private movingRight: boolean = false;

  public constructor(maxX: number, maxY: number) {
    this.image = CanvasRenderer.loadNewImage('assets/basket.png');
    this.posX = maxX / 2;
    this.posY = maxY - 100;
    this.maxX = maxX;
  }

  /**
   */
  public moveLeft(): void {
    this.movingLeft = true;
  }

  /**
   */
  public moveRight(): void {
    this.movingRight = true;
  }

  /**
   * @param fruit fruit image collison with basket
   */
  public isCollidingFruit(fruit: Fruit): boolean {
    return (fruit.getPosX() + fruit.getWidth() > this.posX
    && fruit.getPosX() < this.posX + this.image.width
    && fruit.getPosY() + fruit.getHeight() > this.posY
    && fruit.getPosY() < this.posY + this.image.height);
  }

  /**
   * @param spider spider image collision with basket
   */
  public isColldingSpider(spider: Spider): boolean {
    return (spider.getPosX() + spider.getWidth() > this.posX
    && spider.getPosX() < this.posX + this.image.width
    && spider.getPosY() + spider.getHeight() > this.posY
    && spider.getPosY() < this.posY + this.image.height);
  }

  /**
   * @param elapsed movement basket
   */
  public update(elapsed: number): void {
    if (this.movingLeft) {
      this.posX -= this.speed * elapsed;
      if (this.posX < 0) {
        this.posX = 0;
      }
      this.movingLeft = false;
    }
    if (this.movingRight) {
      this.posX += this.speed * elapsed;
      if (this.posX + (this.image.width) > this.maxX) {
        this.posX = this.maxX - (this.image.width);
      }
      this.movingRight = false;
    }
  }

  /**
   * @param canvas set canvas
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
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
}
