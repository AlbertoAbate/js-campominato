// campominato
// il computer deve generare 16 numeri random diversi compresi tra 1 e 100
var numberList = [];
var userList = [];
var size = 16;
var nMin = 1;
var nMax = 100;

while (numberList.length < size) {
  var number = getRandomNumber(1, 100);

  if (! numberList.includes(number)) {
      numberList.push(number);
  }
}

console.log(numberList);

// In seguito deve chiedere all'utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L'utente non può inserire più volte lo stesso numero.
for (var i = 0; userList.length < 5; i++) {
  var numUser = parseInt (prompt("inserisci un numero"));
  while (userList.includes(numUser) || ( numUser < nMin) || (numUser > nMax)) {
    alert("attenzione! numero errato, scrivi un nuovo numero");
    numUser = parseInt (prompt("inserisci un numero"));
  }
  userList.push(numUser);
  if (numberList.includes(numUser)) {
    console.log("Hai preso una mina, hai perso!");
    break;
  } else if (! numberList.includes(number)) {
    numUser = parseInt (prompt("inserisci un numero"));
  }
}


// funzione per generare un numero random
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min +1)+ min);
}
