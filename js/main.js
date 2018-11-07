// 1. In this simple assignment you are given a number and have to make it negative. 
// But maybe the number is already negative?
// Example:
// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12

// Notes:

// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.



// start your work here:



// write your function here

var x = makeNegative(1);   
function makeNegative(a) {

// call function 
    console.log(a);         
}
  
  
  

// 2. Given an array of integers, return a new array with each value doubled.
// For example:
// [1, 2, 3] --> [2, 4, 6]
// For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.


// write function here
var numbers = [8, 12, 5, 2, 5, 7];
var doubledNumbers = [];


function doubled(arr){
 for (var i = 0; i < arr.length; i ++){
  var dub = arr[i];
   var dubb = dub*2;
   doubledNumbers.push(dubb);
 }

}

var collectionNumbers = {
  orginialNumbers: numbers,
  doubledNumbers: doubled(numbers)
};

console.log(numbers, doubledNumbers);


  
  
  // 3. You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value.
  // Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.
  
  // write function here
  var a, x;

    a = 10;
    x = 21;

    if (a = 10) {
        boolean1 = true;

         // call function here
        console.log((boolean1) , ' found: ', a);
    } 

    else (a > 10); {
        boolean1 = false;

         // call function here
        console.log((boolean1) ,' not found');

    } 

    if (x = 20) {
        boolean2 = true;

         // call function here
        console.log((boolean2) ,' found: ' , a);
    } 

    else (x > 20); {
        boolean2 = false;

         // call function here
        console.log((boolean2) , ' not found');

    } 


    
  
  // call your function here
  
  // 4. Bonus Exercise 
  // Life isn't always easy as a small word amongst big words. If only they had a code warrior to help them out...
  
  // Your task is to make all words which are 3 characters or less into capitals. You should also remove any vowels from 'long' (4 characters or more) words.
  
  // For example:
  // "The quick brown fox jumps over the lazy dog"
  
  // Should become:
  // "THE qck brwn FOX jmps vr THE lzy DOG"
  
  // For the purposes of this exercise, mid-word punctuation counts towards the character limit of a word.
  // e.g: "it's / I'm" should become: "t's / I'M"