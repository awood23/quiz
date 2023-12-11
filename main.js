// Quiz

document.getElementById("submit").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Search Input
  let score = document.getElementById("submit").value.toLowerCase();
  let qone = document.getElementById("Q-1").innerHTML;
  let qtwo = document.getElementById("Q-2").innerHTML;
  let qthree = document.getElementById("Q-3").innerHTML;
  let qfour = document.getElementById("Q-4").innerHTML;

  // Test
  if (qone === 4) {
    document.getElementById("answer1").innerHTML = "Correct!";
  } else {
    document.getElementById("answer1").innerHTML =
      "Incorrect! (Correct Answer was 4)";
  }

  if (qtwo === 5) {
    document.getElementById("answer2").innerHTML = "Correct!";
  } else {
    document.getElementById("answer2").innerHTML =
      "Incorrect! (Correct Answer was 5)";
  }

  if (qthree === 30) {
    document.getElementById("answer3").innerHTML = "Correct!";
  } else {
    document.getElementById("answer3").innerHTML =
      "Incorrect! (Correct Answer was 30)";
  }

  if (qfour === 4) {
    document.getElementById("answer4").innerHTML = "Correct!";
  } else {
    document.getElementById("answer4").innerHTML =
      "Incorrect! (Correct Answer was 4)";
  }
}
