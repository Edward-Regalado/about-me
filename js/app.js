'use strict';

console.log('Hello World');

//linter test
//var banana = 42;

//if (banana) {
///console.log(banana);
//}

//write 5 questions. They MUST accept yes or no OR y or n IN ANY CASE
//example: YES, yes, YEs, yeS, , yEs, Y, y 
//var normalizedQuestionOne = questionOne.toLocaleLowerCase();

//Greeting message
var userName = prompt('Hello, what\'s your name?');
alert('Hello ' + userName + ', nice to meet you!');
var pointTotal = 0;

//question 1
var answerOne = prompt('Do I live in Seattle?').toLowerCase();
if (answerOne === 'yes' || answerOne === 'y') {
  //console.log('You\'re correct!');
  alert('You\'re correct!');
  pointTotal++;
} else if (answerOne === 'no' || answerOne === 'n') {
  //console.log('You\'re WRONG!');
  alert('You\'re WRONG!');
}

//question 2
var answerTwo = prompt('Do I own a dog?').toLowerCase();
if (answerTwo === 'yes' || answerTwo === 'y') {
  ///console.log('you are correct');
  alert('Yes, her name is Lemon');
  pointTotal++;
} else if (answerTwo === 'no' || answerTwo === 'n') {
  //console.log('That\'s not right...);
  alert('That\'s not right...');
}


//question 3
var answerThree = prompt('Do I like to Snowboard?').toLowerCase();
if (answerThree === 'yes' || answerThree === 'y') {
  //console.log('I love to Snowboard!');
  alert('I love to Snowboard!');
  pointTotal++;
} else if (answerThree === 'no' || answerThree === 'n') {
  //console.log('Did you even read my Bio? \:)');
  alert('Did you even read my Bio? :)');
}

//question 4
var answerFour = prompt('Was I born in Chicago?').toLowerCase();
if (answerFour === 'yes' || answerFour === 'y') {
  //console.log('Spot on!');
  alert('Spot on!');
  pointTotal++;
} else if (answerFour === 'no' || answerFour === 'n') {
  //console.log('You don\'t know me at all!');
  alert('You don\'t know me at all!');
}


//question 5
var answerFive = prompt('Did I serve in the Military?').toLowerCase();
if (answerFive === 'yes' || answerFive === 'y') {
  //console.log('Yes, I served my country for almost 8 years');
  alert('I served my country for almost 8 years');
  pointTotal++;
} else if (answerFive === 'no' || answerFive === 'n') {
  //console.log('I feel like you don\'t know me at all :(');
  alert('I really feel like you don\'t know me at all :(');
}



//question 6

var guess = 0;
var myAge = 38;
var correctGuess = false;
while (guess < 4 && !correctGuess) {
  guess++;
  var guessAge = parseInt(prompt('How old do you think I am?'));
  //console.log(typeof guessAge, guessAge);
  if (guessAge < myAge) {
    alert('sorry, that\'s too young.');
  } else if (guessAge > myAge) {
    alert('Aw, that is too old.');
  } else if (guessAge === 38) {
    alert(`Correct ${userName} ! `);
    correctGuess = true;
    pointTotal++;
  }
  if (!correctGuess) {
    alert(`You're out of chances! The correct answer was ${myAge}`);
  }

  //question7

  var whatFood = ['pizza', 'pasta', 'mexican', 'sushi', 'peanut butter', 'kimchi'];
  var guessFood = prompt('Can you guess what my favorite foods are?').toLowerCase();
  var answeredCorrect = false;
  var attemptsRemaining = 6;
  while (attemptsRemaining > 0 && !answeredCorrect) {
    attemptsRemaining--;
    for (var i = 0; i < whatFood.length; i++) {
      if (guessFood === whatFood[i]) {
        answeredCorrect = true;
        //console.log(`I love to eat ${whatFood}`);
        alert(`I love to eat ${whatFood}`);
        pointTotal++;
      }
    }
    if (attemptsRemaining > 0 && !answeredCorrect) {
      guessFood = prompt('I don\'t like that food. Please try again!').toLowerCase();
    }
    if (attemptsRemaining === 0 && !answeredCorrect) {
      console.log(`Tough luck ${userName}! My favorite foods are pizza, pasta, mexican, sushi, peanut butter and kimchi`);
      alert(`Tough luck ${userName}! My favorite foods are pizza, pasta, mexican, sushi, penaut butter and kimchi`);
    }
  }
}


//Good bye message
alert(`Your total points is ${pointTotal}`);
alert('Thank for visiting my web page, ' + userName + '!');




