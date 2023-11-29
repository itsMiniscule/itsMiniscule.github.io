import CanvasRenderer from './CanvasRenderer.js';

export default class ScoreItem {
  protected image: HTMLImageElement;

  protected posX: number;

  protected posY: number;

  protected score: number;

  public constructor() {
    this.posY = (Math.random() * maxY);
    this.posX = 0;
  }

  /**
   * Render the GameItem to the canvas
   *
   * @param canvas canvas to render the GameItem to
   */
  public render(canvas: HTMLCanvasElement): void {
    CanvasRenderer.drawImage(canvas, this.image, this.posX, this.posY);
  }

  public getPosY(): number {
    return this.posY;
  }

  public getPosX(): number {
    return this.posX;
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
}
