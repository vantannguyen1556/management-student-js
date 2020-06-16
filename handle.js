function addToCart(obj) {
  var arrProduct = localStorage.getItem('arrProduct');
  arrProduct = arrProduct ? JSON.parse(arrProduct) : [];
  var parent = obj.parentNode;
  var url_image = parent.children[0].src;
  var price = parent.children[1].textContent;
  objProduct = {
    url_image,
    price
  }
  arrProduct.push(objProduct);
  localStorage.setItem('arrProduct', JSON.stringify(arrProduct))
  console.log(url_image, price);
}

