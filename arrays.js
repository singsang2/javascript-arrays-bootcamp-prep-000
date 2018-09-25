var chocolateBars = [
  "snikers",
  "hundred grand",
  "kitkat",
  "skittles"]
  
function addElementToBeginningOfArray(a, e){
  return [e, ...a]
}

function destructivelyAddElementToBeginningOfArray(a, e){
  a.unshift(e)
  return a
}

function addElementToEndOfArray(a, e){
  return [...a, e]
}

function destructivelyAddElementToEndOfArray(a, e){
  a.push(e)
  return a
}