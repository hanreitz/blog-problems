// Brute force solution

// const maxSumOfThree = arrayInput => {
//   let highestSum = -Infinity
//   let currentSum
//   for(let i = 0; i < arrayInput.length - 3; i++){
//     currentSum = 0;
    
//     for(let j = i; j < i + 3; j++){
//       currentSum += arrayInput[j]
//     }
//     highestSum = Math.max(highestSum, currentSum)
//   }
//   return highestSum
// };

// Sliding window solution - fixed-size window

// const maxSumOfThree = arrayInput => {
//   const reducer = (previous, current) => previous + current
//   let currentSum = arrayInput.slice(0,4).reduce(reducer)
//   let highestSum = currentSum
//   for(let i = 1; i <= arrayInput.length - 3; i++){
//     currentSum -= arrayInput[i - 1]
//     currentSum += arrayInput[i + 4]
//     highestSum = Math.max(highestSum, currentSum)
//   }
//   return highestSum
// };

// Variable sliding window solution

const smallestRepeatWindow = arrayInput => {
  let smallestWindow = Number.MAX_SAFE_INTEGER
  let window = [];
  let left = 0;

  for(let right = 0; right < arrayInput.length; right++){
    window.push(arrayInput[right])

    while(window.filter(elem => elem === arrayInput[right]).length > 1){

      if(arrayInput[left] === arrayInput[right]){
        smallestWindow = Math.min(smallestWindow, (right - left))
      }
      left++
      window.shift()
    }
  }

  console.log(smallestWindow)
  return smallestWindow

  // let smallestWindow = Infinity
  // let currentWindow = []
  
  // for(let i = 0; i < arrayInput.length; i++){
  //   if(arrayInput[i] !== undefined && !currentWindow.includes(arrayInput[i])){ 
  //     currentWindow.push(arrayInput[i])
  //   } else {
  //     console.log(currentWindow)
  //     smallestWindow = Math.min(smallestWindow, currentWindow.length)
  //     currentWindow = currentWindow.slice(currentWindow.indexOf(arrayInput[i]) + 1) 
  //     i--
  //   }
  // }
  // console.log(smallestWindow)
  // return smallestWindow
};

const myArray = [7,4,2,1,8,9,5,2,5]
smallestRepeatWindow(myArray)