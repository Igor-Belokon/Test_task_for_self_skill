export default function sortArrayByKey(arr, key) {
  console.log({ key });
  function compareKey(a, b) {
    if (a.hasOwnProperty(key)) {
      if (b.hasOwnProperty(key)) {
        return a[key] < b[key] ? -1 : 1;
      } else {
        return -1;
      }
    } else if (b.hasOwnProperty(key)) {
      return 1;
    } else {
      return 0;
    }
  }
  var sort_arr = arr.sort(compareKey);
  return sort_arr;
}
