function binarySearch(array, searchValue) {

    const trackerArray = []
    let lowIndex = 0
    let highIndex = array.length - 1

    while (lowIndex <= highIndex) {

        let midIndex = Math.floor((lowIndex + highIndex) / 2)
        trackerArray.push(array[midIndex])
        if (searchValue === array[midIndex])return trackerArray

        if (searchValue < array[midIndex]) {
            highIndex = midIndex - 1
        } else {
            lowIndex = midIndex + 1
        }

    }

    return "Value Not Found"
}

module.exports = binarySearch