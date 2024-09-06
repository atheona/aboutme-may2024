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
      sum += 1
      document.getElementById('pet-question').classList.add("correct-answer")
   } else {
      document.getElementById('pet-question').classList.add("wrong-answer")
   }

   let cityAnswer = document.querySelector('input[name="city"]:checked').value;
   if (cityAnswer === "false") {
      sum += 1
      document.getElementById('city-question').classList.add("correct-answer")
   } else {
      document.getElementById('city-question').classList.add("wrong-answer")
   }

   let footballAnswer = document.querySelector('input[name="football"]:checked').value;
   if (footballAnswer === "true") {
      sum += 1
      document.getElementById('football-question').classList.add("correct-answer")
   } else {
      document.getElementById('football-question').classList.add("wrong-answer")
   }

   let photographyAnswer = document.querySelector('input[name="photography"]:checked').value;
   if (photographyAnswer === "false") {
      sum += 1
      document.getElementById('photography-question').classList.add("correct-answer")
   } else {
      document.getElementById('photography-question').classList.add("wrong-answer")
   }

   let instrumentAnswer = document.querySelector('input[name="instrument"]:checked').value;
   if (instrumentAnswer === "false") {
      sum += 1
      document.getElementById('instrument-question').classList.add("correct-answer")
   } else {
      document.getElementById('instrument-question').classList.add("wrong-answer")
   }

   let holidayAnswer = document.querySelector('input[name="holiday"]:checked').value;
   if (holidayAnswer === "true") {
      sum += 1
      document.getElementById('holiday-question').classList.add("correct-answer")
   } else {
      document.getElementById('holiday-question').classList.add("wrong-answer")
   }

   let travelAnswer = document.querySelector('input[name="travel"]:checked').value;
   if (travelAnswer === "true") {
      sum += 1
      document.getElementById('travel-question').classList.add("correct-answer")
   } else {
      document.getElementById('travel-question').classList.add("wrong-answer")
   }
   
   let siblingAnswer = document.querySelector('input[name="sibling"]:checked').value;
   if (siblingAnswer === "false") {
      sum += 1
      document.getElementById('sibling-question').classList.add("correct-answer")
   } else {
      document.getElementById('sibling-question').classList.add("wrong-answer")
   }
   
   let boneAnswer = document.querySelector('input[name="bone"]:checked').value;
   if (boneAnswer === "false") {
      sum += 1
      document.getElementById('bone-question').classList.add("correct-answer")
   } else {
      document.getElementById('bone-question').classList.add("wrong-answer")
   }

   let kidsAnswer = document.querySelector('input[name="kids"]:checked').value;
   if (kidsAnswer === "true") {
      sum += 1
      document.getElementById('kids-question').classList.add("correct-answer")
   } else {
      document.getElementById('kids-question').classList.add("wrong-answer")
   }

   // alert("Total Score: " + sum)

   // let quizScoreEl = document.getElementById("quiz-score")
   // quizScoreEl.innerHTML = "Total Score " + sum
   // quizScoreEl.classList.toggle("hidden")
}

let quizButton = window.document.getElementById("open-quiz-button")
quizButton.addEventListener("click", quizButtonListener)

let quizForm = window.document.getElementById("quiz")
quizForm.addEventListener("submit", gradeQuiz);
