const swapToFront = (array, i, j) => {
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp;
}


function selectionSort(array) {

    for (let i = 0; i < array.length; i++) {
        let smallestIndex = i;
        for (let j = i; j < array.length; j++) {
            if (array[j] < array[smallestIndex]) {
                smallestIndex = j
            }
        }
        swapToFront(array, smallestIndex, i)
    }

    return array
}

module.exports = selectionSort