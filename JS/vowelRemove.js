//This is what I had done intially without reading up on algorithms
//1. create a sentence and asisgn a variable
//2. Create a method that picks out all the vowels in the entence (a, e, i o, u)
//3. Replace the vowels with a -
//4. Display the word puzzle so someone else can try to guess it.
//NB: do this without using regular expressions


//<----------SOLUTION 1 (without dashes in place of vowels)----------->
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

console.log(sentVowel);     //output (32) ['R', 'c', 't', ' ', 'F', 'r', 'n', 't', 'n', 'd', ' ', 'f', 'r', ' ', 'L', 's', ' ', 'C', 'p', 'l', 'd', ' ', 'N', 'd', '.', 'j', 's', ' ', 'S', 'r', 'v', 'r']
console.log(vowelLess);     //output Rct Frntnd fr Ls Cpld Nd.js Srvr




//<----------SOLUTION 2---------->
// still using the for loop, only this time, if a vowel is the character, replace it with a dash

//create a new variable to hold the new sentence then use the for-loop. but this can only replace one vowel at a time. i am unable to loop through the vowels so that it replaces them all
let dashedSentence = "";

for (let index = 0; index < sentence.length; index++) {
  if (al.includes(sentence[index])) {
    dashedSentence=sentence.replaceAll("e", "-")
  }
}

console.log(dashedSentence);      //output R-act Front-nd for Loos- Coupl-d Nod-.js S-rv-r




//<---------- SOLUTION 3------------>
//Trying to use a function to check an array value and replace it
//My sentence
let mySentence = prompt("Enter a sentence to replace its vowels");

//Convert to lowercase to accomodate the first letter
let result = mySentence.toLowerCase();

//Split to create an array of each separate character
let checkVowels = result.split("");
console.log(checkVowels);
//output ['e', 'n', 't', 'e', 'r', ' ', 'a', ' ', 's', 'e', 'n', 't', 'e', 'n', 'c', 'e', ' ', 't', 'o', ' ', 'r', 'e', 'p', 'l', 'a', 'c', 'e', ' ', 'i', 't', 's', ' ', 'v', 'o', 'w', 'e', 'l', 's']


//Create a function to check an array value and replace it if it matches a vowel
function replaceVowel (vowel, index, array) {
  if (vowel === "a")  array[index] = "-";
  if (vowel === "e")  array[index] = "-";
  if (vowel === "i")  array[index] = "-";
  if (vowel === "o")  array[index] = "-";
  if (vowel === "u")  array[index] = "-";
}
checkVowels.forEach(replaceVowel);
console.log(checkVowels);

let newSent = checkVowels.join("");
console.log(newSent);

let yourInputDisplay = document.getElementById("yourInput");
yourInputDisplay.innerHTML = mySentence;

let newSentenceDisplay = document.getElementById("newSentence");
newSentenceDisplay.innerHTML = newSent;


//<----------SOLUTION 3-----------> 
//Found a resource on medium that shows how to use algorithms, loved this approach because it catrered for non-valid strings as well as strings that included numbers. So i'll run through with it.
// resource link -> https://betterprogramming.pub/how-to-remove-vowels-from-a-string-in-javascript-fbed6e3a438e

//Consider the endpoints
//1. Make sure that the argument provided is a string in the first place else return an error message

//2. If the string.length === 0 return error message

//3. if the string has no alphabetical characters return an error message

//4. if the string is a vowel return "-"

//5. Return the string as is if its length is 1 && not a vowel

//6. Take a string such as : "I want to be a junior software developer by the end of 2022" should be: "- w-nt t- b- - j-n--r s-ftw-r- d-v-l-p-r by th- -nd -f 2022"

//The first three deal with accepting valid strings, easily done using typeof operator. it is best to compartmentalize into helper functions for easier readability. I still haven't mastered this :/

//First save the error messages as variables

// const notAStringMessage = "This is not a string. Please provide an argument that is a string."

// const noLetterString = "Please write a string that has letters in it."

// const zeroLengthStringMessage = "Please write a string with one or more characters in it."

//Build a method to check if a string is valid using typeof, check length of the string and then check if there are letters using regex else the string is valid

// function isAValidString (string) {
//   if (typeof string!== "string") {
//       return notAStringMessage
//   }
//   if (string.length===0) {
//     return zeroLengthStringMessage
//   }
//   if (/[a-z]/i.test(string)===false) {
//     return noLetterString
//   } else {
//     return "This is a valid string."
//   }
// }

//Now that we have a valid string, check for vowels using a second helper function called hasVowels. the test method searches the string it is comparing for any of the vowels and if present returns true (boolean) else retuns false. this will be used in the next function tosave processing time. hasVowels will be called in the next function

// function hasVowels (string) {
//   if (/[aeiou]/i.test(string)) {
//     return true
//   } else {
//     return false          // means to return the string as is
//   }
// }


//vowelCut will call the hasVowels function. if it receives an argument returned as false it will give back the original string, otherwise it will process to check for vowels. First split to get individual characters then use the map method which receives a function a a parameter and applies it on each element to return a new array. the callback function checks to see if the character is a vowel nd if it is, replaces the vowel with a dash else it returns the character as it is. These are found in an array which we will then joib using space as a delimiter to create the transformed words
// function vowelCut (string) {
//   let stringArray = string.split("");
//   let vowelArr = stringArray.map(function(stringArr) {
//     if(/[aeiou]/i.test(stringArr)) {
//       stringArr="-"
//     } else {
//       return stringArr
//     }
//   })
//   let vowelLess = vowelArr.join("");
// }

//Final composition the algorithm
const notAStringMessage = "This is not a string. Please provide an argument that is a string."

const noLetterString = "Please write a string that has letters in it."

const zeroLengthStringMessage = "Please write a string with one or more characters in it."

let outputSent;

function isAValidString (string) {
  if (typeof string!== "string") {
      console.log(notAStringMessage);
  }
  if (string.length===0) {
    console.log(zeroLengthStringMessage);
  }
  if (/[a-z]/i.test(string)===false) {
    console.log(noLetterString);
  } else {
    return "This is a valid string."
  }
}

function hasVowels (string) {
  if (/[aeiou]/i.test(string)) {
    return true
  } else {
    return false          // means to return the string as is
  }
}

function vowelCut(string) {
  if (isAValidString(string)===notAStringMessage || isAValidString(string) === zeroLengthStringMessage || isAValidString(string) === noLetterString) {
    return isAValidString(string)
  }
  if (hasVowels(string)) {
    if (string.length===1) {
      console.log("-");
    } else {
     let characterArray = string.split("");
     let vowelArr = characterArray.map(function(character) {
       if(/[aeiou]/i.test(character)) {
        return character="-";      //somehow this does not reflect on the array as an *. LOLZ, THAT'S BECAUSE I HADNT RETURNED ANYTHING. FACEPALM SAMOINA!
       } else {
        return character;
       }
     })
     console.log(vowelArr);
     outputSent = vowelArr.join("");
     console.log(outputSent);
    }
  } else {
    console.log(string);
  }
 }

let userInput =prompt("Enter a sentence to cut vowels");
vowelCut(userInput);




//I wanted to display the sentence on the HTML page but it retruns undefined. I assigned the function output to a new variable called tester but it would return undefined. So i declared a global variable called outputSent for the vowelLess Sentence, then appended it to the HTML and it works :)
// let tester = vowelCut(userInput)         // returns undefined on the HTML
// let anotherSentenceDisplay = document.getElementById("anotherSentence");
// anotherSentenceDisplay.innerHTML = tester;


let anotherInputDisplay = document.getElementById("anotherInput");
anotherInputDisplay.innerHTML = userInput;

let anotherSentenceDisplay = document.getElementById("anotherSentence");
anotherSentenceDisplay.innerHTML = outputSent;











