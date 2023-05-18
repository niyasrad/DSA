function pairwise(arr, arg) {

    const pairIndexes = {}
    let indexSum = 0
    for (let i = 0; i < arr.length; i++) {
        if (pairIndexes['' + i] === true) continue
        let possibleIndex = arr.indexOf(arg - arr[i])
        while (possibleIndex !== -1 ) {
            if (possibleIndex !== i && !pairIndexes['' + possibleIndex]) {
                indexSum += i + possibleIndex
                pairIndexes['' + i] = true
                pairIndexes['' + possibleIndex] = true
                break
            } else {
                if (possibleIndex === arr.length - 1) break
                if (arr.slice(possibleIndex + 1).indexOf(arg - arr[i]) === -1) break
                possibleIndex += arr.slice(possibleIndex + 1).indexOf(arg - arr[i]) + 1
            }
        }
    }

    return indexSum
}

module.exports = pairwise