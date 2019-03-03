function myeq(firstObject, secondObject) {

  if (Object.keys(firstObject).length !== Object.keys(secondObject).length) {
    return false;
  }

  for (let key in firstObject) {
    //console.log(key);
    if (secondObject.hasOwnProperty(key)) {

      if (firstObject[key] !== secondObject[key]) {
        if (!(Number.isNaN(firstObject[key]) && Number.isNaN(secondObject[key]))) {
          return false;
        }
      }

    } else {
      return false;
    }
  }

  return true;
}

export{myeq};
