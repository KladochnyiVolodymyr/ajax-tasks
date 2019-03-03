/* Task
  Написати функцію copyObject, яка повертала нову копію переданого в неї
  об'єкта

  var oldObj = {a: 1, b:2};

  var newObj = copyObj(oldObj);

*/


export function copyObj( oldObj ) {
  var newObj = {};
  for( let key in oldObj) {
    newObj[key] = oldObj[key];
    if( typeof oldObj[key] === 'object') {
      newObj[key] = copyObj(oldObj[key]);
    }
  }
  return newObj;
}
