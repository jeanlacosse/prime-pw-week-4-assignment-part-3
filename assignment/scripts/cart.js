console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
 
let basket = [];
 
const maxItems = 5; // ** part of Stretch goals
 
function isFull() {
    if (basket.length < maxItems) {
        return false;
    } else {
        return true;
    }
} // ** part of Stretch goals
 
function addItem(item) {
    if (isFull() === true) {
        console.log('Sorry, no more room to add item!');
        return false;
    } else {
        basket.push(item);
        return true;
    }
} // ** function changed for Stretch goals
 
// function addItem(item) {
//     basket.push(item);
//     return true;
// } ** Here is the original function before stretch goals
 
console.log(`Basket is ${basket}`);
console.log('Adding apples (expect true)', addItem('apples'));
console.log(`Basket is now ${basket}`);
 
console.log('Adding candy', addItem('candy'));
console.log('Adding sauerkraut', addItem('sauerkraut'));
 
function listItems() {
    for (item of basket) {
        console.log(item);
    }
}
 
console.log('Items now listed as:');
listItems();
 
function empty() {
    basket = [];
}
 
console.log(`Basket is ${basket}`);
console.log('Removing all items in basket', empty());
console.log(`Basket is now ${basket}`);
 
 
// Stretch Goals below
 
addItem('Walnuts');
addItem('Pears');
addItem('Greens');
addItem('Turkey');
addItem('Bread');
 
console.log('Adding apples (expect false)', addItem('apples'));
 
function removeItem(item) {
    for (let i = 0; i < basket.length; i++) {
        if (basket.indexOf(item) === i) {
            basket.splice(i, 1);
            return item;
        } else {
            return null;
        }
    }
}
 
console.log(removeItem('Walnuts'));
console.log(removeItem('peanuts'));
 
console.log(`Remaining items are ${basket}`);
