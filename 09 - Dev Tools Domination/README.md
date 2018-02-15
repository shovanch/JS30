## Notes from Lesson 09

* We interpolate values in `console.log()` like this , `console.log('Hello, %s Wassup', '😎');` or using ES6 template literals.
* **`console.assert()`** : We can peform basic tests using this command. The statement inside, runs only if it returns false.
  `console.assert(5 % 2 === 2, 'This is wrong');`
* `console.dir()` : Gives detailed information about an item
* We can group items using `console.group(statement)`. Ending with `console.groupEnd(statement)`
* `console.time()` returns the time it took to perform a task. Using it like this,
  ```javascript
  console.time("Get data");
  fetch("https://api.github.com/users/shovanch")
    .then(data => data.json())
    .then(data => {
      console.timeEnd("Get data");
      console.log(data);
    });
  // Returns the time it took to perform 'Get dat' task
  ```
