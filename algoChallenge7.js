/**
 * Write a function that takes in an array
 * of numbers and prints out the fifth number in 
 * the array multiplied by 20. Account for the edge case 
 * of there not being a fifth number
 */


//--------------------------My Solution------------------------
function fifthBy20 (arrayOfNumbers){
    if(arrayOfNumbers.length >= 5){
        let theFifth = arrayOfNumbers[4];
        let result = theFifth*20;
        console.log(result);
    }else{
        console.log(`THIS IS NOT VALID`);
    }
}

let sampleArray = new Array(1,2,3,4,5,6,7,8,9);//<-- test
let sampleArray2 = new Array(1,4);//<-- test
let sampleArray3 = new Array(1,2,3,4,5,"pie",6,7);
let sampleArray5 = new Array(1,2,3,4,"pie",6,7);//<-- test
let sampleArray4 = new Array("red", "blue");

fifthBy20(sampleArray);//Returns: 100
fifthBy20(sampleArray2);//Returns: THIS IS NOT VALID
fifthBy20(sampleArray5);//Returns: NaN

// console.log(sampleArray[0]);
//---------------------Kendra's Solution------------------------

