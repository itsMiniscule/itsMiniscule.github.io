export default class Car {
  private milage: number;

  public colour: string;

  public constructor(initialMilage) {
    this.milage = initialMilage;
  }

  public getMilage() : number {
    return this.milage;
  }
}
