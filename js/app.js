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
alert('Hello ' + userName + ', nice to meet you!');
var userName = prompt('Hello, what\'s your name?');

//question 1
var answerOne = prompt('Do I live in Seattle?').toLowerCase();
if (answerOne === 'yes' || answerOne === 'y') {
  //console.log('You\'re correct!');
  alert('You\'re correct!');
} else if (answerOne === 'no' || answerOne === 'n') {
  //console.log('You\'re WRONG!');
  alert('You\'re WRONG!');
}

//question 2
var answerTwo = prompt('Do I own a dog?').toLocaleLowerCase();
if (answerTwo === 'yes' || answerTwo === 'y') {
  ///console.log('you are correct');
  alert('Yes, her name is Lemon');
} else if (answerTwo === 'no' || answerTwo === 'n') {
  //console.log('That\'s not right...);
  alert('That\'s not right...');
}

//question 3
var answerThree = prompt('Do I like to Snowboard?').toLocaleLowerCase();
if (answerThree === 'yes' || answerThree === 'y') {
  //console.log('I love to Snowboard!');
  alert('I love to Snowboard!');
} else if (answerThree === 'no' || answerThree === 'n') {
  //console.log('Did you even read my Bio? \:)');
  alert('Did you even read my Bio? \:)');
}

//question 4
var answerFour = prompt('Was I born in Chicago?').toLocaleLowerCase();
if (answerFour === 'yes' || answerFour === 'y') {
  //console.log('Spot on!');
  alert('Spot on!');
} else if (answerFour === 'no' || answerFour === 'n') {
  //console.log('You don\'t know me at all!');
  alert('You don\'t know me at all!');
}

//question 5
var answerFive = prompt('Did I serve in the Military?').toLocaleLowerCase();
if (answerFive === 'yes' || answerFive === 'y') {
  //console.log('Yes, I served my country for almost 8 years');
  alert('I served my country for almost 8 years');
} else if (answerFive === 'no' || answerFive === 'n') {
  console.log('I feel like you don\'t know me at all :(');
  alert('I really feel like you don\'t know me at all :(');
}

//Goodbye message
alert('Thanks ' + userName + 'for visiting my web page!');



