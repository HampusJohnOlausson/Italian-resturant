"use strict";
window.addEventListener('load', main);
function main() {
    // addButton();
    removeButton();
}
/**
 * Removes items from the cart
 */
function removeButton() {
    let removeBtn = document.getElementsByClassName('remove');
    //loop through buttons
    for (let i = 0; i < removeBtn.length; i++) {
        let button = removeBtn[i];
        button.addEventListener('click', (e) => {
            let buttonClicked = e.target;
            //targets the parents so the whole container disapears on click
            buttonClicked.parentElement.parentElement.remove();
            updateCartTotal();
        });
    }
}
/**
 * Adds item to the cart.
 */
// function addButton(): void {
//     let addBtn = document.getElementsByClassName('add')!;
//     for(let i = 0; i < addBtn.length; i++){
//     }
// }
/**
 * Updating the cart total price
 */
function updateCartTotal() {
    //only want to get the first get the first element of the array of cart-items
    let cartItemContainer = document.getElementsByClassName('cart-items')[0];
    let cartItems = cartItemContainer.getElementsByClassName('cartItem');
    for (let i = 0; i < cartItems.length; i++) {
        let cartItem = cartItems[i];
        let priceElement = cartItem.getElementsByClassName('priceCart')[0];
        let quantityElement = cartItem.getElementsByClassName('quantityInput')[0];
        let price = parseFloat(priceElement.innerText);
        let quantity = quantityElement.value;
        let total = total + (price * quantity);
    }
    document.getElementById('total-price')[0].innerText = `${total} SEK `;
}
