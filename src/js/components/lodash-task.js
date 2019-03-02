var _ = require('lodash');

import {cities,a,b,c,d,products} from './variables';

let uniqRes = _.uniq(cities);
let minPrice = _.minBy(products, 'prise');


console.log(uniqRes);


console.log(_.isEqual(a,b));
console.log(_.isEqual(a,c));
console.log(_.isEqual(a,d));

console.log(minPrice);

console.log(_.sortBy(products, ['prise', 'name']));


let firstObject = {
  name: 'Vova',
  age: 22
};
let secondObject = {
  name: 'Vova',
  age: 22
};

function myeq(firstObject,secondObject) {

  for( let key in firstObject) {
    if(secondObject.hasOwnProperty(key)) {

      if( firstObject[key] === secondObject[key] ) {
          
      }else{
        return console.log('false');
      }
      

    }else{
      return console.log('false');
    }
  }
}
myeq(firstObject,secondObject);
