"use strict";
// 2. Personal message
let firstName = "Rida";
console.log(`Hello ${firstName}, would you like to learn some python today?`);
console.log("----x----".repeat(7)); // for visual clarity
// 3. Name cases
let fullName = "rida naz";
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());
console.log(fullName.charAt(0).toUpperCase() + fullName.slice(1));
console.log("----x----".repeat(7)); // for visual clarity
//4. Famous quote
console.log(`William Shakespeare once said,"All that glitter is not gold."`);
console.log("----x----".repeat(7)); // for visual clarity
// 5. Famous quote2
let famous_person = "William Shakespeare";
let message = "All that glitter is not gold.";
console.log(`${famous_person} once said,"${message}"`);
console.log("----x----".repeat(7)); // for visual clarity;
// 6. Stripping names
let name1 = "Rida\tNaz";
let name2 = "Rida\nNaz";
console.log(name1);
console.log(name2);
console.log("----x----".repeat(7)) // for visual clarity
;
// 7. Number eight
let a = 10;
let b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log("----x----".repeat(7)); // for visual clarity
// 8. Create four lines
console.log(5 + 3);
console.log(18 - 10);
console.log(2 * 4);
console.log(16 / 2);
console.log("----x----".repeat(7)); // for visual clarity
// 9. Favourite number
let favNumber = 7;
let message1 = `My favourite number is ${favNumber}`;
console.log(message1);
console.log("----x----".repeat(7)); // for visual clarity
// 10. Adding comments
// addition program
let c = 30;
let d = 20;
console.log(`${c} + ${d} = ${c + d}`);
// subtraction program
let e = 100;
let f = 50;
console.log(`${e} + ${f} = ${e + f}`);
console.log("----x----".repeat(7)); // for visual clarity
// 11. Names
let names = ["Huda", "Sabeen", "Hafsa", "Tasbiha"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log("----x----".repeat(7)); // for visual clarity
// 12. Greetings
let message2 = "is my School friend";
console.log(`${names[0]} ${message2}`);
console.log(`${names[1]} ${message2}`);
console.log(`${names[2]} ${message2}`);
console.log(`${names[3]} ${message2}`);
console.log("----x----".repeat(7)); // for visual clarity
// 13. Your own array
let vehicles = ["BMW i5", "Honda Motorcycle", "Audi A1"];
vehicles.map((item) => console.log(`I would like to own a ${item}`));
console.log("----x----".repeat(7)); // for visual clarity
// 14. Guest list
let guests = ["Shyla", "Arshi", "Mehnaz"];
guests.map((item) => console.log(`Dear ${item}, you are corodially invited to a dinner`));
console.log("----x----".repeat(7)); // for visual clarity
// 15. Changing guest list
let canNotAttend = "Mehnaz";
console.log(`${canNotAttend} can't make it,for dinner`);
let newGuest = "Sumaira";
guests[guests.indexOf(canNotAttend)] = newGuest;
guests.map((item) => console.log(`Dear ${item}, you are corodially invited to a dinner`));
console.log("----x----".repeat(7)); // for visual clarity
// 16. More guests
guests.map((item) => console.log(`Dear ${item}, I found a bigger dinner table`));
let beginningGuest = "Erum";
guests[guests.unshift(beginningGuest)];
let middleGuest = "Rabia";
let middleIndex = guests.length / 2;
guests.splice(middleIndex, 0, middleGuest);
let lastGuest = "Mehak";
guests.push(lastGuest);
guests.map((item) => console.log(`Dear ${item}, you are corodially invited to a dinner`));
console.log("----x----".repeat(7)); // for visual clarity
// 17. Shrinking guests list
console.log("I can invite only two guests for dinner");
while (guests.length > 2) {
    let removeGuest = guests.pop();
    console.log(`Dear ${removeGuest} sorry, you are not invited to the dinner`);
}
guests.map((item) => console.log(`Dear${item}, you are still invited to the dinner`));
guests.pop(); // comment this line to run Q 19.
guests.pop(); // comment this line to run Q 19.
console.log(guests); // comment this line to run Q 19.
console.log("----x----".repeat(7)); // for visual clarity
// 18. Seeing the world
let countriesArray = ["Pakistan", "France", "Turkey", "Switzerland", "America"];
console.log(countriesArray);
console.log(countriesArray.sort()); // comment this line to run line no. 136-152
console.log(countriesArray);
console.log(countriesArray.reverse()); // comment this line to run line no. 142-152
console.log(countriesArray);
let reversedArray = countriesArray.reverse();
console.log(reversedArray);
let originalArray = reversedArray.reverse();
console.log(originalArray);
let sortedArray = originalArray.sort();
console.log(sortedArray);
let reverseSortedArray = sortedArray.reverse();
console.log(reverseSortedArray);
console.log("----x----".repeat(7)); // for visual clarity
// 19. Dinner guests
console.log(`${guests.length} peoples are invited to the dinner`);
console.log("----x----".repeat(7)); // for visual clarity
// 20. Array of my choice
let progLanguages = ["TypeScript", "JavaScript", "Python", "C++", "SQL"];
progLanguages.map((item) => console.log(item));
console.log("----x----".repeat(7)); // for visual clarity
// 21. Typescript object
let person = {
    fullName: "Rida Naz",
    fatherName: "Muhammad Naeem",
    age: 20
};
console.log(person);
console.log("----x----".repeat(7)); // for visual clarity
// 22. Intentional error
console.log(progLanguages[5]);
console.log(progLanguages[2]);
console.log("----x----".repeat(7)); // for visual clarity
// 23. Conditional tests;
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True otherwise I predict False");
console.log(car == 'subaru');
console.log(car == 'audi');
let number = 23;
console.log("Is number === '23'? I predict True otherwise I predict False");
console.log(number === 23);
console.log(number === "23");
let country = "Pakistan";
console.log("Is country == 'Pakistan'? I predict True otherwise I predict False");
console.log(country == "Pakistan");
console.log(country == "Turkey");
let mobile = "Iphone";
console.log("Is mobile == 'Iphone'? I predict True otherwise I predict False");
console.log(mobile == "Iphone");
console.log(mobile == "Android");
let mattress = "MoltyFoam";
console.log("Is mattres == 'MoltyFoam'? I predict True otherwise I predict False");
console.log(mattress == "MoltyFoam");
console.log(mattress == "DuraFoam");
let pen = "gel pen";
console.log("Is pen == 'gel pen'? I predict True otherwise I predict False");
console.log(pen == "gel pen");
console.log(pen == "ball point");
let book = "Islamic books";
console.log("Is book == 'Islamic books'? I predict True otherwise I predict False");
console.log(book == "Islamic books");
console.log(book == "story books");
let inverterAC = "Dawlance";
console.log("Is inverterAC == 'Dawlance'? I predict True otherwise I predict False");
console.log(inverterAC == "Dawlance");
console.log(inverterAC == "Panasonic");
let programmingLanguage = "TypeScript";
console.log("Is programmingLanguage == 'TypeScript'? I predict True otherwise I predict False");
console.log(programmingLanguage == "TypeScript");
console.log(programmingLanguage == "JavaScript");
let motorCycle = "Honda";
console.log("Is motorCycle == 'Honda'? I predict True otherwise I predict False");
console.log(motorCycle == "Honda");
console.log(motorCycle == "Suzuki");
console.log("----x----".repeat(7)); // for visual clarity
// 24. More conditional tests
let veg1 = "Potato";
let veg2 = "Tomato";
console.log(veg1 === veg2);
console.log(veg1 !== veg2);
let myName = "RIDA NAZ";
let lowerCaseString = myName.toLowerCase();
console.log(lowerCaseString === "RIDA NAZ");
console.log(lowerCaseString !== "RIDA NAZ");
let num1 = 5;
let num2 = 10;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
let g = true;
let h = false;
console.log(g && h);
console.log(g || h);
let stationary = ["Ink pen", "Pencil", "Eraser", "Sharpner", "Scale"];
console.log(stationary.includes("Ink pen"));
console.log(stationary.includes("Ink Pen"));
console.log("----x----".repeat(7)); // for visual clarity
// 25. Alien colors #1
let alien_color = "green";
if (alien_color == "green") {
    console.log("Congratulations! you just earned 5 points");
}
alien_color = "red";
if (alien_color == "green") {
    console.log("Congratulations! you just earned 5 points");
}
console.log("----x----".repeat(7)) // for visual clarity
;
alien_color = "green";
if (alien_color == "green") {
    console.log("you just earned 5 points for shooting the alien");
}
else {
    console.log("Congratulations! you just earned 10 points");
}
alien_color = "red";
if (alien_color == "green") {
    console.log("you just earned 5 points for shooting the alien");
}
else {
    console.log("Congratulations! you just earned 10 points");
}
console.log("----x----".repeat(7)); // for visual clarity
// 27. Alien colors #3
alien_color = "green";
if (alien_color == "green") {
    console.log("Congratulations! you just earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("Congratulations! you just earned 10 points");
}
else if (alien_color == "red") {
    console.log("Congratulations! you just earned 15 points");
}
alien_color = "yellow";
if (alien_color == "green") {
    console.log("Congratulations! you just earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("Congratulations! you just earned 10 points");
}
else if (alien_color == "red") {
    console.log("Congratulations! you just earned 15 points");
}
alien_color = "red";
if (alien_color == "green") {
    console.log("Congratulations! you just earned 5 points");
}
else if (alien_color == "yellow") {
    console.log("Congratulations! you just earned 10 points");
}
else if (alien_color == "red") {
    console.log("Congratulations! you just earned 15 points");
}
console.log("----x----".repeat(7)); // for visual clarity
// 28. Stages of life
let age = 85;
if (age < 2) {
    console.log("The person is a baby");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager");
}
else if (age >= 20 && age < 65) {
    console.log("The person is a adult");
}
else {
    console.log("The person is a elder");
}
console.log("----x----".repeat(7)); // for visual clarity
// 29. Favorite fruit
let faouriteFruits = ["Mango", "Banana", "Apple"];
if (faouriteFruits.includes("Mango")) {
    console.log("you really like Mango!");
}
if (faouriteFruits.includes("Banana")) {
    console.log("you really like Banana!");
}
if (faouriteFruits.includes("Orange")) {
    console.log("you really like Orange!");
}
if (faouriteFruits.includes("Apple")) {
    console.log("you really like Apple!");
}
if (faouriteFruits.includes("Grape")) {
    console.log("you really like Grape!");
}
console.log("----x----".repeat(7)); // for visual clarity
// 30. Hello admin
let userName = ["Admin", "Rida", "Naeem"];
for (let i = 0; i < userName.length; i++) {
    if (userName[i] == "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${userName[i]}, thank you for logging in again.`);
    }
}
console.log("----x----".repeat(7)); // for visual clarity
// 31. No users
if (userName.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let i = 0; i < userName.length; i++) {
        console.log(userName[i]);
    }
}
userName = [];
if (userName.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (let i = 0; i < userName.length; i++) {
        console.log(userName[i]);
    }
}
console.log("----x----".repeat(7)); // for visual clarity
// 32. Checking usernames
let currentUsers = ["Rida", "Naeem", "Erum", "Huda", "Kashaf"];
let newUsers = ["NAEEM", "NOOR", "KASHAF", "DUA", "HUDA"];
for (let newUser of newUsers) {
    let available = true;
    for (let currentUser of currentUsers) {
        if (newUser.toLowerCase() === currentUser.toLowerCase()) {
            console.log(`Sorry, ${newUser} is already taken. Please choose a different username.`);
            available = false;
            break;
        }
    }
    if (available) {
        console.log(`${newUser} is available.`);
    }
}
console.log("----x----".repeat(7)); // for visual clarity
// 33. Ordinal numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    let ending;
    if (number === 1) {
        ending = "st";
    }
    else if (number === 2) {
        ending = "nd";
    }
    else if (number === 3) {
        ending = "rd";
    }
    else {
        ending = "th";
    }
    console.log(`${number}${ending}`);
}
console.log("----x----".repeat(7)); // for visual clarity
// 34. Pizzas
let pizzas = ["Cheese", "Veggie", "BBQ Chicken"];
for (let i = 0; i < pizzas.length; i++) {
    console.log(`I like ${pizzas[i]} Pizza`);
}
console.log("I really love Pizza!");
console.log("----x----".repeat(7)); // for visual clarity
// 35. Animals
let animals = ["Cat", "Rabbit", "Dog"];
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");
console.log("----x----".repeat(7)); // for visual clarity
// 36. T-shirts
function makeShirt1(size, message) {
    console.log(`Size of the shirt is ${size} and the message on it is ${message}`);
}
makeShirt1("medium", "'I love my Dad'");
console.log("----x----".repeat(7)); // for visual clarity
// 37. Large shirts
function makeShirt2(size = "large", message = "'I love TypeScript'") {
    console.log(`Size of the shirt is ${size} and the message on it is ${message}`);
}
makeShirt2();
makeShirt2("medium");
makeShirt2("small", "'I love my Mom'");
console.log("----x----".repeat(7)); // for visual clarity
// 38. Cities
function describeCity(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describeCity("Islamabad");
describeCity("Lahore");
describeCity("Istanbul", "Turkey");
console.log("----x----".repeat(7)); // for visual clarity
// 39. City names
function cityCountry(city, country) {
    console.log(`"${city}, ${country}"`);
}
cityCountry("Karachi", "Pakistan");
cityCountry("Paris", "France");
cityCountry("Baghdad", "Iraq");
console.log("----x----".repeat(7)); // for visual clarity
// 40. Album
function makeAlbum(artist, title, tracks) {
    let musicAlbum = {
        artist: artist,
        title: title,
    };
    if (tracks) {
        musicAlbum.tracks = tracks;
    }
    return musicAlbum;
}
let album1 = makeAlbum("The Beatles", "Abbey Road");
let album2 = makeAlbum("Queen", "A Night at the Opera");
let album3 = makeAlbum("Nirvana", "Nevermind", 12);
console.log(album1);
console.log(album2);
console.log(album3);
console.log("----x----".repeat(7)); // for visual clarity
// 41. Magicians
let magicians = ["Merlin", "Houdini", "David Copperfield", "Penn & Teller"];
function showMagicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
showMagicians(magicians);
console.log("----x----".repeat(7)); // for visual clarity
// 42. Great magicians
function makeGreat(magicians) {
    for (let magician of magicians) {
        console.log(`The great ${magician}`);
    }
}
makeGreat(magicians);
console.log("----x----".repeat(7)); // for visual clarity
// 43. Unchanged magicians
let greatMagicians = [];
function makeGreat2(magicians) {
    for (let magician of magicians) {
        greatMagicians.push(`${magician} the Great`);
    }
    console.log(greatMagicians);
}
function showMagicians2(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
magicians = ["Harry Houdini", "David Blaine", "Criss Angel"];
greatMagicians = makeGreat([...magicians]);
console.log(magicians);
console.log(greatMagicians);
console.log("----x----".repeat(7)); // for visual clarity
// 44. Sandwiches
function Sandwich(...items) {
    console.log("Here's your sandwich order:");
    for (let item of items) {
        console.log(`${item}`);
    }
    console.log("Enjoy your delicious sandwich!");
}
Sandwich("turkey", "cheddar", "lettuce", "tomato");
Sandwich("peanut butter", "jelly");
Sandwich("grilled cheese", "bacon");
console.log("----x----".repeat(7)); // for visual clarity
function createCar(manufacturer, model, ...otherProperties) {
    let car = { manufacturer, model };
    let otherPropertiesObj = otherProperties.reduce((acc, prop) => {
        if (Array.isArray(prop) && prop.length === 2) {
            acc[prop[0]] = prop[1];
        }
        else {
            console.warn(`Invalid property: ${prop}`);
        }
        return acc;
    }, {});
    return Object.assign(Object.assign({}, car), otherPropertiesObj);
}
let myCar = createCar("Audi", "Sportback", ["color", "blue"], ["sunroof", true]);
console.log(myCar);
console.log("==== x ====".repeat(6)); // for visual clarity
