/**
 * This code represents a single snack that can be purchased.
 */
class Snack {
    name : string;

    description : string;

    price : number;

    expirationDate : Date;
}

// Snack object test code
// let mySnack = new Snack();
// mySnack.name = "Lay's Chips";
// mySnack.description = "Crunchy potato chips";
// mySnack.price = 19.99;
// mySnack.expirationDate = new Date(2024, 10, 8);

// console.log(mySnack);


window.onload = function() {
    let addSnackBtn = document.querySelector("#add-snack") as HTMLButtonElement;
    addSnackBtn.onclick = processSnack;
}

function processSnack() {

    let userSnack = getSnack();
    if (userSnack != null) {
        addSnack(userSnack);
    }
}

/**
 * This function will retrieve all of the snack data from the HTML page.
 * If all data is valid, a snack object will be returned.
 * If any data is invalid, null will be returned and error messages will be shown on the web page.
 */
function getSnack():Snack {
    // Get all inputs
    let nameTextBox = document.querySelector("#name") as HTMLInputElement;
    let priceTextBox = document.querySelector("#price") as HTMLInputElement;
    let descriptionTextBox = document.querySelector("#description") as HTMLInputElement;
    let expirationDateTextBox = document.querySelector("#expiration-date") as HTMLInputElement;

    // Validate data
    let isValidData:boolean = true;

    // Validate the name
    let price:string = priceTextBox.value;
    if (!isValidPrice(price)) {
        isValidData = false;
        priceTextBox.nextElementSibling.textContent = "The price must be a decimal or whole number only."
    }

    
}

/**
 * This validates a price number
 * @param data The string to be validated
 * @returns True if data is a valid price
 */
function isValidPrice(data:string) {
    // The regex pattern allows for a cost in the format of dollars and cents
    // It allows for an optional dollar sign at the beginning, 
    // followed by any number of digits, 
    // followed by an optional period with exactly two digits after it
    let pattern = /^\$?\d+(\.\d{2})?$/;
    return pattern.test(data);
}
/**
 * Adds a Snack object to web storage.
 * Assumes all data is valid
 * @param s The Snack containing valid data to be added.
 */
function addSnack(s:Snack):void {
    
}