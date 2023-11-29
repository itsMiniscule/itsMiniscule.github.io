import GuessLetter from './GuessLetter.js';

export default class WordieGuess {
  private letters: GuessLetter[];

  public constructor(answer: string, guess: string) {
    const upperAnswer = answer.toUpperCase().split('');
    const upperGuess = guess.toUpperCase().split('');

    for (let i = 0; i < upperGuess.length; i++) {
      const letter : GuessLetter = new GuessLetter(upperGuess[i]);
      this.letters.push(letter);

      if (upperGuess[i] === upperAnswer[j]){
        this.letters[i].setCorrectPlace[];
      } else {
        for (let j = 0; i < upperAnswer.length; j++) {
          if (upperGuess[i] === upperAnswer[j]) {
            letter.setCorrectLetter();
            upperAnswer[i] = '';
          }
        }
      }
    }
  }

  /**
   * write guess
   */
  public writeGuess(): HTMLDivElement {
    const guessDiv = document.createElement('div');
    for (let i = 0; i < this.letters.length; i++) {
      const letterDiv = this.letters[i].writeLetter();
      guessDiv.appendChild(letterDiv);
    }
    return guessDiv;
  }
}
