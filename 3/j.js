function bubble(arr) {
  let log = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let cache = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = cache;
        log = true;
      }
    }
    if (log) {
      console.log(arr.join(' '));
      log = false;
    }
  }
}

const data = '4 3 9 2 1'.split(' ');
bubble(data)