var recipes = { soup: "leek and potato" };

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign ({}, obj, { [key] : value })
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value) {
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(object, key) {
  delete object.key;
}