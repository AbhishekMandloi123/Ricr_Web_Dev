function calculateBill() {
  let km = Number(document.getElementById("km").value);
  let error = document.getElementById("error");

  error.classList.add("d-none");

  if (document.getElementById("km").value === "" || isNaN(km) || km < 0) {
    error.innerText = "Please enter a non-negative number of kilometres";
    error.classList.remove("d-none");
    return;
  }

  let slab1 = 0, slab2 = 0, slab3 = 0;

  if (km <= 10) {
    slab1 = km;
  }
  else if (km <= 50) {
    slab1 = 10;
    slab2 = km - 10;
  }
  else {
    slab1 = 10;
    slab2 = 40;
    slab3 = km - 50;
  }

  let cost1 = slab1 * 11;
  let cost2 = slab2 * 10;
  let cost3 = slab3 * 9;

  let total = cost1 + cost2 + cost3;

  document.getElementById("resultCard").classList.remove("d-none");
  document.getElementById("totalAmount").innerText =
    total.toLocaleString("en-IN", { minimumFractionDigits: 2 });

  document.getElementById("breakdown").innerHTML = `
    <p>${slab1} km × Rs.11 = Rs.${cost1.toFixed(2)}</p>
    <p>${slab2} km × Rs.10 = Rs.${cost2.toFixed(2)}</p>
    <p>${slab3} km × Rs.9 = Rs.${cost3.toFixed(2)}</p>
  `;
}
