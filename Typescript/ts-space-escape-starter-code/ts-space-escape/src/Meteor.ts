import CanvasRenderer from './CanvasRenderer.js';
import ScoreItem from './ScoreItem.js';

export default class Meteor extends ScoreItem {
  private speed: number = 0.10;

  public constructor(maxX: number) {
    super(maxX);

    // chose random meteor from images
    const random: number = Math.random();
    if (random > 0.9) {
      this.image = CanvasRenderer.loadNewImage('./assets/meteor_brown_small.png');
      this.score = 5;
    } else if (random > 0.8) {
      this.image = CanvasRenderer.loadNewImage('./assets/meteor_grey_small.png');
      this.score = 3;
    } else if (random > 0.2) {
      this.image = CanvasRenderer.loadNewImage('./assets/meteor_brown_big.png');
      this.score = 2;
    } else {
      this.image = CanvasRenderer.loadNewImage('./assets/meteor_grey_big.png');
      this.score = 1;
    }
  }

  /**
 * Update position of spider.
 *
 * @param elapsed the elapsed time from the Game
 */
  public update(elapsed: number): void {
    this.speed *= 1.0003 ** elapsed;
    this.posX += elapsed * this.speed;
  }
}
