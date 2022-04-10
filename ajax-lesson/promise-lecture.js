//--------------------------04/07/22--------------------------------

/**
 * ::::::::::::Promises::::::::::::
 * An object that represents the eventual completion of 
 * an asynchronous operation and its result
 */
//Ex.)
// let myFirstPromise = new Promise(function(resolve, reject){
//     //Go do some async work...
//     let gettingMarried = "Yes";
//     setTimeout(function(){
//         if(gettingMarried === "Yes"){
//             //IF IT SUCCEEDS
//             resolve('-----DONE-----');
//         }else{
//             //IF IT FAILS
//             reject('-----ERROR-----');
//         }
//     },2500) //<-- 2.5milliseconds
// });

// //PROMISE STATES: Pending, Fulfilled (Results), Rejected(Error)
// console.log(myFirstPromise)//Before

// myFirstPromise.then(function(result){
//     console.log(result);
//     console.log(myFirstPromise);
// },function(error){
//     console.log(error);
//     console.log(myFirstPromise);
// });

/**
 * ::::::::::::Fetch Data from an API::::::::::::
 */

//Ex.)

// fetch('https://anapioficeandfire.com/api/characters/583').then(function(response){
//     return response.json();
// });
//NOTE: fetch() by default makes a GET reqest, and it returns a promise

// fetch('https://anapioficeandfire.com/api/characters/hey').then(function(response){
//     return response.json();
// }).then(function(data){
//     console.log(data)//Return 1: SEE BELOW
//     console.log(data.name);//Return 2: Jon Snow
//     console.log(data.culture);//Return 3: Northmen
// }).catch((error)=> {console.log(`There's a Problem: ${error}`)});//<--Everything between the curly brackets and the end parentheses "}...);" 
//is where the reject function would go.

/**
 * Return 1:
 * -----------------
{url: 'https://anapioficeandfire.com/api/characters/583', name: 'Jon Snow', gender: 'Male', culture: 'Northmen', born: 'In 283 AC', …}
aliases: Array(8)
0: "Lord Snow"
1: "Ned Stark's Bastard"
2: "The Snow of Winterfell"
3: "The Crow-Come-Over"
4: "The 998th Lord Commander of the Night's Watch"
5: "The Bastard of Winterfell"
6: "The Black Bastard of the Wall"
7: "Lord Crow"
length: 8
[[Prototype]]: Array(0)
allegiances: Array(1)
0: "https://anapioficeandfire.com/api/houses/362"
length: 1
[[Prototype]]: Array(0)
books: ['https://anapioficeandfire.com/api/books/5']
born: "In 283 AC"
culture: "Northmen"
died: ""
father: ""
gender: "Male"
mother: ""
name: "Jon Snow"
playedBy: Array(1)
0: "Kit Harington"
length: 1
[[Prototype]]: Array(0)
povBooks: Array(4)
0: "https://anapioficeandfire.com/api/books/1"
1: "https://anapioficeandfire.com/api/books/2"
2: "https://anapioficeandfire.com/api/books/3"
3: "https://anapioficeandfire.com/api/books/8"
length: 4
[[Prototype]]: Array(0)
spouse: ""
titles: Array(1)
0: "Lord Commander of the Night's Watch"
length: 1
[[Prototype]]: Array(0)
tvSeries: Array(6)
0: "Season 1"
1: "Season 2"
2: "Season 3"
3: "Season 4"
4: "Season 5"
5: "Season 6"
length: 6
[[Prototype]]: Array(0)
url: "https://anapioficeandfire.com/api/characters/583"
[[Prototype]]: Object
 */

//-----------------------------------------------------------------

