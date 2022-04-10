/**
 * Challenge 11.
 * --------------------------
 * Given an unsorted array arr of nonnegative integers and an integer sum, 
 * find a continuous subarray which adds to a given sum. 
 * There may be more than one subarrays with sum as the given sum, print first such subarray. 
 */

//Approach 1:
//1.) Create a sample Array to test with
//2.) Create a function that takes in an array of numbers as a parameter.
//3.)--> name a variable currentSum and assign it the value of zero
//4.)--> Loop through the array with the following condition for the length of the array
//5.)---> a. multiply the number by -1 in order to account for negative values
//6.)---> b. add the number to the current sum resulting in a new sum
//7.)---> c. push the number into a new array
//8.)---> d. if sum equals the given number, break the loop
//9.)--> return the current sum and the contents of the new array that add up to the sum


//---------------------------------Teacher Solution-------------------------------------------------
function sumOfSubArray(numbers, targetSum) {
    let currentSum = 0;
    let currentNumber = null;
    for (let index = 0; index < numbers.length; index++) {
        currentNumber = numbers[index]; console.log('CURRENT NUMBER:', currentNumber);
        currentSum = currentNumber; console.log('CURRENT SUM:', currentSum)
        for (let innerIndex = index+1; currentSum < targetSum; innerIndex++) {
            console.log('NEXT NUMBER TO ADD:', numbers[innerIndex]);
            currentSum += numbers[innerIndex]; console.log('INNER CURRENT SUM:', currentSum);
            if (currentSum === targetSum) {
                return console.log([index, innerIndex]);
            }
        }
    }
    return console.log(-1);
}
sumOfSubArray([1,2,3,4,5,6,7], 9);

