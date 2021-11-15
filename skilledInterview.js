// given an array of integers sorted in non-descending order,
// return an array of their squares in non-descending order

const sqArray = nums => {
  let start = 0
  let end = nums.length - 1
  let returnArray = []

  while(start <= end){
    if(nums[start]**2 > nums[end]**2){
      returnArray.push(nums[start]**2)
      start++
    } else {
      returnArray.push(nums[end]**2)
      end--
    }
  }

  return returnArray.reverse()
}