//---------------------------04/04/22-----------------------------
//NOTE: A Promise - are used to handle asynchronous tasks

//Ex.) Example from Canvas
let countValue = new Promise(function(resolve, reject){
    reject('Promise rejcted');
});

//executes when a promise is resolved successfully
countValue.then(
    function succesValue(result){
        console.log(result);
    }
);
//-------------------------------------------------------------------

    