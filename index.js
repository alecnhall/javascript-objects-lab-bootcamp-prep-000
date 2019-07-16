var recipes = {key: 'value'}

function updateObjectWithKeyAndValue(object, key, value){
  var obj = Object.assign({key: value}, object);
  return obj;
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
