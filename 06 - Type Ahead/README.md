## Notes from Lesson 06

* The workflow of the code => Make the API call, convert the returned data to json and then store them in an array. When the user types on the search-input field, it fires up change and keyup event, which calls `displayMatches()` function. `displayMatches()` takes the inputted value and pass it to `findMatches()` as an argument. `findMatches()` takes the value and the array containing data and using `array.filter()` and regular expression, return the places matching the inputted value. `displayMatches()` loops over the returned array using `array.map()` and outputs the formatted html containing the returned place using template literals.
* **Fetch API** : When we call fetch API, it returns a promise. A promise means something that will eventually comeback. After that, we run a `.then()` against the promise, which gives us a blob of data [The code doesn't know what kind of data is returned yet]. Then, we run `.json()` on the blob of data, which converts it to json and gives us raw data which we can finally put to use.
* To use regular expression, we need to declare a variable with flags.

  ```javascript
  const regex = new RegExp(wordToMatch, "gi"); //G for Global, I for case-insensitive
  ```

* `change` event only occurs when click outside the input box, not as we type.
* For 'as-we-type' cases we can use `keyup` event
