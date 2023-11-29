import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Shield extends ScoreItem {
  public constructor(maxX: number) {
    super(maxX);

    const random: number = Math.random();
    if (random > 0.9) {
      this.image = CanvasRenderer.loadNewImage('assets/shield_battery.png');
      this.score = 3;
    } else {
      this.image = CanvasRenderer.loadNewImage('assets/shield_bolt.png');
      this.score = 1;
    }
  }

  /**
   * Update position of spider.
   *
   * @param elapsed the elapsed time from the Game
   */
  public update(elapsed: number): void {
    this.posX += elapsed * 0.1;
  }
}
