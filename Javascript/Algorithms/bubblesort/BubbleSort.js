const inPlaceSwap = (array, i, j) => {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
}


function bubbleSort(array) {

    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 1; j < array.length; j++) {
            if (array[j] < array[j - 1]) {
                inPlaceSwap(array, j, j - 1)
            }
        }
    }
    
    return array
} 

module.exports = bubbleSort