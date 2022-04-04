//-----------------------HomePractice (04/03/22)----------------------
//NOTE: Regular Expressions: They are a type of object that can be constructed or created 
//using a literal

// let regularExpressionConstructor = new RegExp("abc"); // for dynamic regex
// let regularExpressionLiteral = /abc/; //for regex that remain constant

//Ex.)
const myRegEx = /Hello World/; //literal apprach
const test = myRegEx.test("Hello World");
console.log(test);//Returns: true

//Ex.)
const myRegEx2 = new RegExp("is Gabriel");
const test2 = myRegEx2.test("Hello, My Name is Gabriel Jefferson");
console.log(test2);//Returns: true

//Ex.)
const myRegEx3 = new RegExp("is Okay");
let message = `Hey guys, mom is okay`;
const testMessage = myRegEx3.test(message);
console.log(testMessage);//Returns: false, because of the uppercase O 

//lets try that again

let message2 = `Hey guys, moms is Okay`;
const testMessage2 = myRegEx3.test(message2);
console.log(testMessage2);//Returns: true


//------------We can also use string methods to update our variable based on our pattern----------

//Ex.)
const myRegEx4 = /\s/;
const oldString = `Hello World`;
const newString = oldString.replace(myRegEx4,`-`);
console.log(newString);//Returns: Hello-World

//----------------------Validating Forms with JavaScript------------------
//NOTE: using if statements for form validation is useful for legacy browswes that
//don't support HTML built-in validation
