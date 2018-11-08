var recipes = { soup: "leek and potato" };

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign ({}, obj, { [key] : value })
}