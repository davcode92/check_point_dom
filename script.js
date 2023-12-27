//INCREMENT FUNCTION
var Plus_Buttons = document.querySelectorAll(".plus");

function inc(e) {
  var clickedButton = e.target;
  var parentDivdiv = clickedButton.parentElement;
  var paragraph = parentDivdiv.querySelector("p");
  var value = Number(paragraph.innerHTML);
  value++;
  paragraph.innerHTML = value;
  var tr = parentDivdiv.parentElement.parentElement;
  var unitPrice = tr.querySelector(".unitPrice");
  var calculatedPrice = value * Number(unitPrice.innerHTML);
  var priceTag = tr.querySelector(".price");
  priceTag.innerHTML = calculatedPrice;
  sum();
}

for (let i = 0; i < Plus_Buttons.length; i++) {
  Plus_Buttons[i].addEventListener("click", inc);
}

//DECREMENT FUNCTION
var minus_buttons = document.querySelectorAll(".minus");
function dec(e) {
  var clickedButton = e.target;
  var parentDivdiv = clickedButton.parentElement;
  var paragraph = parentDivdiv.querySelector("p");
  var value = Number(paragraph.innerHTML);
  if (value > 0) {
    value--;
  }

  paragraph.innerHTML = value;
  var tr = parentDivdiv.parentElement.parentElement;
  var unitPrice = tr.querySelector(".unitPrice");
  var calculatedPrice = value * Number(unitPrice.innerHTML);
  var priceTag = tr.querySelector(".price");
  priceTag.innerHTML = calculatedPrice;
  sum();
}

for (let i = 0; i < minus_buttons.length; i++) {
  minus_buttons[i].addEventListener("click", dec);
}

//TOTAL PRICE CALCUL

var allPrices = document.querySelectorAll(".price");
var totalTag = document.querySelector("#total");

function sum() {
  somme = 0;
  for (let i = 0; i < allPrices.length; i++) {
    somme += Number(allPrices[i].innerHTML);
  }
  //i=0 => first price and add it to be the some i=1 => add the second price to the some...
  totalTag.innerHTML = somme;
}
//LIKE BUTTONS
var like_buttons = document.querySelectorAll(".like");

function changeColor(e) {
  var likeButton = e.target;
  if (likeButton.style.color != "red") {
    likeButton.style.color = "red";
  } else {
    likeButton.style.color = "#424242";
  }
}

for (let i = 0; i < like_buttons.length; i++) {
  like_buttons[i].addEventListener("click", changeColor);
}

//DELETE FUNCTION
var delete_Buttons = document.querySelectorAll(".delete");

function deleteRow(e) {
  clickedRedIcon = e.target;
  tr = clickedRedIcon.parentElement.parentElement.parentElement.parentElement;
  var deletedPrice = tr.querySelector(".price");
  deletedPrice.innerHTML = 0;
  sum();
tr.remove();
}

for (let i = 0; i < delete_Buttons.length; i++) {
    delete_Buttons[i].addEventListener("click", deleteRow);
  }
