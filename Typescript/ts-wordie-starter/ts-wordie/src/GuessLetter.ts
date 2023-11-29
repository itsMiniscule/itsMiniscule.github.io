export default class GuessLetter {
  private letter: string;

  private isCorrectLetter: boolean;

  private isCorrectPlace: boolean;

  public constructor(letter: string) {
    this.letter = letter;
  }

  public setCorrectLetter(): void {
    this.isCorrectLetter = true;
  }

  public setCorrectPlace() : void {
    this.isCorrectPlace = true;
  }

  // eslint-disable-next-line jsdoc/require-returns
  /**
   * write letter
   */
  public writeLetter(): HTMLDivElement {
    const divLetter = document.createElement('div');
    if (this.isCorrectLetter) {
      divLetter.innerHTML = 'class correctPlace';
      if (this.isCorrectPlace) {
        divLetter.innerHTML = 'class correctPlace';
      }
    }

    divLetter.innerHTML = this.letter;
    return divLetter;
  }

  public writeLetter(): HTMLDivElement {
    const letterDiv = document.createElement('div');
    letterDiv.classList.add('letter');
    if (this.isCorrectLetter) letterDiv.style.color = 'blue';
    
    }

    divLetter.innerHTML = this.letter;
    return divLetter;
  }
}
