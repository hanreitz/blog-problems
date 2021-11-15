// [1,2] => [2,1]
// [1,2,3,1] -> [6,3,2,6]
// make a function that takes an array and produces an output array that has the product
// of every member of the original array EXCEPT the current index as the current index

const makeProd = array => {
  let product = 1
  for(let i = 0; i < array.length; i++){
    product *= array[i]
  }
  return product
}

const multArray = input => {
  // handle edge case of multiple zeroes
  const zeroes = input.filter(elem => elem === 0)
  if(zeroes.length > 1){
    return new Array(input.length).fill(0)
    // handle edge case of one zero
  } else if (zeroes.length === 1){
    let zeroArray = new Array(input.length).fill(0)
    for(let k = 0; k < input.length; k++){
      if(input[k] === 0){
        let product = makeProd(input.slice(0, k)) * makeProd(input.slice(k + 1, input.length))
        zeroArray[k] = product
      }
    }
    return zeroArray
  } else {
    // non-zero array, main case, 2n solution
    let product = makeProd(input)

    let returnArray = []
    for(let j = 0; j < input.length; j++){
      returnArray.push(product/(input[j]))
    }
    return returnArray
  }
}