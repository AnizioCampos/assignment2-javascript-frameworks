//will be necessary to use export before the function to allow it to be imported by main

// FIRST FUNCTION

// Function that concatenates the text parameters 
// Function has a the parameters: text, day and month
export function dayOfWeek(text, day, month) {
    //concatenating the parameters
    console.log(text + " " + day + ", " + month);
}


// SECOND FUNCTION

// Function to convert Farenheit to Celsius and vice versa
export function fahrenheitToCelsius(result, formula) {
    //if Celsius to Fahreheit
    if (formula === 'Celsius to Fahrenheit') {
        //return the convertion formula Celsius * 9/5 + 32
        return `${((result * 9 / 5) + 32).toFixed(1)} °F`;
        //if Fahrenheit to Celsius
    } else if (formula === 'Fahrenheit to Celsius') {
        //return the convertion formula Fahrenheit - 32 * 5/9
        return `${((result - 32) * 5 / 9).toFixed(1)} °C`;
    }  
    //if there is any mistake in the convertion
    return 'Sorry something is wrong';
}


// THIRD FUNCTION

// Function to calculate the sum operation
export function addition(number1, number2) {
    return `The Sum of the numbers is: ${number1 + number2}`;
}


// FOURTH FUNCTION

//Function to check if the professional is Junior, Pleno or Senior
export function typeOfProfessional(year) {
    //if the professional work from 0 to 1 year
    if (year < 1) {
        //result will be Junior
        return "This professional is Junior";
        //if the professional work from 1 to 2 years
    } else if (year >= 1 && year < 2) {
        //the result will be Pleno
        return "This professional is Pleno"; 
        //if the professional work more than 2 years
    } else {
        //the result will be Senior
        return "This professional is Senior";
    }
}
