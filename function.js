function square(num = 5){
    return num ** 2
}
square()
// square should print 25


function is_even(num){
    return num % 2 == 0
}
// this should print true
is_even(4) 
// this should print false
is_even(7)


function fahrenheit_to_celsius(f){
    return (f - 32) * 5 / 9
}
fahrenheit_to_celsius(86)
// this gave me 30


function max_of_three(a, b, c){
    return max(a, b, c)
}
max_of_three(3, 7, 5)  


function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString("hello"))
// this should print "olleh"


function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let vow of str) {
      if (vowels.includes(vow)) {
          count++;
      }
  }
  return count;
}
// the vowel here is 3
console.log(countVowels("Options"))


function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  return true;
}
// this should give true
console.log(isPrime(7));
// this should give false
console.log(isPrime(10));


function removeDuplicates(arr) {
  return [...new Set(arr)];
}
// this should return ([1, 2, 3, 4, 5])
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


function longestWord(sentence) {
  let words = sentence.split(" ");
  let longest = ""; 

  for (let word of words) {
      if (word.length > longest.length) {
          longest = word; 
      }
  }
  return longest;
}
// should log bestie
console.log(longestWord("She is my bestie")); 


function isPalindrome(str) {
let reversed =str.split('').reverse().join('');
return str == reversed
}

console.log(isPalindrome("racecar"))


function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1)); 
      [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];  
  }
  return arr;
}

console.log(shuffleArray([1, 2, 3, 4, 5, 6, 7, 8, 9]))
