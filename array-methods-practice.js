//--------------------------04/06/22------------------------------

//Ex.) 
let sample1 = []; //Create an array
sample1.push(`item1`);//append an item to the array
sample1.push(`item2`);
sample1.push(`item3`);
console.log(sample1);//Returns: [ 'item1', 'item2', 'item3' ]

sample1.pop(`item1`);//Removes the LAST item from an array
sample1.pop(`item2`);
console.log(sample1);//Returns: [ 'item1' ]

sample1.push(`red`);
sample1.push(`green`);
sample1.push(`yellow`);
sample1.push(`pink`);
sample1.push(`purple`);
sample1.push(`orange`);
console.log(sample1);

/**
 * Returns:
 * -----------
 * [
    'item1',  'red',
    'green',  'yellow',
    'pink',   'purple',
    'orange'
  ]
 */

//-------------.sort() Method------------------

//Ex.)
let sample2 = [];
sample2.push(`car`);
sample2.push(`apple`);
sample2.push(`zebra`);
sample2.push(`orange`);
console.log(sample2);//Returns: [ 'car', 'apple', 'zebra', 'orange' ]
sample2.sort();
console.log(sample2);//Returns: [ 'apple', 'car', 'orange', 'zebra' ], in alphabetical order

console.log(typeof(sample2));

//--------------Array.prototype.groupBy()----------------



//-------------.reverse() Method---------------

//-------------.slice() Method-----------------

//-------------.splice() Method----------------









 