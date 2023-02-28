function sort(arr) {
    if (arr.length <= 1) return arr;

    const midIndex = Math.ceil(arr.length / 2);
    const firstHalf = arr.slice(0, midIndex);
    const secondHalf = arr.slice(midIndex);

    const sortedFirstHalf = sort(firstHalf);
    const sortedSecondHalf = sort(secondHalf);

    return mergeSort(sortedFirstHalf, sortedSecondHalf);
}

function mergeSort(arr1, arr2) {
    const sorted = [];

    while (arr1.length > 0 && arr2.length > 0) {
        const lesserValue = arr1[0] < arr2[0] ? arr1 : arr2;
        sorted.push(lesserValue.shift());
    }

    return sorted.concat(arr1).concat(arr2);
}

const array = [7, 3, 5, 1, 2, 4];
const array2 = [-1, 33, 34, 654, 9, 34];
console.log(sort(array));
console.log(sort(array2));
