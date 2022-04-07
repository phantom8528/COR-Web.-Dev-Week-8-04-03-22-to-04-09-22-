/**
 * Write a function that takes in a string and prints
 * a boolean if the first and last characters are the same
 * or not
 */

//---------------------My Solution--SUCCESSFUL-------------------
function firstAndLast (string){
    let similar = true
    for (i in string){
        if(string.charAt(0) === string.charAt(string.length-1)){
            console.log(`They're Similar`)
            console.log(similar);
            break
        }else{
            similar = false;
            console.log(`They're not similar`)
            console.log(similar);
            break;
        }
    }
}

firstAndLast('tot');
/**
 * Returns: 
 * -----------
They're Similar
true
 */
firstAndLast(`cat`);
/**
 * Returns:
 * -----------
They're not similar
false
 */

//----------------Cory's Solution------------------------
