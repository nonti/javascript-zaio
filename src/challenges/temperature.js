let isRaining = false;
let temperature = 35;

let weatherMessage = isRaining ? 'Remember your umbrella!' : 'No  need for an umbrella';
console.log(weatherMessage);

let clotingAdvice = (temperature < 10) ? "Wear a jacket" : (temperature <= 20) ? "Wear a sweater" : "T-shirt weather!";
console.log(clotingAdvice);