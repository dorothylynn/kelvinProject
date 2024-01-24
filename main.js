// Today's temperature in Kelvin
const kelvin = 293;

// Celsius is 273 degrees less than Kelvin
var celsius = kelvin - 273;

// Formula to convert Celsius to Fahrenheit
var fahrenheit = celsius * (9/5) + 32;

// Rounding down the decimal number from the equation
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);



var newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
