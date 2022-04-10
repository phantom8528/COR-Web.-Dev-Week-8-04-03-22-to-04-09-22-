//-------------------------04/07/22------------------------------
//--------Object.hasOwn()-------------
//Ex.)
const lab1 = new Map();
lab1.set(`mouse1`, "Red");
lab1.set(`mouse2`, "green");
lab1.set(`mouse3`, "cheese");

console.log(Object.hasOwn(lab1, `mouse2`));//Returns: False
