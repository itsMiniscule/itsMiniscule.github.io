import NumberDisplay from './NumberDisplay.js';

export default class ClockDisplay {
  private display: HTMLDivElement;

  private hours: NumberDisplay;

  private minutes: NumberDisplay;

  private seconds: NumberDisplay;

  public constructor(display: HTMLDivElement) {
    this.display = display;
    this.hours = new NumberDisplay(24);
    this.minutes = new NumberDisplay(60);
    this.seconds = new NumberDisplay(60);
  }

  /**
   * Start by incrementing the seconds. If the seconds has been set back to zero (by the limit)
   * increment the minutes. If the minutes have been set back to zero, increment the hours.
   */
  public timeTick(): void {
    this.seconds.increment();
    if (this.seconds.getValue() === 0) {
      this.minutes.increment();
      if (this.minutes.getValue() === 0) {
        this.hours.increment();
      }
    }
    this.updateDisplay();
  }

  /**
   * Update the individual parts of the clock and then update the display.
   *
   * @param hours The hours
   * @param minutes The minutes
   * @param seconds The seconds
   */
  public setTime(hours: number, minutes: number, seconds: number): void {
    this.hours.setValue(hours);
    this.minutes.setValue(minutes);
    this.seconds.setValue(seconds);
    this.updateDisplay();
  }

  /**
   * Update the inner text of the HTML div element
   */
  private updateDisplay(): void {
    const hours = this.hours.getDisplayValue();
    const minutes = this.minutes.getDisplayValue();
    const seconds = this.seconds.getDisplayValue();
    this.display.innerText = `${hours}:${minutes}:${seconds}`;
  }
}
