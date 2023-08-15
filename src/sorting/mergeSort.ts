// function mergeSort(nums: number[]): number[] {
//   if (nums.length === 1) {
//     return nums;
//   }
//   let mid = Math.floor(nums.length - 1) / 2;
//   const leftArr = mergeSort(nums.slice(0, mid + 1));
//   const rightArr = mergeSort(nums.slice(mid + 1, nums.length));
//   return merge(leftArr, rightArr);
// }

// function merge(leftArr: number[], rightArr: number[]): number[] {
//   let [i, j, k] = [0, 0, 0];
//   const mergedArr = new Array(leftArr.length + rightArr.length);
//   while (i < leftArr.length && j < rightArr.length) {
//     if (leftArr[i] < rightArr[j]) {
//       mergedArr[k] = leftArr[i];
//       i++;
//     } else {
//       mergedArr[k] = rightArr[j];
//       j++;
//     }
//     k++;
//   }
//   while (i < leftArr.length) {
//     mergedArr[k] = leftArr[i];
//     k++;
//     i++;
//   }
//   while (j < rightArr.length) {
//     mergedArr[k] = rightArr[j];
//     k++;
//     j++;
//   }
//   return mergedArr;
// }
function mergeSort(nums: number[], l: number, r: number) {
  if (l === r) return;
  let mid = Math.floor((l + r) / 2);
  mergeSort(nums, l, mid);
  mergeSort(nums, mid + 1, r);
  merge(nums, l, mid, r);
}

function merge(nums: number[], l: number, mid: number, r: number) {
  let [i, j, k] = [l, mid + 1, 0];
  const mergedArr = new Array(r - l + 1);
  while (i < mid + 1 && j < r + 1) {
    if (nums[i] < nums[j]) {
      mergedArr[k] = nums[i];
      i++;
    } else {
      mergedArr[k] = nums[j];
      j++;
    }
    k++;
  }
  while (i < mid + 1) {
    mergedArr[k] = nums[i];
    k++;
    i++;
  }
  while (j < r + 1) {
    mergedArr[k] = nums[j];
    k++;
    j++;
  }
  for (let k = 0; k < mergedArr.length; k++) {
    nums[k + l] = mergedArr[k];
  }
}

export function main() {
  let arr = [5, 1, 1, 2, 0, 0];
  mergeSort(arr, 0, arr.length - 1);
  return arr;
}
