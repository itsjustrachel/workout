// script.js
function trackProgress() {
  const checkboxes = document.querySelectorAll('.completed');
  const setsReps = document.querySelectorAll('.sets-reps');
  let completedExercises = 0;
  let totalExercises = checkboxes.length;

  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked) {
      completedExercises++;
    }
  });

  alert(`You have completed ${completedExercises} out of ${totalExercises} exercises today!`);
}
