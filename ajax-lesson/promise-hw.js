//-----------------------------Homework (04/07/22)-------------------------------------------

//Ex.1) Output when there's an error
fetch('https://anapioficeandfire.com/api/characters/400').then(function(response){
    return response.json();
}).then(function(data){
    console.log(data)//Return 1: SEE BELOW
    console.log(data.name);//Return 2: Jon Snow
    console.log(data.culture);//Return 3: Northmen
}).catch((error)=> {
    console.log(`There's a Problem: ${error}`);

});

//Ex.2)Get similar output using a conventional promise
let test2 = new Promise(function(resolve, reject){
    let request2 = new XMLHttpRequest();

    request2.open('GET', 'https://anapioficeandfire.com/api/characters/580');
    request2.onload = function(){
        if(this.status === 200){
            resolve(`------YOU DID IT------`);
        }else{
            reject(`---------YOU BROKE IT---------`);
        }
    }

    request2.send();

});

// test2.then(
//     function(result){
//         console.log(test2);
//         console.log(result);
// },
//     function(error){
//         console.log(test2);
//         console.log(error);
// }
// );

//Ex.3)
fetch('https://pokeapi.co/api/v2/pokemon-species/').then(function(response){
    return response.json();
}).then(function(data){
    // console.log(ditto);
    console.log(data);
}).catch(function(error){
    console.log(`There's a Problem: ${error}`);
    // console.log(test2);

});



