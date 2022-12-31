Array.prototype.binarySearch = function (item) {
  let low = 0;
  let high = this.length - 1;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);

    const ele = this[mid];

    if (ele < item) {
      low = mid + 1;
    } else if (ele > item) {
      high = mid - 1;
    } else {
      return mid;
    }
  }

  return -1;
};

// 前提 有序数组

const res = [1, 2, 3, 4, 5].binarySearch(5);
