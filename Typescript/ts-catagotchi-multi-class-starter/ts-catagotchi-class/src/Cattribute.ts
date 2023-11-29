export default class Cattribute {
  private value: number;

  public constructor(initialValue: number) {
    this.value = initialValue;
  }

  /**
   * @param increase
   */
  public increase(increase: number): void {
    if (this.value <= 10) {
      this.value += increase;
    }
  }

  /**
   * @param decrease
   */
  public decrease(decrease: number): void {
    if (this.value > 0) {
      this.value -= decrease;
    }
  }

  public getValue(): number {
    return this.value;
  }
}
