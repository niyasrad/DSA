/* 
ARRAY METHODS 

--CREATE--
array = [] - returns null

--UPDATE--

.pop() => remove last element - returns removed element (undefined if not found)
.shift() => remove first element - returns removed element (undefined if not found)

.push() => add element to the last - returns new length
.unshift() => add element to the first - returns new length


--ITERATION--

.find() => returns first element (undefined if not found)
.indexOf() => return index of first element (-1 if not found)
.filter() => returns new array, empty array if not matched

--SIZE--

.length => property to access size of array

*/


var containsDuplicate = function(nums, numsSet = new Set(nums)) {
    return nums.length !== numsSet.size
}

var isAnagram = function(s, t) {
    const reorder = (stringInput) => 
        stringInput
        .split('')
        .sort((a,b) => a.localeCompare(b))
        .join('')

    return reorder(s) === reorder(t)    
}

var twoSum = function(nums, target) {
    const numsMap = new Map()
    let twoSumPair = []
    nums.forEach((value, index) => {
        if (numsMap.has(target - value)) {
            twoSumPair = [index, numsMap.get(target - value)]
            return
        }
        numsMap.set(value, index)
    })
    return twoSumPair
}

var isPalindrome = (s) => {
    let filteredString = s.toLowerCase().replace(/[^\sa-zA-Z0-9]/g, '')
    let reversedString = filteredString.split('').reverse().join('')
    return filteredString === reversedString
}

var isValid = (s, resultArray = []) => {
    for (let i = 0; i < s.length; i ++) {
        if (['(', '{', '['].includes(s[i])) {
            resultArray.push(s[i])
        } else {
            if (s[i] === ']' && resultArray[resultArray.length - 1] === '[') {
                resultArray.pop()
            } else if (s[i] === ')' && resultArray[resultArray.length - 1] === '(') {
                resultArray.pop()
            } else if (s[i] === '}' && resultArray[resultArray.length - 1] === '{') {
                resultArray.pop()
            } else {
                return false
            }
        }
    }
    return resultArray.length === 0
}

var search = function(nums, target) {
    let low = 0
    let high = nums.length - 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (nums[mid] === target) return mid
        else if (nums[mid] > target) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return -1
}

var lengthOfLongestSubstring = function(s, stringSet = new Set()) {
    let maxLengthOfSubstring = 0
    let leftPointer = 0

    for (let rightPointer = 0; rightPointer < s.length; rightPointer ++) {
        while (stringSet.has(s[rightPointer])) {
            stringSet.delete(s[leftPointer])
            leftPointer ++
        }
        stringSet.add(s[rightPointer])
        maxLengthOfSubstring = Math.max(stringSet.size, maxLengthOfSubstring)
    }
    return maxLengthOfSubstring
}
