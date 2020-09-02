function isnt(value) {
  return value === undefined || value === null || value === '';
}

function objValEmpty(obj, key) {
  const value = obj[key];
  const isEmpty = isnt(value);
  if (isEmpty === true) {
    console.warn(`${key} is "${value}".`);
    return true;
  }
  if (isEmpty === false && typeof value === 'object') {
    return nonEmpty(value) === false;
  }
  return isEmpty;
}

function nonEmpty(obj) {
  if (isnt(obj)) return false;
  const callback = objValEmpty.bind(null, obj);
  return Object.keys(obj).some(callback) === false;
}

export default nonEmpty;
