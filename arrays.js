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
}

function addElementToEndOfArray(a, e){
  return [...a, e]
}

function destructivelyAddElementToEndOfArray(a, e){
  return a.push(e)
}