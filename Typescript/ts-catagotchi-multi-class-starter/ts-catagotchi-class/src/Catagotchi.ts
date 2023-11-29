import Cattribute from './Cattribute.js';

export default class Catagotchi {
  private catAlive: boolean;

  private catStatus: string;

  private catHunger: Cattribute;

  private catMood: Cattribute;

  private catEnergy: Cattribute;

  public constructor() {
    this.catAlive = true;
    this.catStatus = 'Happy';
    this.catHunger = new Cattribute(0);
    this.catMood = new Cattribute(10);
    this.catEnergy = new Cattribute(10);
  }

  /**
   * feed Cat
   */
  public feed(): void {
    this.catHunger.decrease(1);
  }

  /**
   * play with Cat
   */
  public play(): void {
    this.catMood.increase(1);
  }

  /**
   * Pet Cat
   */
  public pet(): void {
    this.catEnergy.increase(1);
  }

  private catDied(): void {
    // eslint-disable-next-line max-len
    if (this.catEnergy.getValue() === 0 || this.catHunger.getValue() === 10 || this.catEnergy.getValue() === 0) {
      this.catAlive = false;
    }
  }

  /**
   * Update the screen of the Catagotchi
   * @returns String with the output for the screen
   */
  public getScreen(): string {
    if (this.catAlive) {
      return `Catagotchi!<br>
      Status: ${this.catStatus}<br>
      Mood:  ${this.catMood.getValue()} <br>
      Energy: ${this.catEnergy.getValue()}<br>
      Hunger: ${this.catHunger.getValue()}`;
    }
    return 'Catagotchi Dead!';
  }

  /**
   * updateCat
   */
  public updateCat(): void {
    this.catMood.decrease(1);

    this.catEnergy.decrease(1);

    this.catHunger.increase(1);

    this.catDied();
  }
}
