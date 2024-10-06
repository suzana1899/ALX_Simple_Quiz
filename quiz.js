function checkAnswer() {
  // The correct answer
  var correctAnswer = "4";

  // Get the selected answer
  var userAnswer = document.querySelector('input[name="quiz"]:checked');

  // Check if the user selected an answer
  if (userAnswer) {
    // Compare and give feedback
    if (userAnswer.value === correctAnswer) {
      document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
      document.getElementById("feedback").textContent =
        "That's incorrect. Try again!";
    }
  } else {
    document.getElementById("feedback").textContent =
      "Please select an answer!";
  }
}

// Add the event listener for the button using addEventListener
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
