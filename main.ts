
// 1.Creating a Lesson Plan(Using for loop ) 
let myWork = [];
for(let i = 1; i <= 10; i++) {
let lesson = {
 
    name: 'Lesson ${i}' ,
    status: (i % 2 === 1 ) ? true:false
};
myWork.push(lesson);
}

console.log(myWork);

// 2. Guessing Game (Using while loop )
let maxValue =100;
let randomNumber =Math.floor(Math.random() *100) +1;
console.log("Random Number: ", randomNumber);
let isGuessed = false;
let guesses =[20,25,50,70,80,95];
let i = 0
while( !isGuessed && i < guesses.length) {
    let guess = guesses[i];
    console.log( "Guess: "+ guess);
    if (guess === randomNumber) {
        console.log("Correct!");
        isGuessed = true;
      } else if (guess > randomNumber) {
        console.log("Too high!");
      } else {
        console.log("Too low!");
      }
      
      i++;
    }
    // 3. Counter Incrementer (Using do while loop )
let counter = 0;

let step = 5;

do {
  console.log("Counter: " + counter);
  counter += step;
} while (counter < 100);

console.log("Final Counter: " + counter);

// 4.Exploring Objects with for...in Loop

let myObject = {
    item1: "Strawberry",
    item2: "Mango",
    item3: "Cherry"
};
for (let property in myObject) {
    console.log(`Property: ${property}, Value: ${myObject[property]}`);
  }
//   5.Exploring Arrays with Loops(Using loop )
let myArray = [];
for(let i = 1; i <= 10; i++) {
    myArray.push(i);
}

    console.log("myArray:", myArray);
    
    for (let i = 0; i < myArray.length; i++) {
        console.log(`Index: ${i}, Value: ${myArray[i]}`);
      }
      for (let value of myArray) {
        console.log(value);
      }