/**
 * Write a function that takes in a string
 * and prints out  the 3rd letter. If the string doesn't 
 * have a thrrd letter, print that it doesn't have a third 
 * letter
 */

//-------------------My Solution--------------------
function findTheThird(stringInput){
    if(stringInput.length>= 3){
        console.log(stringInput.charAt(2));
    }else{
        console.log(`NO THIRD INDEX`);
    }
}

findTheThird(`Gabriel`);//Returns: b
findTheThird(`Jefferson`);//Returns: f
findTheThird(`go`);//Returns: NO THIRD INDEX

//-------------------Ronnie's Solution----------------