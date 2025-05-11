const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  } else if (arr.length === 0) {
    return [];
  } else {
    const middle = Math.ceil(arr.length / 2);
    const leftArr = arr.slice(0, middle);
    const leftSortedArr = mergeSort(leftArr);
    const rightArr = arr.slice(middle);
    const rightSortedArr = mergeSort(rightArr);

    //Merge
    const sortedArr = [];
    while (leftSortedArr.length > 0 && rightSortedArr.length > 0) {
      if (leftSortedArr[0] <= rightSortedArr[0]) {
        sortedArr.push(leftSortedArr.shift());
      }
      else {
        sortedArr.push(rightSortedArr.shift());
      }
    }
    if (leftSortedArr.length > 0) {
      sortedArr.push(...leftSortedArr);
    } else {
      sortedArr.push(...rightSortedArr);
    }
    return sortedArr;
  }
};

console.log(mergeSort([]));
console.log(mergeSort([105, 79, 100, 110]));
console.log(mergeSort([6, 3, 4, 1, 5, 2, 7, 0]));