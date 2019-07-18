console.log("Challenge #1");

// Console out the numbers from 1-20, but only if they're divisible by 3.

// Use `if` and a modulus operation.
let counter = 0;
while (counter < 20) {
  counter++;
  if (counter % 3 === 0) {
    console.log(counter);
  }
}

console.log("Challenge #2");

// Same problem as #1, but no `if`s, `mods`, or `but`s (and no, that last one is
// not a thing). If you did it right, you should run the loop 6 times with 1
// console log per loop. That's called... a clue!

counter = 0;
while (counter < 18) {
  counter = counter + 3;
  console.log(counter);
}

console.log("Challenge #3");

// Console out the numbers from 1-20. BACKWARDS.

// (And, optionally, in heels.)

// (That's a reference that only Olds make, and only if they're SUPER CULTURED.)

// (No extra credit will be given for wearing heels during this challenge.)

counter = 20;
while (counter >= 1) {
  console.log(counter);
  counter--;
}

console.log("Challenge #4");

// For the string 'Boy howdy am I good at this!', console out the letters
// individually.

let mystr = "Boy howdy am I good at this!";
mystr = mystr.split("");

mystr.forEach(el => {
  if (el !== " ") {
    console.log(el);
  }
});

console.log("Challenge #5");

// For the string, 'And getting better every day.', starting with the second
// character, print out every third character.
counter = 1;
mystr = "And getting better every day.";
while (counter < mystr.length) {
  console.log(mystr[counter]);
  counter = counter + 3;
}

console.log("Challenge #6");

// For the string 'Am I the best?', console out the letters individually, AND
// UPPERCASED.
mystr = "Am I the best?";
counter = 0;
while (counter < mystr.length) {
  console.log(mystr[counter].toUpperCase());
  counter++;
}

console.log("Challenge #7");

// For the string 'Whoa, I am the best!', console out the letters individually,
// but also capitalize the letters in the third word.

mystr = "Whoa, I am the best!";
counter = 0;
let space = 0;
while (counter < mystr.length) {
  if (mystr[counter] === " ") {
    space = space + 1;
  }

  if (space === 2) {
    console.log(mystr[counter].toUpperCase());
  } else {
    console.log(mystr[counter]);
  }

  counter++;
}

console.log("Challenge #8");

// For the string 'I am become death, destroyer of worlds.', console out the letters
//  individually, but backwards. That is, the first console log should be
// `.`, followed by `s`, followed by `d`, and so on.
mystr = "I am become death, destroyer of worlds.";
counter = mystr.length - 1;
while (counter >= 0) {
  console.log(mystr[counter]);
  counter--;
}
console.log("Challenge #9");

const names = "Colin|Mesuara|Drew|In Seop|Emma|Ben|J|Ryan|Olgy|Mike|Chris|John";

// Console out the individual letters of each person in class today, which are
// in the string above. Every time you start a new name (including the first
// one!), console out the string: 'Here today is:'.

// You'll know you're at a new person's name when you hit the pipe character.

// Don't print the pipes!
