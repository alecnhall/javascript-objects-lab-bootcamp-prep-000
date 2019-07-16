var recipes = {key: 'value'}

function updateObjectWithKeyAndValue(object, key, value){
  var object = Object.assign({}, key, value);
  return object;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}
function destructivelyDeleteObjectByKey(object, key){
  delete object.key;
  return object;
}
