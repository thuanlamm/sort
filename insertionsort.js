var generateData, insertionSort, show;

generateData = function(n) {
  var data, i, k, ref;
  data = [];
  for (i = k = 1, ref = n; 1 <= ref ? k <= ref : k >= ref; i = 1 <= ref ? ++k : --k) {
    data.push(Math.floor(Math.random() * n));
  }
  return data;
};

insertionSort = function(data, time, n) {
  var delta, i, j, k, now, ref, results, starting, value;
  starting = (new Date()).getTime();
  console.log(starting);
  time.push(0);
  results = [];
  for (i = k = 1, ref = n - 1; 1 <= ref ? k <= ref : k >= ref; i = 1 <= ref ? ++k : --k) {
    j = i - 1;
    value = data[i];
    while (j >= 0 && value < data[j]) {
      data[j + 1] = data[j];
      j = j - 1;
    }
    data[j + 1] = value;
    now = (new Date()).getTime();
    delta = now - starting;
    time.push(delta);
    results.push(console.log(time[i - 1] + ' ' + data[j - 1]));
  }
  return results;
};

show = function(data, time, n) {
  var i, k, ref, results;
  results = [];
  for (i = k = 0, ref = n - 1; 0 <= ref ? k <= ref : k >= ref; i = 0 <= ref ? ++k : --k) {
    results.push(console.log('@' + time[i] + ': ' + data[i]));
  }
  return results;
};