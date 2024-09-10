let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

const [ , a, b, c] = [...arr3, ...arr2, ...arr1];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here

console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed