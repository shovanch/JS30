## Notes from this lesson 04

* `Array.prototype.filter()` : We can use filter method to take out items from an array that meets our condition and store them in a new array.
* `Array.prototype.map()` : Map method works like a machine that takes input, process that input and gives output. Here the important distinction is that the resultant array will be of the **SAME LENGTH** as the input array. No item is taken out.
* `Array.prototype.sort()` : In the sort method, we pass an function with two arguments and then compare them, if one is greater than other, it can return 1 or -1 depending on the order of the sort. if both items are equal, it returns 0. If no callback function is given, then it sorts the elements alphabetically. Example :

  ```js
  function compare(a, b) {
    if (a is less than b by some ordering criterion) {
  //if you want to put smaller number at the end of the array, to get an array with descending order return a negative number
      return -1;
    }
    if (a is greater than b by the ordering criterion) {
  //if you want to put smaller number at the begining of the array, , to get an array with descending order return a postive number
      return 1;
    }
    // a must be equal to b
    return 0;
  }
  ```

* `Array.prototype.reduce()` : The reduce method is used to apply a function to each element in the array to reduce the array to a single value. Example,

  ```js
  let result = arr.reduce(callback);
  // Optionally, we can specify an initial value
  let result = arr.reduce(callback, initValue);
  ```

  In a simple way, reduce method keeps a running total & remember what has been returned last time.

* `querySelector()` can be called on any DOM elements, not just on document object.
* We can covert a nodelist of items into an array in 2 ways: <br>

  1. Array.from method:


```js
const resultArray = Array.from(document.querySelectorAll(".class"));
```

2. Using spread operator


```js
const resultArray = [...document.querySelectorAll(".class")];
```
