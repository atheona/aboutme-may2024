function quizButtonListener(event) {
   event.preventDefault()

   let quizContainer = window.document.getElementById("quiz-container")
   quizContainer.classList.toggle("hidden")
}

function gradeQuiz(event) {
   event.preventDefault()
   let sum = 0

   let petsAnswer = document.querySelector('input[name="animal"]:checked').value;
   if (petsAnswer === "true") {
      sum += 5
      document.getElementById('pet-question').classList.add("correct-answer")
   } else {
      document.getElementById('pet-question').classList.add("wrong-answer")
   }

   let cityAnswer = document.querySelector('input[name="city"]:checked').value;
   if (cityAnswer === "false") {
      sum += 5
      document.getElementById('city-question').classList.add("correct-answer")
   } else {
      document.getElementById('city-question').classList.add("wrong-answer")
   }

   let footballAnswer = document.querySelector('input[name="football"]:checked').value;
   if (footballAnswer === "true") {
      sum += 5
      document.getElementById('football-question').classList.add("correct-answer")
   } else {
      document.getElementById('football-question').classList.add("wrong-answer")
   }

   let photographyAnswer = document.querySelector('input[name="photography"]:checked').value;
   if (photographyAnswer === "false") {
      sum += 5
      document.getElementById('photography-question').classList.add("correct-answer")
   } else {
      document.getElementById('photography-question').classList.add("wrong-answer")
   }

   alert("Total Score: " + sum)

   // let quizScoreEl = document.getElementById("quiz-score")
   // quizScoreEl.innerHTML = "Total Score " + sum
   // quizScoreEl.classList.toggle("hidden")
}

let quizButton = window.document.getElementById("open-quiz-button")
quizButton.addEventListener("click", quizButtonListener)

let quizForm = window.document.getElementById("quiz")
quizForm.addEventListener("submit", gradeQuiz);
