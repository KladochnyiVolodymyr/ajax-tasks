var _ = require('lodash');

import {cities,a,b,c,d,products} from './variables';

let uniqRes = _.uniq(cities);
let minPrice = _.minBy(products, 'prise');


console.log(uniqRes);


console.log(_.isEqual(a,b));
console.log(_.isEqual(a,c));
console.log(_.isEqual(a,d));

console.log(minPrice);
