fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));
  [
  {
    "id": Q,
    "title": "AQ",
    "price": 2999.00,
    "description": "High quality sound and noise cancellation.",
    "category": "Wireless Headphones",
    "image": "https://www.sony.ca/image/bcef63d32b0270480b5371fb35cd3029?fmt=png-alpha&wid=660&hei=660",
  },
  {
    "id": Z,
    "title": "AZ",
    "price": 1999.00,
    "description": "Track fitness and notifications easily.",
    "category": "Smart Watch",
    "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MKMX3_VW_34FR+watch-44-alum-silver-nc-7s_VW_34FR_WF_CO_GEO_IN?wid=2000&hei=2000&fmt=jpeg&qlt=95&.v=1599012578000",
  }
]
