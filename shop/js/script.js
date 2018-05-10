var item = new Object();
var arrayItems = [];
var id = 1;

function addToCart(event) {
    var item = new Object();
    var prodElem = event.target.parentNode;
    document.getElementsByClassName("sum")[0].innerHTML = '';
    item.tittle = prodElem.querySelector('.p_title').textContent;
    item.price = parseInt(prodElem.querySelector('.p_price').textContent);
    arrayItems.push(item);
    showItems(item.tittle, item.price);
    calculateCart(item.price);
}

function showItems(title, price) {
    var cart = document.querySelector('.cart .items');
    var newItem = document.createElement('p');
    newItem.className = "item";
    newItem.id = id++;
    newItem.innerHTML = title + " - " + price + "$";
    cart.appendChild(newItem);
}

function calculateCart() {
    var cart = document.querySelectorAll('.cart .item');
    var sum = document.querySelector('.cart .c_sum');
    var suma = 0;
    if (cart.length > 0) {
        for (var i = 0; i < arrayItems.length; i++) {
            suma += arrayItems[i].price;
        }
        sum.innerHTML = "You have " + cart.length + " items " + suma + '$';
    }
    else {
        sum.innerHTML = "No items";
    }
}

function removeAll() {
    arrayItems = [];
    document.getElementsByClassName("sum")[0].innerHTML = "No items";
    document.getElementsByClassName("c_sum")[0].innerHTML = '';
    document.getElementsByClassName("items")[0].innerHTML = '';
}

function confirm(){
    alert("Дякуємо за ваше замовлення");
}