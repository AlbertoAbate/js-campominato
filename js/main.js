// campominato
// il computer deve generare 16 numeri random diversi compresi tra 1 e 100
var numberList = [];
var size = 16;

while (numberList.length < size) {
  var number = getRandomNumber(1, 100);

  if (! numberList.includes(number)) {
      numberList.push(number);
  }
}

console.log(numberList);

// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
for (var i = 0; i < 5; i++) {
  var numUser = parseInt (prompt("inserisci un numero"));
  if (numberList.includes(numUser)) {
    console.log("Hai preso una mina, hai perso!");
  } else if (! numberList.includes(number)) {
    numUser = parseInt (prompt("inserisci un numero"));
  } else if (i = 5) {
    console.log("you win!!!");
  }
}


// funzione per generare un numero random
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min +1)+ min);
}
