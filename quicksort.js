// Generated by CoffeeScript 1.10.0
var QuickSort;

QuickSort = (function() {
  function QuickSort(data1) {
    this.data = data1;
    this.time = 0;
    this.space = this.data.length;
    this.current = this.data.length;
    return;
  }

  QuickSort.prototype.doSort = function() {
    var starting;
    starting = window.performance.now();
    this.doQuickSort(this.data, 0, this.data.length - 1);
    return this.time = window.performance.now() - starting;
  };

  QuickSort.prototype.doQuickSort = function(data, iStart, iEnd) {
    var iPivot;
    if (iStart < iEnd) {
      iPivot = this.quickSortPartition(iStart, iEnd);
      this.current += this.iPivot - iStart;
      if (this.current > this.space) {
        this.space = this.current;
      }
      this.doQuickSort(data, iStart, iPivot - 1);
      this.current -= this.iPivot - iStart;
      this.current += iEnd - this.iPivot;
      if (this.current > this.space) {
        this.space = this.current;
      }
      this.doQuickSort(data, iPivot + 1, iEnd);
      return this.current -= iEnd - this.iPivot;
    }
  };

  QuickSort.prototype.swap = function(data, i, j) {
    var temp;
    temp = data[i];
    data[i] = data[j];
    return data[j] = temp;
  };

  QuickSort.prototype.quickSortPartition = function(data, iStart, iEnd) {
    var d, i, iEndOfLeftList, iMid, k, ref, ref1;
    iMid = (iStart + iEnd) / 2;
    this.swap(data, iStart, iMid);
    d = data[iStart];
    iEndOfLeftList = iStart;
    for (i = k = ref = iStart + 1, ref1 = iEnd; ref <= ref1 ? k <= ref1 : k >= ref1; i = ref <= ref1 ? ++k : --k) {
      if (data[i] < d) {
        iEndOfLeftList++;
        this.swap(data, iEndOfLeftList, i);
      }
    }
    this.swap(data, iStart, iEndOfLeftList);
    return iEndOfLeftList;
  };

  return QuickSort;

})();
