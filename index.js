const mergeSort = (array) => {
    let midpoint = array.length / 2
    let first = array.slice(0, midpoint)
    let second = array.slice(midpoint, array.length)

    if(array.length < 2) {
        console.log(array)
    } else {
        console.log(merge(mergeSort(first), mergeSort(second)))
    }
}