
//import the functions from utilitiesGroup9.js file
//import because ES Module
import { dayOfWeek, fahrenheitToCelsius, addition, typeOfProfessional } from './utilitiesGroup9.js';


// Testing and invoking the functions from utilitiesGroup9 file

//test first function
dayOfWeek("Today is", "Monday", "February");

//test second function
console.log(fahrenheitToCelsius(30, 'Celsius to Fahrenheit'));
console.log(fahrenheitToCelsius(70, 'Fahrenheit to Celsius'));

//test third function
console.log(addition(3, 6));
console.log(addition(5, 2));

//test fourth function
console.log(typeOfProfessional(0));
console.log(typeOfProfessional(1));
console.log(typeOfProfessional(7));
