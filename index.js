//! Start by creating the variables for the data recorded
//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)


//! Start the calculation of the total temperatures
//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

const temperatures = [
  { celsius: 21 },
  { fahrenheit: 68 },
  { celsius: 23 },
  { fahrenheit: 75.2 },
  { celsius: 19 },
  { fahrenheit: 77 },
  { celsius: 16 },
  { fahrenheit: 69.8 },
  { fahrenheit: 73.4 },
  { celsius: 26 }
];

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

let celsiusTemps = temperatures.map(temp =>
  temp.celsius !== undefined ? temp.celsius : toCelsius(temp.fahrenheit)
);

let tot_temperature_in_celsius = celsiusTemps.reduce((a, b) => a + b, 0);
let avg_temperature_in_celsius = tot_temperature_in_celsius / celsiusTemps.length;

let tot_temperature_in_fahrenheit = celsiusTemps
  .map(toFahrenheit)
  .reduce((a, b) => a + b, 0);
let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / celsiusTemps.length;

console.log("total temperature in Celsius:", tot_temperature_in_celsius);
console.log("total temperature in Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("average temperature in Celsius:", avg_temperature_in_celsius);
console.log("average temperature in Fahrenheit:", avg_temperature_in_fahrenheit);

module.exports = {
  tot_temperature_in_fahrenheit,
  tot_temperature_in_celsius,
  avg_temperature_in_fahrenheit,
  avg_temperature_in_celsius
};
