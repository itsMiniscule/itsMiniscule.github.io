const questions = questionsEasy;

window.addEventListener('load', function () {
  const checkQuestion = document.getElementById('check');
  checkQuestion.addEventListener('click', renderQuestion);
  hideMessage();
});

/**
 * verbergen van error en succes bericht aan het begin
 */
function hideMessage() {
  const errorId = document.getElementById('error');
  const succesId = document.getElementById('success')
  const changeError = document.getElementById("message box bg-error").className = 'hidden';
  const changeSuccess = document.getElementById("message box bg-success").className = 'hidden';
  errorId.appendChild(changeError);
  succesId.appendChild(changeSuccess);
}

/**
 * renders een random question in licht rode box
 */ 
function renderQuestion(questions) {
  const getQuestion = document.querySelector('#question');
  for (let i = 0; i < questions.length; i++) {
    // console.log(questions[i].question);
    const randomQuestion = [(Math.random() * questions.length) | 0];
  }
  getQuestion.appendChild(randomQuestion);
}

/**
 * input 
 */
const btn = document.getElementById('check');
const input = document.getElementById('inputAwnser');
const outputSucces = document.getElementById('success');

function updateOutput() {
  outputSucces.innerHTML = input.value;
}

btn.addEventListener('click', updateOutput);
outputSucces.innerHTML = input.value;

/**
 * verbergen van het welkom bericht nadat check btn is clicked
 */
function welkomBerichtHide() {
  if (updateOutput){
    const hideWelkom = document.createElement('class');
    hideWelkom.className = 'hidden';
    welcome.appendchild(hideWelkom);
  }
}

/**
 * check of de input gelijk is aan de "answer" in question
 */
function checkAnswer() {
  const answerCorrect = document.getElementById('succes');
  document.getElementById('question').innerHTML
  if (answerCorrect === true) {
  }
}

/**
 * bijwerken van de attempts als er een fout is gemaakt
 */
if (inputAnswer == false) {
  for (let j = 6; j > ; j--) {

  }
}

/**
 * bijwerken van de questions left to answer als een antwoord correct is
 */
if (inputAnswer == true) {
  for (let k = 0; k < attempts; k++){

  }
}