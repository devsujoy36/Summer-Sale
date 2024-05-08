function getNameByElementId(elementId) {
  let elementString = document.getElementById(elementId);
  let element = elementString.innerText;
  return element;
}

function getPriceByElementId(priceId) {
  let priceString = document.getElementById(priceId);
  let priceValue = priceString.innerText;
  let price = parseFloat(priceValue);
  return price;
}

function setNameByElementId(productName) {
  let itemNameList = document.getElementById('item-name-list');
  let li = document.createElement('li');
  li.innerText = productName;
  itemNameList.appendChild(li);
}

function setPriceByElement(elementId,productPrice) {
  let totalAmount = getPriceByElementId(elementId);
  let sum = totalAmount + productPrice;
  let totalDisplay = document.getElementById(elementId);
  totalDisplay.innerText = sum;
}




// Attach event listeners to product buttons using a loop
for (let i = 1; i <= 18; i++) {
  document.getElementById(`product-btn${i}`).addEventListener('click', function() {
    let productName = getNameByElementId(`product-name${i}`);
    let productPrice = getPriceByElementId(`product-price${i}`);
    setNameByElementId(productName);
    setPriceByElement('total-amount', productPrice);
    setPriceByElement('total-price', productPrice);
  });
}


//coupon Section

document.getElementById('btn-apply').addEventListener('click',function () {
  var discountAmount = document.getElementById("discount").innerText;
  var totalAmount = document.getElementById("total-amount").innerText;
  var totalPrice = document.getElementById("total-price").innerText;
  var couponValue = document.getElementById("coupon-inputfield").value;
  
  if(totalPrice >= 10000 ){
    if(couponValue === 'SALE20'){
      discountAmount = totalAmount * (20 / 100);
      discountAmount = discountAmount.toFixed(0);
      totalPrice = totalAmount - discountAmount;
      setPriceByElement('discount', discountAmount);
      document.getElementById('total-price').innerText = totalPrice;
    }
    else {
      alert('Enter a Currect Coupon Number');
    }
  }
  else {
    alert('You are not eligible for 20% discount. Purchase TK 10,000 or above & get 20% Off');
  }
  
  var totalCost = document.getElementById('total-cost');
  totalCost.innerText = totalPrice;
})




document.getElementById('item-name-list').addEventListener('click',function (event) {
  event.target.parentNode.removeChild(event.target);
})




document.getElementById('btn-buy-now').addEventListener('click', function() {
  let conSecContainer = document.getElementById('verify-section-container');
  conSecContainer.style.display = 'flex';
  
  
  
  document.getElementById('item-name-list').innerText = '';
  document.getElementById('total-amount').innerText = '00';
  document.getElementById('discount').innerText = '00';
  document.getElementById('total-price').innerText = '00';
})



let randomNumber = Math.random() * 1000000;
randomNumber = randomNumber.toFixed(0);


document.getElementById('bkash-verify-code').addEventListener('click',function() {
  let number = document.getElementById('bkash-number').value;
  
  let beforeNumber = document.getElementById('before-number');
  beforeNumber.innerText = number;
  
  let verifyCodeContainer = document.getElementById('verify-code-container');
  verifyCodeContainer.style.display = 'flex';
  
  let verifyBkashTitle = document.getElementById('final-verify-code');
  verifyBkashTitle.innerText = randomNumber;
  
  
})


document.getElementById('bkash-verify-btn').addEventListener('click', function() {
  
  let verifyCode = document.getElementById('bkash-verify-code').value;
  if(randomNumber === verifyCode){
    let verifySecContainer = document.getElementById('verify-section-container');
    verifySecContainer.style.display = 'none';
    let paymentSecContainer = document.getElementById('payment-section-container');
    paymentSecContainer.style.display = 'flex';
    
    let number = document.getElementById('bkash-number').value;
    document.getElementById('bkash-number-output').innerText = number;
  }
  else{
    alert('Enter Correct Verify Code');
  }
})


document.getElementById('bkash-buy-btn').addEventListener('click', function() {
  let paymentSecContainer = document.getElementById('payment-section-container');
  paymentSecContainer.style.display = 'none';
  let conSecContainer = document.getElementById('congratulations-section-container');
  conSecContainer.style.display = 'flex';
})


document.getElementById('go-home').addEventListener('click', function() {
  let conSecContainer = document.getElementById('congratulations-section-container');
  conSecContainer.style.display = 'none';
})




document.getElementById('sale-20').addEventListener('click',function(){
  const inputfieldElement = document.getElementById('coupon-inputfield');
  inputfieldElement.value = 'SALE20';
})




