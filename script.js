function secondHighest(arr) {
  //Write your code here

  if (arr.length < 2) {
    return -Infinity;
  }

  let max = -Infinity,
    secMax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secMax = max;
      max = arr[i];
    } else if (arr[i] > secMax && arr[i] < max) {
      secMax = arr[i];
    }
  }

  return secMax;
}

function Main() {
  var n = prompt("Enter the number of elements");
  var arr = [];
  for (var i = 0; i < n; i++) {
    arr[i] = prompt("Enter element " + (i + 1));
  }
  alert(secondHighest(arr));
}
Main();
