var doQuickSort, quickSort, quickSortPartition, swap;

quickSort = function(data, n) {
  var now, starting;
  starting = (new Date()).getTime();
  doQuickSort(data, 0, n - 1);
  now = (new Date()).getTime();
  return now - starting;
};

doQuickSort = function(data, iStart, iEnd) {
  var iPivot;
  if (iStart < iEnd) {
    iPivot = quickSortPartition(iStart, iEnd);
    doQuickSort(data, iStart, iPivot - 1);
    return doQuickSort(data, iPivot + 1, iEnd);
  }
};

swap = function(data, i, j) {
  var t;
  t = data[i];
  data[i] = data[j];
  return data[j] = t;
};

quickSortPartition = function(data, iStart, iEnd) {
  var d, i, iEndOfLeftList, iMid, k, ref, ref1;
  iMid = (iStart + iEnd) / 2;
  swap(data, iStart, iMid);
  d = data[iStart];
  iEndOfLeftList = iStart;
  for (i = k = ref = iStart + 1, ref1 = iEnd; ref <= ref1 ? k <= ref1 : k >= ref1; i = ref <= ref1 ? ++k : --k) {
    if (data[i] < d) {
      iEndOfLeftList++;
      swap(data, iEndOfLeftList, i);
    }
  }
  swap(data, iStart, iEndOfLeftList);
  return iEndOfLeftList;
};