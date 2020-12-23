
function addToCart(){

    if(document.readyState == 'loading') {
        document.addEventListener('DOMContentLoaded', ready);
    } else{
        addRemoveQuantity();
    }
}


function addRemoveQuantity(){

    let removeBtn = document.getElementsByClassName('remove');
    //loop through buttons
    for (let i = 0; i < removeBtn.length; i++) {
        let button = removeBtn[i];
        button.addEventListener('click', removeCartItem);
    }
    
    let quantityInputs = document.getElementsByClassName('quantityInput');
    //loop through quantity selection
    for(let i = 0; i < quantityInputs.length; i++){
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

    let addToCartBtn = document.getElementsByClassName('add-btn');
    for(let i = 0; i < addToCartBtn.length; i++){
        let btn = addToCartBtn[i];
        btn.addEventListener('click', addToCartClicked)
    }
}

//Removes Item
function removeCartItem(e){
    let buttonClicked = e.target;
    //targets the parents so the whole container disapears on click
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

//Changes the quantity
function quantityChanged(e){
    let input = e.target;
    //if its not a number or a negative number
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal();
}

//when clicked on add to cart
function addToCartClicked(e){
    let btn = e.target
    let item = btn.parentElement.parentElement;
    let title = item.getElementsByClassName('item-title')[0].innerText;
    let price = item.getElementsByClassName('item-price')[0].innerText;
    console.log(title, price);
    addItemToCart(title,price);
    updateCartTotal();
}

//displays item in cart
function addItemToCart(title, price){

    //creates a div and adds the item-details in the checkout container
    let cartRow = document.createElement('div');
    cartRow.innerText = title;
    let cartItems = document.getElementsByClassName('cart-items')[0];
    let cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    //loops through to see so the user does not add the same item again.
    for(let i = 0; i < cartItemNames.length; i++){
        if(cartItemNames[i].innerText == title){
            alert('Denna varan är finns redan i din varukorg. Om du vill ha mer än en av denna vara var god ändra kvanititet i kassan.');
            return;
        }
    }
    let cartContent = `
    <div class="cartItem flex-row-center-end">
        <div class="cart-item-title">${title}</div>
        <span class="priceCart">${price}</span>
    <div class="quantity flex-row-center-align">
        <input type="number" value="1" class="quantityInput">
        <button class="remove btn" type="button"> <i class="fas fa-trash-alt"></i> Ta bort</button>
    </div>`
    cartRow.innerHTML = cartContent;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('remove')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('quantityInput')[0].addEventListener('change', quantityChanged);
}

//Updating the cart total price
function updateCartTotal() {
    //only want to get the first get the first element of the array of cart-items
    let cartItemContainer = document.getElementsByClassName('cart-items')[0];
    let cartItems = cartItemContainer.getElementsByClassName('cartItem');
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
        let cartItem = cartItems[i];
        let priceElement = cartItem.getElementsByClassName('priceCart')[0];
        let quantityElement = cartItem.getElementsByClassName('quantityInput')[0];
        let price = parseFloat(priceElement.innerText);
        let quantity = quantityElement.value;
        total = total + (price * quantity);
    }
    //round to the nearest number just two decimals
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('total-price')[0].innerText = `${total} Kr`;
}
/**
 * Checkout Btn
 */
// function checkoutPopUp() {
//     let checkOutBtn = document.getElementsByClassName('checkout btn');
//     checkOutBtn.addEventListener('click', () => {
//         if
//     })
// }
