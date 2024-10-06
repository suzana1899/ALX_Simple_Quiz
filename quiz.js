function checkAnswer() {
  const correctAnswer = "4"; // The correct answer value
  const userAnswer = document.querySelector('input[name="quiz"]:checked'); // Retrieves the selected answer
  const feedback = document.getElementById("feedback"); // For feedback display

  // Check if the user selected an answer
  if (userAnswer) {
    // Compare the selected answer's value with the correct answer
    if (userAnswer.value === correctAnswer) {
      feedback.textContent = "Correct! Well done."; // Correct answer feedback
      feedback.style.color = "green";
    } else {
      feedback.textContent = "That's incorrect. Try again!"; // Incorrect answer feedback
      feedback.style.color = "red";
    }
  } else {
    feedback.textContent = "Please select an answer!"; // No answer selected
    feedback.style.color = "blue";
  }
}

// Adding event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
