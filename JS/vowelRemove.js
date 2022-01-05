//This is what I had done intially without reading up on algorithms
//1. create a sentence and asisgn a variable
//2. Create a method that picks out all the vowels in the entence (a, e, i o, u)
//3. Replace the vowels with a -
//4. Display the word puzzle so someone else can try to guess it.
//NB: do this without using regular expressions

//create the vowel string in an array. this is what i will reference
let al = ["a", "e", "i", "o", "u",
  "A", "E", "I", "O", "U"];


//Write the sentence to loop through and assign a variable.
let sentence = "React Frontend for Loose Coupled Node.js Server";

//I created a new array and string to hold the characters 
let sentVowel = [];
let vowelLess = "";

//USe the for loop to go through the words. If the vowel array does not include the specific index as the loop iterates, then add that particular index to the empty string called sentVowel. i then used the .join method with space as a delimiter to create the string without vowels
for (let index = 0; index < sentence.length; index++) {
  if (!al.includes(sentence[index])) {
      sentVowel.push(sentence[index]);
      vowelLess = sentVowel.join("");
  }
}

console.log(sentVowel);
console.log(vowelLess);
