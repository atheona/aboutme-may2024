function quizButtonListener(event) {
   event.preventDefault()

   let quizContainer = window.document.getElementById("quiz-container")
   quizContainer.classList.toggle("hidden")
}

function gradeQuiz(event) {
   event.preventDefault()
}

let quizButton = window.document.getElementById("open-quiz-button")
quizButton.addEventListener("click", quizButtonListener)

let quizForm = window.document.getElementById("quiz")
quizForm.addEventListener("submit", gradeQuiz);
