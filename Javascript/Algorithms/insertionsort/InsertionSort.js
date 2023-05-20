const swapInPlace = (array, i , j) => {
    const temp = array[j]
    array[j] = array[i]
    array[i] = temp
}

function insertionSort(array) {

    for (let i = 0; i < array.length; i++) {
        for (let j = i; j > 0; j--) {
            if (array[j] > array[j - 1]) {
                break
            }
            swapInPlace(array, j, j - 1)
        }
    }

    return array
}

module.exports = insertionSort