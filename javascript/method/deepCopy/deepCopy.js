/*
* 深拷贝
* */

function deepCopy( obj ) {
  let result = '';
  if(typeof obj === 'object') {
    result = obj.constructor === Array ? []: {};
    for(let key in obj) {
      let value = obj[key];
      result[key] = typeof value === 'object'? deepCopy(value): value;
    }
  } else {
    result = obj;
  }

  return result;
}
