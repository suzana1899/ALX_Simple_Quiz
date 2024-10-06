function checkAnswer() {
  // The correct answer
  var correctAnswer = "4";

  // Get the selected answer
  var userAnswer = document.querySelector('input[name="quiz"]:checked').value;

  // Compare and give feedback
  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Correct! Well done.";
  } else {
    document.getElementById("feedback").textContent =
      "That's incorrect. Try again!";
  }
}

// Add the event listener for the button
document.getElementById("submit-answer").onclick = checkAnswer;
