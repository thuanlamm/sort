var generateRandomData, generateReversedData, generateSortedData, insertionSort, show;

generateRandomData = function(n) {
  var i, k, ref;
  for (i = k = 1, ref = n; 1 <= ref ? k <= ref : k >= ref; i = 1 <= ref ? ++k : --k) {
    data.push(Math.floor(Math.random() * n));
  }
  return data;
};

generateReversedData = function(n) {
  var i, k, ref;
  for (i = k = 1, ref = n; 1 <= ref ? k <= ref : k >= ref; i = 1 <= ref ? ++k : --k) {
    data.push(n + Math.floor(Math.random() * (n / 20)) - Math.floor(n / 40));
  }
  return data;
};

generateSortedData = function(n) {
  var i, k, ref;
  for (i = k = 1, ref = n; 1 <= ref ? k <= ref : k >= ref; i = 1 <= ref ? ++k : --k) {
    data.push(i + Math.floor(Math.random() * (n / 20)) - Math.floor(n / 40));
  }
  return data;
};

insertionSort = function(data, n) {
  var i, j, k, now, ref, starting, value;
  starting = (new Date()).getTime();
  for (i = k = 1, ref = n - 1; 1 <= ref ? k <= ref : k >= ref; i = 1 <= ref ? ++k : --k) {
    j = i - 1;
    value = data[i];
    while (j >= 0 && value < data[j]) {
      data[j + 1] = data[j];
      j = j - 1;
    }
    data[j + 1] = value;
    now = (new Date()).getTime();
  }
  return now - starting;
};

show = function(data, time1, time2, n) {
  var i, k, ref, results;
  results = [];
  for (i = k = 0, ref = n - 1; 0 <= ref ? k <= ref : k >= ref; i = 0 <= ref ? ++k : --k) {
    results.push(console.log('@' + time1[i] + ' @' + time2[i] + ': ' + data[i]));
  }
  return results;
};