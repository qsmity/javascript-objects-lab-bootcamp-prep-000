var recipes = {bread: "flour"}

var updateObjectWithKeyAndValue = function(object , key, value){
  const updated = `${key}`
  return Object.assign({}, object, {updated: value})
  
}

var destrutivelyUpdateWithkeyAndValue = function(object, prop, value){
  const newObj = {prop: value}
  return Object.assign(object, newObj)
  
  
}
console.log(updateObjectWithKeyAndValue(recipes, "lasangna" ,"sauce"))
console.log(destrutivelyUpdateWithkeyAndValue(recipes, "save", "me"))