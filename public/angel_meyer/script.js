import data from './answers.json' with {type: 'json'}

function shuffleChoices(choices) {
   let currentIndex = choices.length;
   while (currentIndex != 0) {
     let randomIndex = Math.floor(Math.random() * currentIndex);
     currentIndex--;
     [choices[currentIndex], choices[randomIndex]] = [
      choices[randomIndex], choices[currentIndex]];
   }
}

function createQuizQuestion(questionsElement) {
   let choices = []
   choices.push({"truth": true, "question": data.true.pop(Math.floor(Math.random() * data.true.length))})
   choices.push({"truth": true, "question": data.true.pop(Math.floor(Math.random() * data.true.length))})
   choices.push({"truth": false,"question": data.false.pop(Math.floor(Math.random() * data.false.length))})
   shuffleChoices(choices)
   choices.forEach((question, index) => {
      let questionInput = document.createElement('input')
      questionInput.type = 'radio'
      questionInput.id = 'response-' + index
      questionInput.value = question.truth
      questionInput.name = 'question-' + index

      let questionLabel = document.createElement('label')
      questionLabel.for = 'response-' + index
      questionLabel.innerHTML = question.question
      questionsElement.appendChild(questionInput)
      questionsElement.appendChild(questionLabel)
      questionsElement.appendChild(document.createElement('br'))
   })
}

function clearQuizQuestions(questionsElement) {
   while (questionsElement.firstChild) { 
   questionsElement.removeChild(questionsElement.firstChild);
   }
}

function quizButtonListener(event) {
   event.preventDefault()
   let questionsElement = document.getElementById("question-container")
   createQuizQuestion(questionsElement)
   let questionCountElement = document.getElementById("question-count")
   let questionCount = +document.getElementById("question-count").value
   questionCount = 1
   questionCountElement.value = questionCount

   let quizContainer = window.document.getElementById("quiz-container")
   quizContainer.classList.toggle("hidden")
}

function nextQuestion(event) {
   event.preventDefault()
   let questionsElement = document.getElementById("question-container")
   let questionCountElement = document.getElementById("question-count")
   let questionCount = +document.getElementById("question-count").value
   questionCount += 1

   questionCountElement.value = questionCount

   if (questionCount >= 10) {
      let nextButton = window.document.getElementById("next-button")
      nextButton.disabled = true
   }
   clearQuizQuestions(questionsElement)
   createQuizQuestion(questionsElement)


}

function gradeQuiz(event) {
   event.preventDefault()
   let sum = 0

   

   // alert("Total Score: " + sum)

   // let quizScoreEl = document.getElementById("quiz-score")
   // quizScoreEl.innerHTML = "Total Score " + sum
   // quizScoreEl.classList.toggle("hidden")
}

let quizButton = window.document.getElementById("open-quiz-button")
quizButton.addEventListener("click", quizButtonListener)

let quizForm = window.document.getElementById("quiz")
quizForm.addEventListener("submit", gradeQuiz);

let nextButton = window.document.getElementById("next")
nextButton.addEventListener("click", nextQuestion);
