/** Challenge 9.
 * --------------Instructions----------------
 * Write a function that takes in a number (minutes), then 
 * converts it to seconds. Print "that is a lot of seconds" 
 * when the seconds is above 5000 seconds.
 * ------------------------------------------
 */

function toSeconds(num){
    let seconds = num*60; 
    if(seconds>5000){
        console.log(`Result: ${seconds} seconds | Thats is alot of seconds`);
    }else{
        console.log(`Result: ${seconds} seconds`);
    }
}

toSeconds(5);//Result: 300 seconds
toSeconds(10);//Result: 600 seconds
toSeconds(30);//Resutl: 1800 seconds
toSeconds(180);//Result: 10800 seconds | That is alot of seconds
//--------------------------------------------------------------------------

/** Challenge 10.
 * ------------Instructions------------------
 * Write a function that takes in an array of letters. 
 * Convert the array into an object that has 
 * each value as a key and its value should be true if it 
 * is a vowel or false if it is not. Print the object to 
 * the screen.
 * --------------------------------------------
 */

//1.) Identify letters that are vowels: a,e,i,o,u

//2.) Create a sample array of letters:
let myName = ["g", "a", "b", "r", "i", "e", "l"];

//3.)Create a function:
function objectFullOfValues(arr){
    let vowelFilter = new Map(); //4. Create an Object/Map to hold all of the letter/boolean key/value pairs
    let i=0;
    while (i < arr.length){ //5. Loop through the given array
        //6. Compare the items in the Map with given condition
        if(arr[i] === "a" || arr[i] === "e" || arr[i] === "i" || arr[i] === "o" || arr[i] === "u"){
            vowelFilter.set(`${arr[i]}`, true); //7. Assign true if condition is met (is a vowel)
            
        } else{
            vowelFilter.set(`${arr[i]}`, false);//8. Assign false if condition is not met (not a vowel)
        }
        i++//<-- Index
    }
    return vowelFilter;//9. Return the Map Object once the looping is complete

}
console.log(objectFullOfValues(myName));//10. Test using the myName array

/**
Returns:
---------------
Map(7) {
  'g' => false,
  'a' => true,
  'b' => false,
  'r' => false,
  'i' => true,
  'e' => true,
  'l' => false
}
 */

//-----------------------------Challenge 10 | Teacher Solution------------------------------------
function convertLetterArrayToObject(letters){
    //Allows me to easily look up and check each letter against vowels
    const vowels = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true
    };

    const letterObject = {};
    letters.forEach(function(letter){
        let isVowel = false;
        if(vowels[letter] === true){
            isVowel = true;
        }
        letterObject[letter] = isVowel //<--Adds key/value to letterObject
        isVowel = false;
    
    })
    return letterObject;

}
console.log(convertLetterArrayToObject([`a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`]));

/**
Returns:
---------------
{
  a: true,
  b: false,
  c: false,
  d: false,
  e: true,
  f: false,
  g: false,
  h: false
}
 */

//-----------------------------Challenge 10 | My Solution | Approach 2--------------------------------
function version2 (arr){
    let sampleObject = {};
    let x = 0;
    while (x<arr.length){
        if(arr[x] === "a" || arr[x] === "e" || arr[x] === "i" || arr[x] === "o" || arr[x] === "u"){
            sampleObject[arr[x]] = true;
        }else{
            sampleObject[arr[x]] = false
        }
        x++;
    }
    console.log(sampleObject);
}
version2(myName);//Returns: { g: false, a: true, b: false, r: false, i: true, e: true, l: false }

