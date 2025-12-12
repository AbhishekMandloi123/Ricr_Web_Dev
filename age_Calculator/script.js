document.getElementById("calculateBtn").addEventListener("click", function () {
  const birthDate = document.getElementById("birthDate").value;
  const currentDate = document.getElementById("currentDate").value;
  const resultDiv = document.getElementById("result");

  if (!birthDate || !currentDate) {
    resultDiv.innerHTML =
      '<div class="alert alert-warning">Please enter both dates!</div>';
    return;
  }

  const birth = new Date(birthDate);
  const current = new Date(currentDate);

  if (birth > current) {
    resultDiv.innerHTML =
      '<div class="alert alert-danger">Birth date cannot be after current date!</div>';
    return;
  }

  // Calculate age
  let age = current.getFullYear() - birth.getFullYear();
  const monthDiff = current.getMonth() - birth.getMonth();
  const dayDiff = current.getDate() - birth.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }

  resultDiv.innerHTML = <div class="alert alert-success"><h4>Your age is ${age} years.</h4></div>;
});