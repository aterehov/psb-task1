function merge(sorted, m, nums2, n) {
  let nums1 = [...sorted];

  let curind1 = 0;
  let curind2 = 0;
  for (let i = 0; i < m + n; ++i) {
    if (curind2 >= n || (curind1 < m && nums1[curind1] < nums2[curind2])) {
      sorted[i] = nums1[curind1];
      ++curind1;
    } else {
      sorted[i] = nums2[curind2];
      ++curind2;
    }
  }
}

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);
