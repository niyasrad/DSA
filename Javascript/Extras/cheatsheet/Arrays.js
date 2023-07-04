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


var groupAnagrams = function(strs) {
    let outputArray = []
    let resultAnagrams = new Map()

    for (let strInstance of strs) {
        const strCheck = strInstance.split('').sort().join('')
        if (resultAnagrams.has(strCheck)) {
            let strAnagrams = resultAnagrams.get(strCheck)
            resultAnagrams.set(strCheck, [...strAnagrams, strInstance])
        } else {
            resultAnagrams.set(strCheck, [strInstance])
        }
    }
    for (let valueInstance of resultAnagrams.values()) {
        outputArray.push(valueInstance)
    }

    return outputArray
}

var topKFrequent = function(nums, k) {
    let outputArray = [];
    let frequencyMap = new Map()
    
    for (let numberInstance of nums) {
        frequencyMap.set(numberInstance, frequencyMap.get(numberInstance) ? frequencyMap.get(numberInstance) + 1 : 1)
    }

    const frequencyArray = [...frequencyMap.entries()].sort((a, b) => b[1] - a[1])
    
    for (let iteration = 0; iteration < k; iteration++) {
        outputArray.push(frequencyArray[iteration][0])
    }
    return outputArray
}

var productExceptSelf = function(nums) {
    const productResult = new Array(nums.length).fill(1)
    let beforeProduct = 1

    for (let iteration = 0; iteration < nums.length; iteration++) {
        productResult[iteration] *= beforeProduct
        beforeProduct *= nums[iteration]
    }

    let afterProduct = 1
    for (let iteration = nums.length - 1; iteration >= 0; iteration--) {
        productResult[iteration] *= afterProduct
        afterProduct *= nums[iteration]
    }

    return productResult
}