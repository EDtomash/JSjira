'use strict';


////////////////////Mimimum #2///////////////

// const userFirstName = "Stas";
// const userLastName = "Albert";
// const userMidleName = "Maria";
// const userNickName = "Nagibator2000";

//restricted variable naming
// const 12userFirstName;
// const first-name;
// const first name;
// const const;
// const @statusbar;

///////////////////Minimum #3///////////////

// single line comment

/*
multiline comment
*/

//////////////////Minimum #4////////////////

//camelCase       let userName = 'Stas';
//PascalCase      class UserLoginPage {}
//snake_case      let user_name = 'Stas';
//SCREAMING_SNAKE_CASE   const USER_PAGE;

//////////////////Normal #1////////////////

// const userName = prompt('Enter your name');
// alert(`Zdarova ${userName}`);

//////////////////Normal #2////////////////

// const currentYear = 2024;
// let userBirthYear = Number(prompt('Enter your birth year'));
// let userAge;

// if (isNaN(userBirthYear)) {
//     alert("Please, enter numbers");
// } else if (userBirthYear > 2024 || userBirthYear < 1894) {
//     alert('Its imposible');
// } else {
//     userAge = currentYear - userBirthYear;
//     alert(`Your age is ${userAge}`);
// }

//////////////////Normal #3////////////////

// let userSquareSide = Number(prompt('Enter square side to calculate perimetr'));
// let squarePerimeter;

// if (isNaN(userSquareSide)) {
//     alert('Enter the number, not a symbol');
// } else {
//     squarePerimeter = userSquareSide * 4;
//     alert(`Square perimetr is ${squarePerimeter}`);
// }

//////////////////Maximum #1////////////////

// let userRadius = Number(prompt('Enter the radius of the circle'));
// let areaOfCircle;

// if (isNaN(userRadius)) {
//     alert('Enter numbers, not a symbol');
// } else {
//     areaOfCircle = Math.PI * (userRadius * userRadius);
//     alert(`Area of circle is ${areaOfCircle}`);
// }

//////////////////Maximum #2////////////////

// let distanceBetweenCities = Number(prompt('Enter distance between two cities in km'));
// let desiredTime = Number(prompt('Enter desired travel time in hr'));
// let travelSpeed;

// if (isNaN(distanceBetweenCities) || isNaN(desiredTime)) {
//     alert('Play by the rules, damn')
// } else {
//     travelSpeed = distanceBetweenCities / desiredTime;
//     alert(`Нou should drive at that speed: ${travelSpeed} km/hr `);
// }


//////////////////Maximum #3////////////////

const exchangeRate  = 0.85;

let userDollars = Number(prompt('How many dollars do you have?'));

let euroExchange;

if (isNaN(userDollars) || userDollars < 0) {
    alert('ERROR');
} else {
    euroExchange = userDollars * exchangeRate;
    alert(`Yours ${userDollars} dollars are ${euroExchange} euros`);
}