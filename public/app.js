"use strict";
window.addEventListener('load', main);
function main() {
    addButton();
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
        });
    }
}
/**
 * Adds item to the cart.
 */
function addButton() {
    let addBtn = document.getElementsByClassName('add');
    for (let i = 0; i < addBtn.length; i++) {
    }
}
