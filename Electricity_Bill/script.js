function calculateBill() {
  const units = parseInt(document.getElementById("units").value);

  if (isNaN(units) || units < 0) {
    alert("Please enter valid positive units");
    return;
  }

  let remaining = units;
  let slab1 = 0, slab2 = 0, slab3 = 0, slab4 = 0;

  if (remaining > 0) {
    slab1 = Math.min(50, remaining);
    remaining -= slab1;
  }

  if (remaining > 0) {
    slab2 = Math.min(150, remaining);
    remaining -= slab2;
  }

  if (remaining > 0) {
    slab3 = Math.min(250, remaining);
    remaining -= slab3;
  }

  if (remaining > 0) {
    slab4 = remaining;
  }

  const charge1 = slab1 * 0.50;
  const charge2 = slab2 * 0.75;
  const charge3 = slab3 * 1.20;
  const charge4 = slab4 * 1.50;

  const subtotal = charge1 + charge2 + charge3 + charge4;
  const surcharge = subtotal * 0.20;
  const total = subtotal + surcharge;

  document.getElementById("billCard").classList.remove("d-none");

  document.getElementById("billDetails").innerHTML = `
    <p>First 50 Units: ${slab1} × ₹0.50 = ₹${charge1.toFixed(2)}</p>
    <p>Next 150 Units: ${slab2} × ₹0.75 = ₹${charge2.toFixed(2)}</p>
    <p>Next 250 Units: ${slab3} × ₹1.20 = ₹${charge3.toFixed(2)}</p>
    <p>Above 450 Units: ${slab4} × ₹1.50 = ₹${charge4.toFixed(2)}</p>
    <hr>
    <p>Subtotal: ₹${subtotal.toFixed(2)}</p>
    <p>Surcharge (20%): ₹${surcharge.toFixed(2)}</p>
    <hr>
    <p class="total text-success">Grand Total: ₹${total.toFixed(2)}</p>
  `;
}

function resetBill() {
  document.getElementById("units").value = "";
  document.getElementById("billCard").classList.add("d-none");
}
