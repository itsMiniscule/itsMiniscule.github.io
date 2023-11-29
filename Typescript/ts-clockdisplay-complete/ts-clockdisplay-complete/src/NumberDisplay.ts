export default class NumberDisplay {
  private value: number;

  private limit: number;

  public constructor(limit: number) {
    this.limit = limit;
    this.value = 0;
  }

  public setValue(newValue: number): void {
    this.value = newValue;
  }

  public getValue(): number {
    return this.value;
  }

  /**
   * Returns a string representing the display value of this NumberDisplay
   *
   * @returns a string representing the display value of this NumberDisplay
   */
  public getDisplayValue(): string {
    return this.value.toString().padStart(2, '0');
  }

  /**
   * Increment the value. If the value reaches the limit, go to back to zero.
   */
  public increment(): void {
    this.value += 1;
    if (this.value === this.limit) this.value = 0;
  }
}
