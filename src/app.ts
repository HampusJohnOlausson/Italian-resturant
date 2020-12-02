window.addEventListener('load', main);

function main (){

    removeButton();
}


/**
 * removes items from the cart
 */
function removeButton() : void{

let removeBtn = document.getElementsByClassName('remove');

//loop through buttons
for(let i = 0; i < removeBtn.length; i++){

    let button = removeBtn[i];

    button.addEventListener('click', (event) => {

        let buttonClicked = event.target;
        //targets the parents so the whole container disapears on click
        buttonClicked.parentElement.parentElement.remove();
    })
}


}