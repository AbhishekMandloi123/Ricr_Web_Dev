async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");

    const data = await res.json();

    const productList = document.getElementById("productRow");

    data.forEach((element) => {
      const d = document.createElement("div");
      d.classList.add("col-12", "p-1");

      d.innerHTML = `
        <div class="card border rounded shadow p-2">
          <div class="row">
            <div class="col-4">
              <img src=${element.image} alt=${
        element.title
      } class="w-100 object-fit-contain" style="height: 120px;" />
            </div>
            <div class="col-8 p-2">
              <div class="fw-bold fs-5 ">${
                element.title.length > 50
                  ? element.title.slice(0, 45) + "..."
                  : element.title
              }</div>
              <div class="fw-semibold">${element.rating.rate}/5 (${
        element.rating.count
      })</div>
              <div class="fw-semibold fs-5">₹ ${element.price * 100}</div>
              <div class="mb-2">
                ${element.description.slice(0, 80)}...
              </div>
              <div class="d-flex gap-3">
                <button class="btn btn-outline-primary btn-sm">Add to Cart</button>
                <button class="btn btn-primary btn-sm">Buy Now</button>
              </div>
            </div>
          </div>
        </div>`;

      productList.appendChild(d);
    });
  } catch (error) {
    console.log(error.message);
  }
}

getProducts();