//input name
let userName = 'David' 
//name or no name
userName ? console.log(`Hi ${userName}`) : console.log('Hello!'); 
//question for the eightnall
const userQuestion = 'how tall am I?'
//print question
console.log(`How tall is ${userName}?`);
//random number generator 0 to 7
let randomNumber = Math.floor(Math.random() * 8);
// control flow 
let eightBall = randomNumber
  switch (eightBall) {
    case 0:
      console.log('How would I know?');
      break;
    case 1:
      console.log('David is short');
      break;
    case 2:
      console.log('David is tall?');
      break;
    case 3:
      console.log('David is 171 cm');
      break;
    case 4:
      console.log('Cannot predict now');
      break;
    case 5:
      console.log('Nah too lazy. Try again later.');
      break;
    case 6:
      console.log('Yes');
      break;
    case 7:
      console.log('No');
      break;
    default:
      console.log('There must be a bug.')
}