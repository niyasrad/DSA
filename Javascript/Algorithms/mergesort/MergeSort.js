const merge = (array1, array2) => {
    let output = []
    
    let i = 0;
    let j = 0;

    while (i !== array1.length && j !== array2.length) {
        if (array1[i] < array2[j]) {
            output.push(array1[i])
            i++
        } else {
            output.push(array2[j])
            j++
        }
    }
    if (i !== array1.length) {
        output.push(...array1.slice(i))
    }
    if (j !== array2.length) {
        output.push(...array2.slice(j))
    }

    return output
}

function mergeSort(array) {
    if (array.length === 1 || array.length === 0) return array
    return merge(mergeSort(array.slice(0, Math.floor(array.length / 2))), mergeSort(array.slice(Math.floor(array.length / 2))))
}

module.exports = mergeSort