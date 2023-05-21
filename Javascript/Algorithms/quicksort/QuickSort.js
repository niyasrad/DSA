// Here we will move on to an intermediate sorting algorithm: quick sort. 
// Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. 
// In this method, a pivot value is chosen in the original array. 
// The array is then partitioned into two subarrays of values less than and greater than the pivot value. 
// We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. 
// This continues until the base case of an empty or single-item array is reached, which we return. 
// The unwinding of the recursive calls return us the sorted array.

function quickSort(array) {

    if (array.length === 0 || array.length === 1) return array

    let pivotIndex = Math.floor(array.length / 2)
    let lesserArray = []
    let greaterArray = []

    for (let i = 0; i < array.length; i++) {
        if (pivotIndex === i) {
            continue
        }
        if (array[i] < array[pivotIndex]) {
            lesserArray.push(array[i])
        } else {
            greaterArray.push(array[i])
        }
    }

    return [...quickSort(lesserArray), array[pivotIndex], ...quickSort(greaterArray)]

}

module.exports = quickSort