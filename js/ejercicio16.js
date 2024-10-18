let palabra = prompt("Escribe una palabra:");
let esPalindromo = palabra === palabra.split('').reverse().join('');
console.log(esPalindromo ? "Es un palíndromo." : "No es un palíndromo.");
