function calculateGrossSalary(basic) {
  let hra = basic * 0.20;
  let da = basic * 0.40;
  let gross = basic + hra + da;

  return {
    basic,
    hra,
    da,
    gross
  };
}

function handleCalculate() {
  let input = document.getElementById("basicSalary").value;
  let basic = Number(input);
  let error = document.getElementById("error");

  error.classList.add("d-none");

  if (input === "" || isNaN(basic) || basic < 0) {
    error.innerText = "Please enter a valid non-negative salary amount";
    error.classList.remove("d-none");
    return;
  }

  let btn = document.getElementById("calcBtn");
  document.getElementById("btnText").innerText = "Calculating...";
  document.getElementById("spinner").classList.remove("d-none");
  btn.disabled = true;

  setTimeout(() => {
    let result = calculateGrossSalary(basic);

    document.getElementById("resultCard").classList.remove("d-none");

    document.getElementById("resBasic").innerText = formatINR(result.basic);
    document.getElementById("resHra").innerText = formatINR(result.hra);
    document.getElementById("resDa").innerText = formatINR(result.da);
    document.getElementById("resGross").innerText = formatINR(result.gross);

    document.getElementById("btnText").innerText = "Calculate Gross Salary";
    document.getElementById("spinner").classList.add("d-none");
    btn.disabled = false;
  }, 500);
}

function resetAll() {
  document.getElementById("basicSalary").value = "";
  document.getElementById("resultCard").classList.add("d-none");
  document.getElementById("error").classList.add("d-none");
}

function formatINR(amount) {
  return "₹" + amount.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}
