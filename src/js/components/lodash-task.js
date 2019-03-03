var _ = require('lodash');

import {cities,a,b,c,d,products} from './variables';
import {myeq} from './equalityObjects';
import {copyObj} from './copyObject';

let uniqRes = _.uniq(cities);
let minPrice = _.minBy(products, 'prise');

/*
console.log(uniqRes);


console.log(_.isEqual(a,b));
console.log(_.isEqual(a,c));
console.log(_.isEqual(a,d));

console.log(minPrice);

console.log(_.sortBy(products, ['prise', 'name']));
*/

let firstObject = {
  name: 'Vova',
  age: 22,
  test: NaN
};
let secondObject = {
  name: 'Vova',
  age: 22,
  test: NaN
};

console.log(myeq(firstObject, secondObject));


var oldObj = {
  a: 1, 
  b: 2, 
  с: function() {
    
  }
};

var newObj = copyObj(oldObj);

oldObj.с.test = 22;

console.log(oldObj);
console.log(newObj);
