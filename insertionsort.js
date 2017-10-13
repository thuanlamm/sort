// Generated by CoffeeScript 1.10.0
var InsertionSort;

InsertionSort = (function() {
  function InsertionSort(data) {
    this.data = data;
    this.time = 0;
    this.space = 0;
    return;
  }

  InsertionSort.prototype.doSort = function() {
    var i, j, k, l, ref, starting, t, temp, value;
    this.space = this.data.length;
    starting = window.performance.now();
    for (t = k = 1; k <= 5; t = ++k) {
      temp = this.data.slice();
      for (i = l = 1, ref = temp.length - 1; 1 <= ref ? l <= ref : l >= ref; i = 1 <= ref ? ++l : --l) {
        j = i - 1;
        value = temp[i];
        while (j >= 0 && value < temp[j]) {
          temp[j + 1] = temp[j];
          j = j - 1;
        }
        temp[j + 1] = value;
      }
    }
    this.time = (window.performance.now() - starting) / 5;
    return this.data = temp;
  };

  return InsertionSort;

})();
