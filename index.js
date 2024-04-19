// General Programming Quizes (Pick One)

// A. Reverse a string
// Important
// I attached 2 answers for the simplest way 
// to use a function from JavaScript, 
// but if you don't use the function below, 
// you can use repetition.
console.log("A. Reverse a string");
console.log("======================================================");
const withReverseFunction = (str) => {
  return str.split("").reverse().join("");
};
console.log("withReverseFunction =>",withReverseFunction("Fullstack Developer"));

function withCustomReverse(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}
console.log("withCustomReverse =>", withCustomReverse("Fullstack Developer"));
console.log("======================================================");


// SQL Quiz (Just one)

// b. Write a function that takes two words 
// as an argument and returns true if they are 
// anagrams (contain the exact same letters) 
// and false otherwise.
console.log("B. Write a function that takes two words");
console.log("======================================================");
const matchTwoWords = (word1, word2) =>{
    if(word1 === word2) return true
    else return false
}

console.log("matchTwoWords", matchTwoWords("Hello", "hello"));
console.log("======================================================");

// CSS Quiz (Pick one)
// c. Count words for a given string. 
console.log("C. Count words for a given string.");
console.log("======================================================");
const countWords = (words) => {
    words = words.trim();
    if (words === "") {
      return 0;
    }
    const result = words.split(/\s+/);
    return result.length;
  }

console.log("countWords", countWords("Fullstack Developer"));
console.log("======================================================");

