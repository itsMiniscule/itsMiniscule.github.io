export default class Catagotchi {
  private catAlive: boolean;

  private catStatus: string;

  private catHunger: number;

  private catMood: number;

  private catEnergy: number;

  /**
   * Update the state of Catagotchi according to rules
   */
  public constructor() {
    this.catAlive = true;
    this.catHunger = 0;
    this.catMood = 10;
    this.catEnergy = 10;
    this.catStatus = 'Happy';
  }

  /**
   *
   */
  public updateCat(): void {
    if (this.catMood <= 10) {
      this.catMood -= 1;
    }

    if (this.catEnergy <= 10) {
      this.catEnergy -= 1;
    }

    if (this.catHunger >= 0) {
      this.catHunger += 1;
    }

    if (this.catEnergy === 0 || this.catHunger === 10 || this.catEnergy === 0) {
      this.catAlive = false;
    }
  }

  /**
   *
   */
  public feed(): void {
    if (this.catHunger >= 1) {
      this.catHunger -= 1;
    }
  }

  /**
   *
   */
  public play(): void {
    if (this.catMood <= 10) {
      this.catMood += 1;
      this.catEnergy -= 1;
    }
  }

  /**
   *
   */
  public pet(): void {
    if (this.catEnergy <= 10) {
      this.catEnergy += 1;
      this.catHunger += 1;
    }
  }

  private catDied(): void {
    if (this.catEnergy === 0 || this.catHunger === 10 || this.catEnergy === 0) {
      this.catAlive = false;
    }
  }

  /**
   * Update the screen of the Catagotchi
   * TODO: Complete this function.
   *
   * @returns String with the output for the screen
   */
  public getScreen(): string {
    if (this.catAlive) {
      return `Catagotchi!<br>
      Status: ${this.catStatus}<br>
      Mood:  ${this.catMood} <br>
      Energy: ${this.catEnergy}<br>
      Hunger: ${this.catHunger}`;
    }
    return 'Catagotchi Dead!';
  }
}
