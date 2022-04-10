//--------------------------04/05/22----------------------------
//What is a Promise:
//an alternative to using callback is asynchronous code 
//represents a value that will arrive eventually.
/**
 * Methods Involved:
 * -------------------
 * .then()
 * .catch()
 */

/**
 * Status Property with the following values:
 * ---------------------------------------------
 * pending
 * fulfilled 
 * rejected
 */

//------------How to use a Promise-------------

//--------------------------04/07/22----------------------------
//Ex.) Promise to retrieve an GOT Data

// let test1 = new Promise(function(success, failure){
//     let request1 = new XMLHttpRequest();
//     request1.open('GET', 'https://anapioficeandfire.com/api/houses/345');//<-- all the houses of got, i think
//     request1.onload = function(){
//         if(request1.status === 200){
//             success(request1.response);
//             console.log('We Did it')
//         }else{
//             failure('SOMETHING WENT WORONG');
//         }
//     }
//     request1.send()
// })

// test1.then(function(data){
//     console.log(data);//Return: SEE DEV TOOLS CONSOLE IN CHROME
//     console.log(data.url);
//     console.log(test1);
// },
// function(error){
//     console.log(error);
//     console.log(test1);
// });
//------------------------------------------------------------------------------------------
//Ex.) A Fetch to retreive Pokemon Data

// fetch('https://pokeapi.co/api/v2/location/')



