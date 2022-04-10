//------------------------------04/07/22---------------------------------------

//::::::::::::::::::::::::::Intermediate Level:::::::::::::::::::::::::::::::::
/**
 * Create a function that takes an array of 
 * numbers and return both the minimum and maximum numbers, 
 * in that order.
 */

//Approach 1;

// let sample1 = [1,2,3,4,5,6,7,8,9];

// function minMax (arr){
//     console.log(`${Math.min(...arr)} is the smallest number in the array
//                 and ${Math.max(...arr)} is the largest value in the array\n`);
// }

// minMax(sample1);

// /**
// 1 is the smallest number in the array
// and 9 is the largest value in the array
//  */

// //Approach 2: 

// function minMax2(arr) {
// 	let min = Math.min(...arr);
// 	let max = Math.max(...arr);
// 	let newArr = [];
//     newArr.push(min);
// 	newArr.push(max);
// 	console.log(newArr);
// }
// minMax2(sample1);//Returns:  [ 1, 9 ]

// //Approach 3:
// function minMax3(arr) {
// 	let min = Math.min(...arr);
// 	let max = Math.max(...arr);
// 	let newArr = [];
//     newArr.push(min);
// 	newArr.push(max);
//     return newArr;
// }
// console.log(minMax3(sample1));//Returns: [ 1, 9 ]

//---------------------------------------------------------------------------------------------

/**
 * This challenge will help you interpret mathematical 
 * relationships both algebraically and geometrically.

 * Create a function that takes a number (step) as an argument 
 * and returns the number of matchsticks in that step. 
 * See step 1, 2 and 3 in the image above.
 */

//Approach 1: 

// function matchHouses(step) {
//     if(step === 0){
//         return 0;
//     }else{
//         let result = (step*5)+1;
//         return result;
//     }
// }

// console.log(matchHouses(1));//Returns: 6
// console.log(matchHouses(0));//Returns: 0



//---------------------------------------------------------------------------------------------

/**
 * The left shift operation is similar 
 * to multiplication by powers of two.

Sample calculation using the left shift operator (<<):
 * 
 * Write a function that mimics (without the use of <<) the left shift operator
 *  and returns the result from the two given integers.
 */

//Approach 1:

// function shiftToLeft(x, y) {
// 	let result = x * y**2;
// 	return result;
	
// }

// console.log(shiftToLeft(5,2));//Returns: 20
// console.log(shiftToLeft(10,3));//Returns: 90, instead of 80

//Approach 2:

// function shiftToLeft(x, y) {
// 	let result = x * 2**y;
// 	return result;
	
// }

// console.log(shiftToLeft(5,2));//Returns: 20
// console.log(shiftToLeft(10,3));//Returns: 80

//Approach 3:

// function shiftToLeft(x, y) {
//     if(y < 0){
//         y = y * -1; //Accounts for y being a negative number
//         let result = x * 2**y;
//         return result;

//     }else{
//         let result = x * 2**y;
//         return result;

//     }
// }

// console.log(shiftToLeft(5,2));//Returns: 20
// console.log(shiftToLeft(10,3));//Returns: 80
// console.log(shiftToLeft(10,-4));//Returns: 160

//---------------------------------------------------------------------------------------------

/**
 * Write three functions to calculate the bitwise 
 * AND, bitwise OR and bitwise XOR of two numbers.
 */

//Approach 1:

// function bitwiseAND(n1, n2) {
//     let result = (n1&n2);
//     return result;
	
// }

// function bitwiseOR(n1, n2) {
//     let result = n1|n2;
//     return result;
	
// }

// function bitwiseXOR(n1, n2) {
//     let result = n1^n2;
//     return result;
	
// }
// console.log(bitwiseAND(1,6));//0
// console.log(bitwiseOR(1,6));//7
// console.log(bitwiseXOR(1,6));//7

//------------------------------04/08/22---------------------------------------

/**
 * Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! 
 * Create a function that accepts a Date object 
 * and returns true if it's Christmas Eve (December 24th) and false otherwise. 
 * Keep in mind JavaScript's Date month is 0 based, 
 * meaning December is the 11th month while January is 0.
 */








