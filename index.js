var recipes = {key: 'value'}

function updateObjectWithKeyAndValue(object, key, value){
  var newObject = Object.assign({}, object);
  return object;
}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}
function deleteFromObjectByKey(object, key){

}
function destructivelyDeleteFromObjectByKey(object, key){
  delete object.key;
  return object;
}
